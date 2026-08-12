import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // the "file extension" category — .hro, .mnstr, .moon, .w1z, or any new one you invent later
    ext: z.string(),
    pubDate: z.coerce.date(),
    // short teaser shown in the directory listing
    excerpt: z.string(),
    // path to an image in /public/images/posts/, e.g. "/images/posts/cowboy-dogs.jpg"
    image: z.string().optional(),
    // slugs (filenames without .md) of other posts this one links to — for your serials
    related: z.array(z.string()).optional(),
    // set true to hide a post from the site without deleting the file
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts };
