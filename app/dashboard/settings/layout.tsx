import React from 'react'
import { Separator } from '@/components/ui/separator'
import { SidebarNav } from '@/components/ui/sidebar-nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Forms',
    description: 'Advanced form example using react-hook-form and Zod.',
}

const sidebarNavItems = [
    {
        title: 'Step 1',
        href: '/dashboard/settings/step1',
    },
    {
        title: 'Step 2',
        href: '/dashboard/settings/step2',
    },
    {
        title: 'Step 3',
        href: '/dashboard/settings/step3',
    },
    {
        title: 'Step 4',
        href: '/dashboard/settings/step4',
    },
    {
        title: 'Step 5',
        href: '/dashboard/settings/step5',
    },
    {
        title: 'Step 6',
        href: '/dashboard/settings/step6',
    },
    {
        title: 'Step 7',
        href: '/dashboard/settings/step7',
    },
    {
        title: 'Profile',
        href: '/dashboard/settings',
    },
    {
        title: 'Account',
        href: '/dashboard/settings/account',
    },
    {
        title: 'Appearance',
        href: '/dashboard/settings/appearance',
    },
    {
        title: 'Notifications',
        href: '/dashboard/settings/notifications',
    },
    {
        title: 'Display',
        href: '/dashboard/settings/display',
    },
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <>
            <div className="md:hidden"></div>
            <div className="hidden space-y-6 p-10 pb-16 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                    <p className="text-muted-foreground">Manage calculator settings.</p>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>

                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </>
    )
}
