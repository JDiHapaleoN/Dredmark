import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import i18n from './i18n'

export function render(url) {
  // Sync translation context with path prefix on the server
  let lang = 'ru';
  if (url.startsWith('/en')) {
    lang = 'en';
  } else if (url.startsWith('/uz')) {
    lang = 'uz';
  }
  i18n.changeLanguage(lang);

  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
