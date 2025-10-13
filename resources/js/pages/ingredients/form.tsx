import TopActions from "@/components/top-actions";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { withAppLayout } from "@/layouts/app-layout";
import ingredients from "@/routes/ingredients";
import { BreadcrumbItem, Ingredient } from "@/types";
import { Form } from "@inertiajs/react";
import { SaveIcon } from "lucide-react";

type Props = {
    ingredient: Ingredient
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ingrédients',
        href: ingredients.index().url,
    },
    {
        title: 'Édition',
        href: '#',
    }
];

export default withAppLayout<Props>(breadcrumbs, ({ ingredient }) => {
    return (
        <Form {...ingredients.update.form({ ingredient: ingredient.id })} >
            {({ errors, processing }) => (
                <>
                    <FormField label="Nom" htmlFor='name' error={errors['name']}>
                        <Input defaultValue={ingredient.name} id="name" name="name" aria-invalid={!!errors['name']} />
                    </FormField>

                    <TopActions>
                        <Button type="submit" disabled={processing} >
                            <SaveIcon />
                            Enregistrer
                        </Button>
                    </TopActions>
                </>
            )}
        </Form>
    )
})
