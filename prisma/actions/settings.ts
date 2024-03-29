'use server'

import { db } from '@/prisma/db'
import type { Setting } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateOrCreateSetting(
    data: any,
    redirectUrl: string,
): Promise<{ success: boolean; error?: Error }> {
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

        return { success: true }

        // Revalidate the post page.
        // revalidatePath(`/dashboard/settings/${redirectUrl}`)
        // redirect(`/dashboard/settings/${redirectUrl}`)
    } catch (error: unknown) {
        console.error('Unknown error:', error)
        return { success: false }
    }
}
