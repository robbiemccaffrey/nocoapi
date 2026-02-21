---
title: "Interview Prep App"
description: "An interactive study tool for technical interview preparation covering data structures, algorithms, and system design with progress tracking."
client: "Personal Project"
industry: "Education"
thumbnail: "/images/projects/interview-prep-thumb.webp"
screenshots: []
tags: ["Web Application", "Education", "Developer Tools"]
technologies: ["React", "TypeScript", "Vite"]
liveUrl: "https://interview.robertmccaffrey.ie"
problem: "Technical interview preparation involves juggling multiple resources — textbooks, LeetCode, YouTube videos, notes. There was no single, clean interface that combined learning material with hands-on coding practice and progress tracking."
process: "We built a focused study tool with two core modules: Learn (covering 10 data structure and algorithm topics with clear explanations) and Practice (24 coding problems across difficulty levels). The in-browser Python execution uses Pyodide (WebAssembly), so users can write and run code without any backend. Progress is tracked via localStorage for a seamless, no-login experience."
results: "The app provides a streamlined interview prep experience — no account required, no distractions. The in-browser code execution is fast and reliable, and progress persists across sessions. The clean UI keeps users focused on learning rather than navigating."
featured: true
publishDate: 2024-08-10
---

## Overview

The Interview Prep App is an interactive study tool designed for software engineering interview preparation. It combines structured learning material with hands-on coding practice, all in a clean, distraction-free interface.

## The Challenge

Interview preparation typically involves bouncing between multiple platforms — reading theory in one place, practising problems in another, and tracking progress manually. We wanted a single tool that covers the full learning cycle: understand the concept, practice it, and track your progress.

## Our Approach

The app is split into two modules:

- **Learn**: Ten comprehensive topics covering fundamental data structures and algorithms, each with clear explanations and visual examples.
- **Practice**: Twenty-four coding problems spanning easy, medium, and hard difficulty levels. Each problem includes a description, hints, and a built-in code editor with Python execution.

The standout technical feature is in-browser Python execution via Pyodide (a WebAssembly port of CPython). This means users can write, run, and test code directly in the browser — no server-side execution needed. Progress tracking uses localStorage, so there's no account creation required.

## Results

The app delivers a focused, no-friction interview prep experience. The in-browser execution removes the usual barriers of setting up a local development environment, and the progress tracking helps users see what they've covered and what needs more work.
