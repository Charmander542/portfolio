import React from "react";
import Script from "next/script";

const Scripts = React.memo(() => {
  return (
    <>
      <Script
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive" id="gtag-config">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
        `}
      </Script>
    </>
  );
});

Scripts.displayName = "Scripts";

export default Scripts;
