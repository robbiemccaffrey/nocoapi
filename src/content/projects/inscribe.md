---
title: "Inscribe — Enterprise Fraud Detection Platform"
description: "Built and owned the enterprise partner API platform for a Y Combinator startup, enabling integrations with Stripe, Ramp, and Fortune 500 partners while scaling the AI fraud detection platform to millions in ARR."
client: "Inscribe (YC S18)"
industry: "FinTech"
thumbnail: "/images/projects/inscribe-thumb.webp"
screenshots: []
tags: ["Web Application", "FinTech", "AI/ML"]
technologies: ["Python", "Django", "AWS", "Postgres", "Vue"]
liveUrl: "https://inscribe.ai"
problem: "Financial institutions lose billions annually to document fraud — forged bank statements, pay stubs, and tax forms used to secure loans, open accounts, or launder money. Manual document review takes approximately 30 minutes per application and is error-prone. Inscribe needed an enterprise-grade API platform that partners like Stripe and Ramp could depend on with contractual SLAs, while the AI models detected fraud in seconds rather than minutes."
process: "The enterprise partner API platform was designed and built from scratch — external-facing REST APIs, developer documentation, webhook delivery with retry logic and dead-letter queues, and the reliability infrastructure needed to meet contractual SLAs for availability, latency, and uptime. The platform integrates directly with partners including Stripe, Ramp, Plaid, Bluevine, Navan, and Fortune 500 companies, using layered detection techniques — forensic, semantic, perceptual, and network analysis — to identify forged, manipulated, and AI-generated documents in approximately 90 seconds."
results: "The API platform became the backbone of Inscribe's enterprise go-to-market strategy, directly enabling high-value integrations with some of the biggest names in FinTech. The platform scaled from early product to millions in ARR with 3x year-over-year growth, detecting over $40 million in document fraud per month. The company raised $38 million across multiple rounds including an $11M Series A and $25M Series B led by Threshold Ventures."
featured: true
publishDate: 2022-09-01
---

## Overview

Inscribe is a YC S18 company that uses AI to detect document fraud for financial institutions. Founded in 2017 by Irish twin brothers Ronan and Conor Burke, the company created the document fraud detection category and has grown to serve banks, credit unions, lenders, and FinTech companies worldwide. Inscribe's AI Risk Agents can 70x a team's output by automating routine onboarding and underwriting tasks, detecting fraud in approximately 90 seconds compared to the 30-minute manual review process.

## The Challenge

Enterprise fraud detection demands two things: accuracy and reliability. Inscribe's AI models handle accuracy — detecting forged bank statements, pay stubs, tax forms, and AI-generated documents using layered forensic, semantic, perceptual, and network analysis. The challenge was building the reliability layer that enterprise partners demanded.

Partners like Stripe, Ramp, and Plaid needed APIs they could trust with contractual SLAs, comprehensive documentation, and an integration experience that met their engineering standards. Building for enterprise also meant solving problems most startups defer: API versioning strategy, rate limiting, webhook delivery guarantees, detailed audit logging, and graceful degradation under load.

## Technical Approach

The platform was built with Python and Django on AWS, with Postgres as the primary data store. The API layer was designed for high availability with comprehensive monitoring and alerting.

Key technical deliverables included:

- External-facing REST APIs with versioning and rate limiting
- Developer documentation used by Stripe, Ramp, Plaid, and Fortune 500 engineering teams
- Robust webhook delivery with retry logic and dead-letter queues — ensuring partners never missed fraud detection events
- Contractual SLAs and internally defined SLOs for availability, latency, and reliability
- Direct integration work with partner engineering teams

Vue powered the internal dashboards and customer-facing fraud review interfaces, providing real-time visibility into detection results and integration health across all connected partners.

The platform covers a wide range of document types — bank statements, pay stubs, tax forms, invoices, balance sheets, and profit and loss statements — processing them through AI models that reduce review time from 30 minutes to approximately 90 seconds.

## Results

The numbers speak for themselves:

- **$38 million raised** across seed, Series A ($11M), and Series B ($25M led by Threshold Ventures)
- **$40+ million** in document fraud detected per month
- **3x year-over-year ARR growth** with 4x increase in monthly usage
- **Engineering team scaled from 4 to 30+** as the platform grew
- **Named customers** include Stripe, Ramp, Plaid, Bluevine, Navan, Rapid Finance, and Fortune 500 companies
- Recognised on the **AIFintech100** list and shortlisted for the **SaaS Awards**
