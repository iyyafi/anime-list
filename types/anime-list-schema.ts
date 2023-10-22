import { z } from 'zod'

export const dataEntityShema = z.object({
    mal_id: z.number(),
    images: z.object({
        webp: z.object({
            image_url: z.string(),
        }),
    }),
    title: z.string(),
    source: z.string(),
    duration: z.string(),
    genres: z
        .array(z.object({ name: z.string() }))
        .optional()
        .nullable(),
})

export const animeListShema = z.object({
    data: z.array(dataEntityShema),
    pagination: z.object({
        has_next_page: z.boolean(),
        items: z.object({
            total: z.number(),
        }),
    }),
})

export type DataEntityShemaType = z.infer<typeof dataEntityShema>
export type AnimeListSchemaType = z.infer<typeof animeListShema>
