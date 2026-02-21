---
title: "TaxZap — Consumer Tax Platform"
description: "A consumer-facing tax filing platform that helps over 130,000 taxpayers across Ireland and the UK claim refunds in minutes using AI and Open Banking."
client: "TaxZap"
industry: "FinTech"
thumbnail: "/images/projects/taxzap-thumb.webp"
screenshots: []
tags: ["Web Application", "FinTech", "SaaS"]
technologies: ["TypeScript", "Node.js", "React", "Postgres", "AWS", "Terraform"]
liveUrl: "https://taxzap.com/uk"
problem: "TaxZap needed a robust, scalable platform that could guide everyday taxpayers through the refund claiming process — fast, secure, and simple enough for anyone to use. With over 11.5 million UK taxpayers filing self-assessments annually and an estimated £2.64 billion in unclaimed CIS refunds alone, the opportunity was massive but the existing setup couldn't handle the growth trajectory."
process: "The platform was architected from the ground up with scalability at its core. The React frontend delivers a smooth, guided experience — including the signature gamified 'swipe' interface that lets users confirm or reject suggested expenses in seconds. The backend leverages Node.js and Postgres for reliable, secure handling of sensitive financial data, with Open Banking integrations to pull transaction data directly from users' bank accounts. Infrastructure was provisioned with Terraform on AWS, enabling repeatable deployments and elastic scaling during peak filing season."
results: "The platform now serves over 130,000 clients across Ireland and the UK, with 340% sales growth since launch. Revenue exceeded £1 million, and TaxZap raised £2.2 million in seed funding led by Affinity Ventures. The architecture scales elastically during peak filing season and the team continues shipping features rapidly on the foundations that were built."
featured: true
publishDate: 2024-06-15
---

## Overview

TaxZap is an Irish-founded FinTech platform — dubbed the "Tinder of Tax" — that uses AI and Open Banking to automate self-assessment tax filing. Founded in 2021, it enables taxpayers in Ireland and the UK to file returns and claim refunds in under 10 minutes. The platform is a registered tax agent with Irish Revenue and a recognised HMRC software provider in the UK.

## The Challenge

The tax filing market is enormous but underserved. Over 11.5 million UK taxpayers file self-assessments each year, and 1.1 million regularly miss deadlines. An estimated 1.2 million CIS subcontractors could collectively claim £2.64 billion in unclaimed refunds. The process is complex enough that most people either overpay or don't file at all. TaxZap needed a platform that could make filing as simple as swiping through a dating app — while handling sensitive financial data securely and scaling to meet viral growth.

## Technical Approach

The platform was built as a Progressive Web App with React powering the frontend experience. The standout feature is the gamified swipe interface — similar to dating apps — where users quickly confirm or reject AI-suggested allowable expenses. Behind the scenes, Open Banking integrations connect directly to users' bank accounts to pull transaction data automatically, and AI analyses that data to identify eligible tax reliefs across medical expenses, tuition fees, flat-rate expenses, Rent Tax Credit, and CIS subcontractor refunds.

The backend runs on Node.js with Postgres for transactional data — critical when dealing with financial records and government tax system integrations. Infrastructure was provisioned entirely with Terraform on AWS, designed for horizontal scaling during peak filing periods when traffic spikes dramatically.

Monitoring, alerting, and security were built in from day one — non-negotiable when handling taxpayer data and integrating with Revenue and HMRC systems.

## Results

The platform has scaled to serve over 130,000 clients across the UK and Ireland. Key outcomes:

- **340% sales growth** since launching in November 2021
- **Revenue exceeding £1 million** annually
- **£2.2 million seed round** led by Affinity Ventures, with angel investors including the CEO of Wayflyer
- **Sub-second page loads** and infrastructure that scales elastically during filing season
- TaxZap also built one of the world's largest tax-focused TikTok communities with 50,000+ followers, driving organic growth that the platform was built to handle
