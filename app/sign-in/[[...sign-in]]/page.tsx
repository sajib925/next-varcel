import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 mt-12">
        <h1 className="text-4xl font-bold">
           Welcome to Sign IN
        </h1>
        <SignIn />
    </div>
  ) 
}