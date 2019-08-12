import React from "react";
import { Helmet } from "react-helmet"
import favicon from "../../static/nightvale.jpg";

export const SiteHead = () => {
  return (
    <Helmet>
      <html lang="en" />
      <title>And now, the weather</title>
      <link rel="icon" href={favicon} />
      <meta
        name="description"
        content="A collection of all songs in Welcome to Nightvale"
      />
      <meta name="theme-color" content="#9a3b8f" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="And now, the weather!" />
      <meta
        property="og:description"
        content="A collection of all songs in Welcome to Nightvale"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://and.nowtheweather.com" />
      <meta property="og:image" content={favicon} />
    </Helmet>
  );
};
