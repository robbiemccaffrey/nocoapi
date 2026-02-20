---
title: "Learn Italian"
description: "A full-stack language learning app featuring vocabulary practice, image-based exercises with OCR, and audio pronunciation powered by text-to-speech."
client: "Personal Project"
industry: "Education"
thumbnail: "/images/projects/learn-italian-thumb.jpg"
screenshots: []
tags: ["Web Application", "Education", "Language Learning"]
technologies: ["React", "TypeScript", "Express", "Vite", "Tesseract.js"]
liveUrl: "https://italian.robertmccaffrey.ie"
problem: "Existing language learning apps are either too generic or too expensive for focused vocabulary building. There was a need for a targeted Italian learning tool that combines visual, audio, and text-based exercises in one cohesive experience."
process: "We designed the app around active recall principles, building multiple exercise types including vocabulary flashcards, image-based OCR exercises using Tesseract.js, and audio pronunciation practice with text-to-speech. The React frontend provides instant feedback, while the Express backend handles media processing with sharp and ffmpeg. The monorepo structure keeps frontend and backend code organised and deployable together."
results: "The app delivers a focused learning experience with multiple exercise formats. Image recognition exercises add a unique visual dimension to vocabulary practice, and the text-to-speech integration helps with pronunciation — areas where many language apps fall short."
featured: true
publishDate: 2024-09-20
---

## Overview

Learn Italian is a full-stack language learning application built to make Italian vocabulary acquisition engaging and effective. It combines traditional flashcard-style exercises with more advanced features like OCR-based image recognition and text-to-speech pronunciation.

## The Challenge

Most language learning tools take a one-size-fits-all approach. We wanted to build something more focused — a tool specifically designed for Italian vocabulary that uses multiple learning modalities to reinforce retention. The technical challenge was integrating browser-based OCR and audio generation without relying on expensive third-party APIs.

## Our Approach

The frontend is built with React and Vite for a fast, responsive experience. Exercise types include vocabulary drills, image-based challenges (where Tesseract.js identifies Italian text in images), and pronunciation practice using the Web Speech API.

The Express backend handles media processing — resizing images with sharp and processing audio with ffmpeg. The monorepo structure with npm workspaces keeps everything in one place while maintaining clean separation of concerns.

## Results

The app provides a genuinely unique approach to language learning, with the image recognition feature being a standout. Performance is snappy thanks to Vite's build optimisations, and the app is fully deployed and accessible at italian.robertmccaffrey.ie.
