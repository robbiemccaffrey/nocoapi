---
title: "Xelda — Automated Payment Platform"
description: "Built the product, platform, and infrastructure from zero to production for a Sequoia Arc startup, integrating 5,000+ banks and accountancy software into a unified payment automation engine for SMEs."
client: "Xelda (Sequoia Arc 22)"
industry: "FinTech"
thumbnail: ""
screenshots: []
tags: ["Web Application", "FinTech", "Payments"]
technologies: ["Python", "Django", "AWS", "Postgres", "React"]
## liveUrl removed — xelda.com is down
problem: "SMEs were managing payments across disconnected systems — multiple banking portals, accounting software, and manual reconciliation spreadsheets. With no unified way to initiate, automate, and reconcile payments, businesses were losing time and money to a fragmented workflow. Xelda needed to bring 5,000+ bank connections, card payments, direct debits, and accounting integrations into a single platform."
process: "The entire technical stack was designed and built from scratch. The backend was built with Python and Django — chosen for rapid iteration and a mature ecosystem of financial libraries — with Postgres providing strong consistency guarantees essential for payment processing. The platform integrates with over 5,000 banks, supports card and direct debit payments, and connects with 10+ accounting software platforms for automatic reconciliation. Custom rule-based approval workflows, real-time notifications via email, SMS, and Slack, and AI-powered automation were layered on top. Infrastructure ran on AWS, designed for reliability and auditability from day one."
results: "Delivered a fully operational payment automation platform from zero to production. The platform went through Sequoia Capital's Arc Europe programme — the inaugural cohort — receiving investment and mentorship. The unified integration layer eliminated manual payment processes for customers, and the engineering team grew from 1 to 6 on a strong technical foundation."
featured: true
publishDate: 2023-11-01
---

## Overview

Xelda is a Dublin-based FinTech startup that serves as a payments and finance management engine for SMEs — making payments faster, cheaper, and more insightful. Founded in 2021, Xelda was accepted into the inaugural cohort of Sequoia Capital's Arc Europe programme in 2022, alongside 14 other early-stage companies. The platform centralises bank accounts, automates reconciliation, and streamlines invoicing for businesses still relying on fragmented payment workflows.

## The Challenge

Payment workflows for SMEs are fragmented. Businesses deal with multiple banking portals, disconnected accounting systems, and manual reconciliation processes that eat hours every week. The goal was to build a platform that could connect thousands of banking providers, support multiple payment methods, and integrate with existing accounting software — all while handling the complexity of different banking APIs, regulatory requirements, and the edge cases that come with moving money.

The founding team — backed by angel investment from the co-founders of Flipdish (an Irish unicorn) — needed an engineering partner who could translate an ambitious product vision into a production-ready platform from day one.

## Technical Approach

The backend was built with Python and Django, chosen for rapid iteration and a mature ecosystem of financial libraries. Postgres handled transactional data with strong consistency guarantees — critical when dealing with payments. The platform integrates with over 5,000 banks and supports card payments, direct debits, and bank transfers.

Key technical challenges included:

- Designing a flexible integration architecture that could onboard new banking and accounting partners without major refactoring
- Building custom rule-based approval workflows that businesses could configure to match their internal processes
- Implementing real-time notifications across email, SMS, and Slack
- Creating AI-powered automated payment workflows that reduced manual processing time

The React frontend provided a clean interface for managing payment workflows, reviewing automated actions, and monitoring integration health across all connected systems. Infrastructure ran on AWS, designed for reliability and auditability from the start.

## Results

The platform went from zero to production, processing real payments for customers. Key outcomes:

- **Sequoia Arc 2022** — accepted into the inaugural cohort of Sequoia Capital's European programme, receiving investment and mentorship
- **5,000+ bank integrations** connected through a unified platform
- **10+ accounting software integrations** for automatic reconciliation
- **Engineering team scaled from 1 to 6** on a strong technical foundation
- **Integration architecture** proved flexible enough to onboard new partners without refactoring
