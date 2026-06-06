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

  // List of routes to pre-render
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

  for (const url of routes) {
    console.log(`Rendering route: ${url}`);
    
    // Update global state for router/page context
    globalThis.window.location.pathname = url;
    globalThis.window.location.href = `https://dredmark.com${url}`;

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

    // Determine output file path
    let distFolder = toAbsolute('./dist');
    let filePath;
    if (url === '/') {
      filePath = path.join(distFolder, 'index.html');
    } else {
      const subFolder = path.join(distFolder, url);
      if (!fs.existsSync(subFolder)) {
        fs.mkdirSync(subFolder, { recursive: true });
      }
      filePath = path.join(subFolder, 'index.html');
    }

    // Write final html page
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`✅ Pre-rendered and saved to: ${filePath}`);
  }

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
