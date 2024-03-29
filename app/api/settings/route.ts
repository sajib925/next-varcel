import { db } from '@/prisma/db'

export async function GET(request: Request) {
    const setting = await db.setting.findFirst({
        where: {
            id: '1',
        },
    })

    if (!setting) {
        return new Response('Setting not found', { status: 404 })
    }

    return new Response(JSON.stringify(setting), { status: 200 })
}
