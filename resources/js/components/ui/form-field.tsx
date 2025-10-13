import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    htmlFor?: string,
    label: string,
    error?: string,
    help?: string,
}>

export function FormField({ label, children, error, help, htmlFor }: Props) {
    return (
        <div className="space-y-2">
            <Label className={cn(error && 'text-destructive')} htmlFor={htmlFor}>{label}</Label>
            {children}
            {help && <p className="text-sm text-muted -my-1">{help}</p>}
            {error && <p className="text-sm text-destructive -my-1">{error}</p>}
        </div>
    )
}
