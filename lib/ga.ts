"use client";

import ReactGA from "react-ga4";

import { useEffect } from "react";

export default function GoogleAnalyticsInit() {
  useEffect(() => {
    const gaKey = process.env.NEXT_PUBLIC_GA_KEY;
    if (gaKey && gaKey.trim() !== "") {
      ReactGA.initialize(gaKey);
      ReactGA.send("pageview");
    }
  }, []);

  return null;
}
