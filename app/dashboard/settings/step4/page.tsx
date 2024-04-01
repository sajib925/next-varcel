import { Separator } from '@/components/ui/separator'
import { Step4Form } from '@/components/ui/step4-form'
import { fetchSettingById } from '@/prisma/queries/settings'

export default async function Settings() {
    const settings = await fetchSettingById('1')

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Step 4 settings</h3>
                <p className="text-sm text-muted-foreground">This are no settings available for step four.</p>
            </div>
            <Separator />
            <Step4Form defaultData={settings?.stepFour} />
        </div>
    )
}
