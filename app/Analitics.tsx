import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-EWKJF8RQRH"
    ></Script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-EWKJF8RQRH');
        `,
      }}
    ></Script>
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1686642523518202"
      crossOrigin="anonymous"
    ></Script>
  </>
);
export default GoogleAnalytics;
