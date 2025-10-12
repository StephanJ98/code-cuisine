import { PropsWithChildren } from "react"

const TopActions = (props: PropsWithChildren) => {
    return (
        <div {...props} className="absolute top-3 right-4 lg:right-6 flex justify-end gap-2 items-center" />
    )
}

export default TopActions
