import React from 'react'
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserButton, auth } from '@clerk/nextjs'
import { Navbar } from './Navbar'

type Props = {}

export const Header = (props: Props) => {
    const {userId} = auth()
    return (
            <header className="flex h-14 items-center justify-between md:justify-end gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <Navbar className="grid gap-2 text-lg font-medium" />
                </SheetContent>
              </Sheet>
                {
                    userId &&
                    <div className="flex items-center gap-4">
                      <UserButton afterSignOutUrl='/sign-in'/>
                    </div>
                  
                }
              
            </header>
  )
}