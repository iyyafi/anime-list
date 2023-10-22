import { z } from 'zod'

export const animeDetailSchema = z.object({
    mal_id: z.number(),
    images: z.object({
        webp: z.object({
            large_image_url: z.string(),
        }),
    }),
    url: z.string(),
    title: z.string(),
    titles: z
        .array(
            z.object({
                title: z.string(),
            })
        )
        .nullable()
        .optional(),
    source: z.string(),
    duration: z.string(),
    synopsis: z.string(),
    aired: z.object({ string: z.string() }),
    genres: z
        .array(z.object({ name: z.string() }))
        .optional()
        .nullable(),
})

export type AnimeDetailSchema = z.infer<typeof animeDetailSchema>
