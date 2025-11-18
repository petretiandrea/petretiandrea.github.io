import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.string(),
    draft: z.boolean().default(false),
    slug: z.string().optional()
  })
});

export const collections = {
  blog: blogCollection
};
