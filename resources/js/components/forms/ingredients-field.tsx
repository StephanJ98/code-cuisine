import { Ingredient, RecipeIngredient } from "@/types"
import ValidationErrors from "../ui/validation-errors"
import { useRef, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { TrashIcon } from "lucide-react"
import {
    Command, CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"
import { router, usePage } from "@inertiajs/react"

type Props = {
    ingredients: RecipeIngredient[],
    errors: Record<string, string>
}

const IngredientsField = (props: Props) => {
    const [ingredients, setIngredients] = useState(props.ingredients)

    const onRemove = (id: number) => {
        setIngredients(ingredients.filter(i => i.id !== id))
    }

    return (
        <div className="space-y-2">
            <ValidationErrors prefix="ingredients" />
            <ul>
                {ingredients.map((ingredient, k) => (
                    <li key={ingredient.id} className="flex items-center gap-2">
                        <Input
                            aria-invalid={!!props.errors[`ingredients.${k}.quantity`]}
                            name={`ingredients.${k}.quantity`}
                            type="number"
                            defaultValue={ingredient.quantity ?? ''}
                            className="w-15 flex-none"
                        />
                        <input type="hidden" name={`ingredients.${k}.id`} value={ingredient.id} />
                        {ingredient.unit_label}
                        {ingredient.name}

                        <Button variant={'ghost'} type="button" onClick={() => onRemove(ingredient.id)}>
                            <TrashIcon />
                        </Button>
                    </li>
                ))}
            </ul>

            <IngredientsCombobox />
        </div>
    )
}

const IngredientsCombobox = () => {
    const page = usePage<{ ingredients: Ingredient[] }>()
    const ingredients = page.props.ingredients || []
    const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

    const handleSearch = (s: string) => {
        clearTimeout(timerRef.current)

        router.cancelAll()

        if (s.length < 2) return;

        timerRef.current = setTimeout(() => {
            router.reload({
                only: ['ingredients'],
                data: { q: s }
            })
        }, 300)
    }

    return (
        <Command shouldFilter={false} >
            <CommandInput onValueChange={handleSearch} placeholder="Ajouter un ingrédient" />
            <CommandList>
                <CommandEmpty>
                    Aucun ingrédient trouvé.
                </CommandEmpty>
                <CommandGroup>
                    {ingredients.map(i => (
                        <CommandItem key={i.id}>{i.name}</CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    )
}

export default IngredientsField
