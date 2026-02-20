---
title: "Inscribe — Enterprise Fraud Detection Platform"
description: "Built and owned the enterprise partner API platform from the ground up at a Y Combinator startup, enabling integrations with Stripe, Ramp, and Fortune 500 partners while scaling the fraud detection platform from inception to millions in ARR."
client: "Inscribe (YC S18)"
industry: "FinTech"
thumbnail: "/images/projects/inscribe-thumb.jpg"
screenshots: []
tags: ["Web Application", "FinTech", "AI/ML"]
technologies: ["Python", "Django", "AWS", "Postgres", "Vue"]
liveUrl: "https://inscribe.ai"
problem: "Financial institutions needed a reliable, scalable way to detect document fraud — but existing solutions were slow, inaccurate, or impossible to integrate into enterprise workflows. Inscribe needed an API platform that enterprise partners like Stripe and Ramp could depend on with contractual SLAs."
process: "As the fourth engineering hire, I built and owned the enterprise partner API platform from scratch. This included external-facing APIs, developer documentation, and the reliability infrastructure needed to meet contractual SLAs and internally defined SLOs for availability, latency, and reliability. I worked directly with partners like Stripe, Ramp, and Fortune 500 companies (including HP) to ensure the integration experience met their standards. Beyond the API platform, I contributed across the full stack — helping scale the fraud detection platform from early product to millions in ARR."
results: "The API platform became the backbone of Inscribe's enterprise go-to-market, directly enabling high-value commercial integrations with some of the biggest names in FinTech. I contributed to the $11M Series A (team of 6) and $25M Series B fundraising rounds, and helped grow the engineering team from 4 to 30+. The platform scaled to handle millions in ARR with the reliability that enterprise partners demanded."
featured: true
publishDate: 2022-09-01
---

## Overview

Inscribe is a YC S18 company that uses AI to detect document fraud for financial institutions. As the fourth engineer, I joined early and built the enterprise API platform that partners like Stripe, Ramp, and HP depend on.

## The Challenge

Enterprise fraud detection requires two things: accuracy and reliability. The AI models handled accuracy — my job was reliability. Enterprise partners needed APIs they could trust with contractual SLAs, comprehensive documentation, and an integration experience that met the standards of companies like Stripe.

Building for enterprise also meant thinking about things most startups defer: versioning strategy, rate limiting, webhook delivery guarantees, detailed audit logging, and graceful degradation.

## My Role

I built and owned the partner API platform end-to-end:

- Designed and implemented external-facing REST APIs
- Built developer documentation used by Stripe, Ramp, and Fortune 500 partners
- Defined and maintained SLAs (contractual) and SLOs (internal) for availability, latency, and reliability
- Worked directly with partner engineering teams on integrations
- Contributed to the broader fraud detection platform across the full stack

## Technical Approach

The platform was built with Python and Django on AWS, with Postgres as the primary data store. The API layer was designed for high availability with comprehensive monitoring and alerting. We built robust webhook delivery with retry logic and dead-letter queues to ensure partners never missed an event.

Vue powered the internal dashboards and customer-facing fraud review interfaces, providing real-time visibility into detection results and integration health.

## Impact

The numbers tell the story:

- **$11M Series A** and **$25M Series B** — contributed to both fundraising rounds
- **4 to 30+** — helped grow the engineering team
- **Millions in ARR** — scaled the platform from early product to significant revenue
- **Stripe, Ramp, HP** — enterprise partners integrated and depending on the platform

Building something that Stripe trusts enough to integrate into their workflows was a career highlight.
