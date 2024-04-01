import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex items-center justify-center h-full w-full min-h-[85vh]">
            <SignUp />
        </div>
    )
}
