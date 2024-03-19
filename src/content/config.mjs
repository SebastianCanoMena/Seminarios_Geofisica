import { z, defineCollection } from "astro:content";

const seminars = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        modality: z.string(),
        type: z.string(),
        cycle: z.number(),
        datetime: z.date(),
        place: z.string(),
        description: z.string(),
        youtube_link: z.string(),
        youtube_embed: z.string(),
        facebook_link: z.string(),

        speaker:{
                name: z.string(),
                img_url: z.string(),
                img_alt: z.string(),
                institution: z.string(),
                institution_deparment: z.string(),
                institution_link: z.string(),
                semblance: z.string()
            },
        host:{
                name: z.string(),
                img_url: z.string(),
                img_alt: z.string(),
                institution: z.string(),
                institution_deparment: z.string(),
                institution_link: z.string(),
            }

    }),
});

export const collections = {
    'seminar': seminars
}