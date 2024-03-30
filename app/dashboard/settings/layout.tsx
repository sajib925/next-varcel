import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/ui/sidebar-nav"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Step One",
    href: "/dashboard/settings",
  },
  {
    title: "Step Two",
    href: "/dashboard/settings/step-two",
  },
  {
    title: "Step Three",
    href: "/dashboard/settings/step-three",
  },
  {
    title: "Step Four",
    href: "/dashboard/settings/step-four",
  },
  {
    title: "Step Five",
    href: "/dashboard/settings/step-five",
  },
  {
    title: "Step Six",
    href: "/dashboard/settings/step-six",
  },
  {
    title: "Step Seven",
    href: "/dashboard/settings/step-seven",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="md:hidden">
      
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
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
