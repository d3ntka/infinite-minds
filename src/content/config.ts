import {z, defineCollection} from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        active: z.boolean(),
        title: z.string(),
        date: z.date(),
        description: z.string(),
        links: z.object({
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
});


const jobsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        active: z.boolean(),
        position: z.string(),
        employer: z.string(),
        startDate: z.date(),
        endDate: z.date().optional,
        present: z.boolean(),
        description: z.string(),
        tags: z.array(z.string()),
    })
});


export const collections = {
    projects: projectsCollection,
    jobs: jobsCollection,
}