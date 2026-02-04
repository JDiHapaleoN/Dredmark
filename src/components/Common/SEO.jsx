import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, keywords, image, url, type = "website" }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const siteName = "DREDMARK";
    const baseUrl = "https://dredmark.com"; // Change to actual production URL
    const canonicalUrl = `${baseUrl}${url || ""}`;
    const defaultImage = `${baseUrl}/favicon.png`;
    const imageUrl = image || defaultImage;

    // Schema.org Organizations
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": baseUrl,
        "logo": `${baseUrl}/favicon.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+998-99-851-60-74",
            "contactType": "sales",
            "areaServed": ["UZ", "RU", "KZ", "TJ"],
            "availableLanguage": ["Russian", "English", "Uzbek"]
        },
        "description": description
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title ? `${title} | ${siteName}` : siteName}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <html lang={currentLang} />

            {/* hreflang for Multilingual SEO */}
            <link rel="alternate" href={`${baseUrl}${url || ""}`} hreflang="x-default" />
            <link rel="alternate" href={`${baseUrl}${url || ""}`} hreflang="ru" />
            <link rel="alternate" href={`${baseUrl}${url || ""}`} hreflang="en" />
            <link rel="alternate" href={`${baseUrl}${url || ""}`} hreflang="uz" />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* OpenGraph */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title || siteName} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteName} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
