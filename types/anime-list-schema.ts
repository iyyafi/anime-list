import { z } from 'zod'

export const dataEntitySchema = z.object({
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

export const animeListSchema = z.object({
    data: z.array(dataEntitySchema),
    pagination: z.object({
        has_next_page: z.boolean(),
        items: z.object({
            total: z.number(),
        }),
    }),
})

export type DataEntityShemaType = z.infer<typeof dataEntitySchema>
export type AnimeListSchemaType = z.infer<typeof animeListSchema>
