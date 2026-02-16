import { useTranslation } from 'react-i18next';
import './WhatsAppWidget.scss';

const WhatsAppWidget = () => {
    const { t } = useTranslation();

    const handleClick = () => {
        const phone = '998974075793';
        const message = encodeURIComponent(
            `${t('whatsappMessage')} ${window.location.href}`
        );
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');

        // Track event if GA is available
        if (window.gtag) {
            window.gtag('event', 'whatsapp_click', {
                event_category: 'Contact',
                event_label: window.location.pathname
            });
        }
    };

    return (
        <div className="whatsapp-widget" onClick={handleClick}>
            <div className="whatsapp-widget__pulse"></div>
            <div className="whatsapp-widget__icon">
                <svg viewBox="0 0 32 32" fill="white">
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.736 5.484 2.024 7.792L0 32l8.416-2.008A15.923 15.923 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.344c-2.476 0-4.868-.68-6.964-1.968l-.5-.296-5.168 1.232 1.232-5.168-.296-.5A13.28 13.28 0 012.656 16c0-7.364 5.98-13.344 13.344-13.344S29.344 8.636 29.344 16 23.364 29.344 16 29.344zm7.308-9.976c-.4-.2-2.368-1.168-2.736-1.304-.368-.132-.636-.2-.904.2-.268.4-1.036 1.304-1.272 1.572-.232.268-.468.3-.868.1-.4-.2-1.688-.62-3.216-1.98-1.188-1.06-1.992-2.368-2.224-2.768-.232-.4-.024-.616.176-.816.18-.18.4-.468.6-.7.2-.232.268-.4.4-.668.132-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.24-2.98-.328-.78-.66-.672-.904-.684-.232-.012-.5-.012-.768-.012s-.7.1-1.068.5c-.368.4-1.404 1.372-1.404 3.348s1.436 3.884 1.636 4.152c.2.268 2.828 4.316 6.852 6.052.956.412 1.704.66 2.288.844.96.304 1.836.26 2.528.16.772-.116 2.368-.968 2.7-1.904.332-.936.332-1.74.232-1.904-.1-.168-.368-.268-.768-.468z" />
                </svg>
            </div>
            <span className="whatsapp-widget__tooltip">{t('whatsappTooltip')}</span>
        </div>
    );
};

export default WhatsAppWidget;
