import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from '@/components/ui/toaster'
import StoreProvider from '@/store/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ads calculator settings',
    description: 'Dashboard',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/faviconx256.png" sizes="any" />
                <link rel="icon" href="/faviconx32.png" type="image/x-icon" sizes="16x16" />
            </head>
            <body className={inter.className}>
                <NextTopLoader
                    color="#000000"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={4}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                    showAtBottom={false}
                />
                <StoreProvider>
                    <ClerkProvider>
                        <main>{children}</main>
                        <Toaster />
                    </ClerkProvider>
                </StoreProvider>
            </body>
        </html>
    )
}
