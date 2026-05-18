/// <reference types="astro/client" />

import { defineCollection, z } from 'astro:content';

const weeks = defineCollection({
  schema: z.object({
    title: z.string(),
    weekNumber: z.number(),
    year: z.number(),
    weekStart: z.string(),
    weekEnd: z.string(),
    general: z.string(),
    masses: z.array(
      z.object({
        day: z.string(),
        date: z.string(),
        time: z.string(),
        intention: z.string().optional(),
        place: z.string().optional(),
        note: z.string().optional(),
      })
    ),
  }),
});

const announcements = defineCollection({});

export const collections = {
  weeks,
  announcements,
};