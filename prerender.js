import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 1. Mock Browser Globals for Node.js SSR Environment
globalThis.window = {
  location: {
    href: 'https://dredmark.com',
    pathname: '/',
  },
  scrollTo: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
};
globalThis.document = {
  querySelector: () => null,
  querySelectorAll: () => [],
  createElement: () => ({
    setAttribute: () => {},
    appendChild: () => {},
    style: {},
  }),
  head: {
    appendChild: () => {},
  },
  documentElement: {
    lang: 'ru',
  },
  addEventListener: () => {},
  removeEventListener: () => {},
};
globalThis.localStorage = {
  getItem: () => 'ru',
  setItem: () => {},
  removeItem: () => {},
};
Object.defineProperty(globalThis, 'navigator', {
  value: {
    userAgent: 'node',
    language: 'ru',
  },
  writable: true,
  configurable: true,
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper to resolve paths
const toAbsolute = (p) => path.resolve(__dirname, p);

async function prerender() {
  console.log('🚀 Starting pre-rendering...');

  // Import Helmet after setting up globals to avoid potential issue
  const { Helmet } = await import('react-helmet');

  // Import the render function from compiled server bundle
  const serverBundlePath = toAbsolute('./dist/server/entry-server.js');
  if (!fs.existsSync(serverBundlePath)) {
    console.error(`❌ Server bundle not found at: ${serverBundlePath}. Run SSR build first.`);
    process.exit(1);
  }
  const { render } = await import(serverBundlePath);

  // Read the built client template
  const templatePath = toAbsolute('./dist/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Client template not found at: ${templatePath}. Run Client build first.`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // List of languages and routes to pre-render
  const languages = ['ru', 'en', 'uz'];
  const routes = [
    '/',
    '/products',
    '/about',
    '/sertificates',
    '/video',
    '/img',
    '/technology',
    '/technology/choosing-dredger',
    '/technology/performance-calculation',
    '/technology/amphibious-dredgers',
    '/technology/karshi-project',
    '/technology/maintenance-tips',
    '/technology/dredging-safety',
  ];

  for (const lang of languages) {
    for (const route of routes) {
      // Determine virtual URL for Router context
      const url = lang === 'ru' ? route : `/${lang}${route === '/' ? '' : route}`;
      console.log(`Rendering route: ${url} (lang: ${lang})`);
      
      // Update global states
      globalThis.window.location.pathname = url;
      globalThis.window.location.href = `https://dredmark.com${url}`;
      globalThis.localStorage.getItem = () => lang;

      // Update navigator language mock
      Object.defineProperty(globalThis, 'navigator', {
        value: {
          userAgent: 'node',
          language: lang,
        },
        writable: true,
        configurable: true,
      });

      // Render page to string
      const appHtml = render(url);

      // Get page-specific SEO meta tags from react-helmet
      const helmet = Helmet.renderStatic();

      // Prepare template modifications
      let html = template;

      // Replace the root container with SSR content
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // Replace lang attribute on html tag
      const htmlAttrs = helmet.htmlAttributes.toString();
      if (htmlAttrs) {
        html = html.replace('<html lang="ru">', `<html ${htmlAttrs}>`);
      }

      // Extract head and replace default title and meta tags with Helmet elements
      const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
      if (headMatch) {
        let headContent = headMatch[1];
        
        // Remove default index.html tags that Helmet will override
        headContent = headContent.replace(/<title>[\s\S]*?<\/title>/gi, '');
        headContent = headContent.replace(/<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/gi, '');
        headContent = headContent.replace(/<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']\s*\/?>/gi, '');
        headContent = headContent.replace(/<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/gi, '');
        headContent = headContent.replace(/<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/gi, '');
        
        const helmetTitle = helmet.title.toString();
        const helmetMeta = helmet.meta.toString();
        const helmetLink = helmet.link.toString();

        const newHeadContent = `\n  ${helmetTitle}\n  ${helmetMeta}\n  ${helmetLink}\n${headContent}`;
        html = html.replace(headMatch[1], newHeadContent);
      }

      // Determine output directory path: e.g. dist/ or dist/en/ or dist/uz/
      let distFolder = toAbsolute('./dist');
      let outputFolder = distFolder;
      if (lang !== 'ru') {
        outputFolder = path.join(outputFolder, lang);
      }
      if (route !== '/') {
        // e.g. route '/about' -> outputFolder dist/about or dist/en/about
        outputFolder = path.join(outputFolder, route.substring(1));
      }

      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
      }

      const filePath = path.join(outputFolder, 'index.html');

      // Write final html page
      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`✅ Pre-rendered and saved to: ${filePath}`);
    }
  }

  // Generate a multilingual sitemap.xml
  console.log('🤖 Generating multilingual sitemap.xml...');
  const distFolder = toAbsolute('./dist');
  const baseUrl = 'https://dredmark.com';
  let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  sitemapXml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const route of routes) {
    // Determine priority and changefreq based on route
    let priority = '0.7';
    let changefreq = 'monthly';
    if (route === '/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (route === '/products') {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (route === '/about' || route === '/technology') {
      priority = '0.8';
      changefreq = 'weekly';
    }

    for (const lang of languages) {
      const pathPart = lang === 'ru' ? route : `/${lang}${route === '/' ? '' : route}`;
      const locUrl = `${baseUrl}${pathPart === '/' ? '' : pathPart}`;
      
      sitemapXml += '  <url>\n';
      sitemapXml += `    <loc>${locUrl}</loc>\n`;
      
      // Add alternate links for all languages
      for (const altLang of languages) {
        const altPathPart = altLang === 'ru' ? route : `/${altLang}${route === '/' ? '' : route}`;
        const altUrl = `${baseUrl}${altPathPart === '/' ? '' : altPathPart}`;
        sitemapXml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}" />\n`;
      }
      
      // Add x-default link (pointing to Russian by default)
      const defPathPart = route;
      const defUrl = `${baseUrl}${defPathPart === '/' ? '' : defPathPart}`;
      sitemapXml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defUrl}" />\n`;
      
      sitemapXml += `    <priority>${priority}</priority>\n`;
      sitemapXml += `    <changefreq>${changefreq}</changefreq>\n`;
      sitemapXml += '  </url>\n';
    }
  }

  sitemapXml += '</urlset>\n';
  const sitemapPath = path.join(distFolder, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log(`✅ Multilingual sitemap.xml generated and saved to: ${sitemapPath}`);

  // Cleanup: Delete the dist/server folder since it is no longer needed on the production site

  const serverDir = toAbsolute('./dist/server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary dist/server directory.');
  }

  console.log('🎉 Pre-rendering completed successfully!');
}

prerender().catch((err) => {
  console.error('❌ Error during pre-rendering:', err);
  process.exit(1);
});
