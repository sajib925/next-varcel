import { Separator } from '@/components/ui/separator'
import { Step2Form } from '@/components/ui/step2-form'
import { fetchSettingById } from '@/prisma/queries/settings'

export default async function Step2Settings() {
    const settings = await fetchSettingById('1')

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Step 2 settings</h3>
                <p className="text-sm text-muted-foreground">
                    This controls settings for fields / calculations used in step 2
                </p>
            </div>
            <Separator />

            {/* Pass data from server component to client component */}
            {/* Data was fetched form a server side request */}
            <Step2Form defaultData={settings?.stepTwo || null} />
        </div>
    )
}
