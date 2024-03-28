import React from 'react'


import Link from "next/link"
import {
  Home,
  Package,
  Calculator,
  Settings
  
} from "lucide-react"
import { Navbar } from './Navbar'




type Props = {}

export const SideBar = (props: Props) => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="">Logo</span>
        </Link>
      </div>
      <div className="flex-1">
        <Navbar className= "grid items-start px-2 text-sm font-medium lg:px-4" />
      </div>
      
    </div>
  </div>
  )
}