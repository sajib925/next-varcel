// 'use server'

import type { Setting } from '@prisma/client'
import { db } from '@/prisma/db'
import { notFound } from 'next/navigation'

/*
export async function fetchSettings(): Promise<Setting[] | null> {
    // Function to fetch all posts from the database.
    return await db.setting.findMany({
        orderBy: [
            {
                updatedAt: 'desc',
            },
        ],
    })
}
*/

export async function fetchSettingById(id: string): Promise<Setting | null> {
    // Function to fetch a single post by its ID.
    const setting = await db.setting.findFirst({
        where: {
            id,
        },
    })

    if (!setting) {
        notFound() // If the setting is not found, a 404 error is thrown.
    }

    return setting
}
