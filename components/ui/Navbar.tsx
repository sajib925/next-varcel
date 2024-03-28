"use client"

import {LayoutDashboard,Settings , HandHelping , Calculator } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings  className="h-5 w-5" />
  },
  {
    title: "Help Requestes",
    href: "/dashboard/help-requestes",
    icon: <HandHelping  className="h-5 w-5" />
  },
  {
    title: "Calculator",
    href: "/dashboard/calculator",
    icon: <Calculator className="h-5 w-5" />
  },
 
]

export const Navbar = ({className} : {className:string}) => {
  const pathname = usePathname()
  return (
    <nav className={className}>
        {
          navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground hover:bg-muted ${pathname === item.href
                ? "text-foreground bg-muted" : "text-muted-foreground"}`}
            >
              
              {item.icon}
              {item.title}
            </Link>
          ))
        }
    </nav>
  )
}   