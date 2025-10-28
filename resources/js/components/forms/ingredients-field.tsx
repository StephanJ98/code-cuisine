import { RecipeIngredient } from "@/types"
import ValidationErrors from "../ui/validation-errors"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { TrashIcon } from "lucide-react"

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


        </div>
    )
}

export default IngredientsField
