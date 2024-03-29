'use server'

import { db } from '@/prisma/db'
import type { Setting } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateOrCreateSetting(data: any, redirectUrl: string): Promise<void> {
    try {
        await db.setting.upsert({
            where: {
                id: '1',
            },
            update: {
                ...data,
            },
            create: {
                ...data,
                id: '1',
                title: 'Settings',
            },
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error
        } else {
            console.error('Unknown error:', error)
        }
    }

    // Revalidate the post page.
    revalidatePath(`/dashboard/settings/${redirectUrl}`)
    redirect(`/dashboard/settings/${redirectUrl}`)
}
