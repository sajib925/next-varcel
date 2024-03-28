import { Button } from "@/components/ui/button";

import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"
import { taskSchema } from "@/data/schema";
import { UserNav } from "@/components/ui/user-nav";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/ui/Columns";
import { taskData } from "@/data/data";


export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
// async function getTasks() {
//   const data = await fs.readFile(
//     // path.join(__dirname, "tasks.json")
    
//   )
  console.log( path.join(__dirname, "tasks.json"))
  // const tasks = JSON.parse(data.toString())

//   return z.array(taskSchema).parse(tasks)
// }


export default async function HelpRequests() {
  // const tasks = await getTasks()

  return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Help Requests</h1>
          </div>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <UserNav />
            </div>
          </div>
          <DataTable data={taskData} columns={columns} />
      </div>
      </main>
   
  );
}