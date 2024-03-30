import { Separator } from "@/components/ui/separator";
import { StepOne } from "@/components/ui/StepOne";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <StepOne />
      
    </div>
  )
}