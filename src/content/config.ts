import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),

		author : z.string().optional(),

		// Transform string to Date object
		pubDate: z.coerce.date(),
		// pubDate: z.string(),

		updatedDate: z.coerce.date().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()),

		lang : z.string().optional(),
	}),
});

export const collections = { blog };
