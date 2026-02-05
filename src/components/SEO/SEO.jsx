import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEO = () => {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();

    useEffect(() => {
        let titleKey = 'seoTitleHome';
        let descKey = 'seoDescHome';
        let keywordsKey = 'seoKeywordsHome';

        // Route-specific SEO
        if (pathname.includes('/us')) {
            titleKey = 'seoTitleUs';
            descKey = 'seoDescUs';
        } else if (pathname.includes('/vozm')) {
            titleKey = 'seoTitleVozm';
            descKey = 'seoDescVozm';
        } else if (pathname.includes('/sertificates')) {
            titleKey = 'seoTitleSert';
            descKey = 'seoDescSert';
        } else if (pathname.includes('/video') || pathname.includes('/img')) {
            titleKey = 'seoTitleGallery';
            descKey = 'seoDescGallery';
        }

        // Update Title
        document.title = t(titleKey);

        // Update Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', t(descKey));
        }

        // Update Meta Keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', t(keywordsKey));
        }

        // Update HTML lang attribute
        document.documentElement.lang = i18n.language;

        // Open Graph updates
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', t(titleKey));

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', t(descKey));

    }, [pathname, i18n.language, t]);

    return null;
};

export default SEO;
