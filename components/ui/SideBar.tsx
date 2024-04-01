import React from 'react'

import Link from 'next/link'
import { Navbar } from './Navbar'
import Image from 'next/image'

type Props = {}

export const SideBar = (props: Props) => {
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-3 lg:h-[60px] lg:px-5">
                    <Link href="/" className="flex justify-start items-center font-semibold">
                        <Image src={'/faviconx256.png'} alt={'getonnet'} width={25} height={25} />
                    </Link>
                </div>

                <div className="flex-1">
                    <Navbar className="grid items-start px-2 text-sm font-medium lg:px-4" />
                </div>
            </div>
        </div>
    )
}
