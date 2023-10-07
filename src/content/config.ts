import {z, defineCollection} from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        urls: z.object({
            github: z.string(),
            prod: z.string(),
            dev: z.string(),
        }),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
    })
})