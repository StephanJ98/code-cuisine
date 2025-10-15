import { cn } from "@/lib/utils"
import { UploadIcon } from "lucide-react"
import { ChangeEventHandler, ComponentProps, useState } from "react"

type Props = ComponentProps<'input'> & {
    progress?: number
}

const ImageInput = ({ defaultValue, className, progress, ...props }: Props) => {
    const [hover, setHover] = useState(false)
    const [preview, setPreview] = useState(defaultValue?.toString() ?? null)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setHover(false)

        const target = event.target

        if (target.files && target.files.length > 0) {
            const file = target.files[0]
            setPreview(URL.createObjectURL(file))
        }
    }

    return (
        <div
            className={cn(
                className,
                "relative rounded overflow-hidden bg-muted grid place-items-center group hover:bg-primary/10 ease-in-out transition-all",
                props['aria-invalid'] && "ring-destructive ring-1 bg-destructive/20",
                hover && "bg-primary/10 text-primary ring-1 ring-primary"
            )}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <input
                onDragOver={() => setHover(true)}
                onDragLeave={() => setHover(false)}
                onDragEnd={() => setHover(false)}
                onChange={handleChange}
                type="file"
                {...props}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
            />

            <UploadIcon
                size={16}
                className={cn(
                    "group-hover:text-primary group-hover:scale-150 ease-in-out transition-all",
                    hover && "text-primary scale-150"
                )}
            />

            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className={cn("absolute inset-0 object-cover size-full transition-all ease-in-out", hover || props['aria-invalid'] && "opacity-20")}
                />
            )}

            {progress && <div
                className="h-1 opacity-80 w-full absolute bottom-0 left-0 pointer-none: origin-left bg-primary"
                style={{
                    transform: `scaleX(${progress.toFixed(2)})`
                }}
            />}
        </div>
    )
}

export default ImageInput
