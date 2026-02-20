import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    thumbnail: z.string(),
    screenshots: z.array(z.string()).default([]),
    tags: z.array(z.string()),
    technologies: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    problem: z.string(),
    process: z.string(),
    results: z.string(),
    featured: z.boolean().default(false),
    publishDate: z.coerce.date(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
