import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://empowermecollective.com",
  base: '/' ,
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) =>
        !page.startsWith("https://empowermecollective.com/blog/")  &&
        !page.startsWith("https://empowermecollective.com/courses")  &&
        page !== "https://empowermecollective.com/termsofuse/" &&
        page !== "https://empowermecollective.com/klaviyo/"  && 
        page !== "https://empowermecollective.com/privacypolicy/"  && 
        page !== "https://empowermecollective.com/termsofuse/" && 
        page !== "https://empowermecollective.com/about/" &&
        page !== "https://empowermecollective.com/letterOfFuture"
    }), 
    tailwind({applyBaseStyles: false}),
  
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  
  
  ],
    

    


});
