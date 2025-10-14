import TopActions from "@/components/top-actions";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import SelectWithItems, { SelectOption } from "@/components/ui/select-with-items";
import { withAppLayout } from "@/layouts/app-layout";
import ingredients from "@/routes/ingredients";
import { BreadcrumbItem, Ingredient } from "@/types";
import { Form } from "@inertiajs/react";
import { SaveIcon } from "lucide-react";

type Props = {
    ingredient: Ingredient,
    units: SelectOption[]
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

export default withAppLayout<Props>(breadcrumbs, ({ ingredient, units }) => {

    const action = ingredient.id ? ingredients.update.form({ ingredient: ingredient.id }) : ingredients.store.form();

    return (
        <Form {...action} className="space-y-4">
            {({ errors, processing }) => (
                <>
                    <Input type="file" name="image" />

                    <FormField label="Nom" htmlFor='name' error={errors['name']}>
                        <Input defaultValue={ingredient.name} id="name" name="name" aria-invalid={!!errors['name']} />
                    </FormField>

                    <FormField label="Unité de mesure" htmlFor='unit' error={errors['unit']}>
                        <SelectWithItems items={units} defaultValue={ingredient.unit} id="unit" name="unit" aria-invalid={!!errors['unit']} />
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
