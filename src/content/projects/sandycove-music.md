---
title: "Sandycove School of Music"
description: "A professional website for a music school featuring a contact inquiry system with AWS SES email notifications, built with Astro and Express."
client: "Sandycove School of Music"
industry: "Education"
thumbnail: "/images/projects/sandycove-thumb.jpg"
screenshots: []
tags: ["Business Website", "Education", "Static Site"]
technologies: ["Astro", "Tailwind CSS", "TypeScript", "Express", "AWS SES"]
liveUrl: "https://sandycoveschoolofmusic.com"
problem: "The music school needed a professional online presence that would attract new students and make it easy for parents to enquire about lessons. They had no website and were relying entirely on word-of-mouth and social media."
process: "We built a fast, modern static site using Astro and Tailwind CSS that showcases the school's offerings, teachers, and location. A contact form powered by an Express API and AWS SES handles enquiries — submissions are sent directly to the school's email, with a branded template so they look professional. The static frontend ensures lightning-fast load times and excellent SEO out of the box."
results: "The school now has a polished web presence that ranks well locally and converts visitors into enquiries. The contact form handles all incoming student interest, eliminating the need for back-and-forth on social media. The site loads in under a second and scores above 95 on Google PageSpeed."
featured: true
publishDate: 2024-11-01
---

## Overview

Sandycove School of Music is a music school based in Dublin offering lessons across multiple instruments. They needed a website that matched the quality of their teaching — clean, professional, and easy to navigate.

## The Challenge

The school had no web presence beyond social media. Parents looking for music lessons in the area had no way to find them through Google, and there was no structured way to handle enquiries. The site needed to be fast, SEO-friendly, and simple to maintain.

## Our Approach

We chose Astro for its static-first architecture — perfect for a content-focused site where speed and SEO are priorities. Tailwind CSS kept the styling consistent and responsive across all devices.

The contact form is the key interactive element. Rather than using a third-party form service, we built a lightweight Express API that sends beautifully formatted enquiry emails via AWS SES. The school receives notifications at their branded email address (noreply@sandycoveschoolofmusic.com), giving a professional impression from the first interaction.

The entire frontend is static HTML — no client-side JavaScript framework needed — which means near-instant page loads and excellent Core Web Vitals scores.

## Results

The site launched at sandycoveschoolofmusic.com and immediately began generating enquiries. Key outcomes:

- PageSpeed score above 95 on mobile and desktop
- Contact form delivering enquiries directly to the school's inbox
- Strong local SEO performance for music lesson searches in the Dublin area
- Zero maintenance burden — the static site runs without intervention
