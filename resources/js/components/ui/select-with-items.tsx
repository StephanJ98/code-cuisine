import { ComponentProps } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'

type Props = {
    items: SelectOption[]
    placeholder?: string
    className?: string
    name: string
    defaultValue?: string
} & ComponentProps<typeof SelectTrigger>

export type SelectOption = {
    label: string;
    value: string;
}

const SelectWithItems = ({ items = [], name, className, defaultValue, placeholder, ...props }: Props) => {
    return (
        <Select name={name} defaultValue={defaultValue}>
            <SelectTrigger {...props} className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SelectWithItems
