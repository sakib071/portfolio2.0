import React from 'react'
import Script from 'next/script'


export default function AnalyticsComponent() {
  return (
    <div>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-ZJNKMQEZL4`} strategy='afterInteractive'></Script>
      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZJNKMQEZL4');`}
      </Script>
    </div>
  )
}