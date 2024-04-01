import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="flex items-center justify-center flex-col h-full min-h-[80vh]">
            <SignIn />
        </div>
    )
}
