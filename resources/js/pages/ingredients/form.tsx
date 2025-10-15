import TopActions from "@/components/top-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import ImageInput from "@/components/ui/image-input";
import { Input } from "@/components/ui/input";
import SelectWithItems, { SelectOption } from "@/components/ui/select-with-items";
import { withAppLayout } from "@/layouts/app-layout";
import ingredients from "@/routes/ingredients";
import { BreadcrumbItem, Ingredient } from "@/types";
import { Form, Link } from "@inertiajs/react";
import { ArrowLeftIcon, SaveIcon } from "lucide-react";

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
            {({ errors, processing, progress }) => (
                <>
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>
                                {ingredient.id ? `Édition de l'ingrédient - ${ingredient.name}` : "Création d'un nouvel ingrédient"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2">
                            <FormField label="Image" htmlFor='image' error={errors['image']}>
                                <ImageInput
                                    id="image"
                                    className="w-56 aspect-square"
                                    name="image"
                                    aria-invalid={!!errors['image']}
                                    defaultValue={ingredient.image}
                                    progress={progress?.progress}
                                />
                            </FormField>

                            <div className="flex flex-col gap-2 justify-between">
                                <FormField label="Nom" htmlFor='name' error={errors['name']}>
                                    <Input defaultValue={ingredient.name} id="name" name="name" aria-invalid={!!errors['name']} />
                                </FormField>

                                <FormField label="Unité de mesure" htmlFor='unit' error={errors['unit']}>
                                    <SelectWithItems
                                        items={units}
                                        defaultValue={ingredient.unit}
                                        id="unit"
                                        name="unit"
                                        aria-invalid={!!errors['unit']}
                                        className="w-full"
                                    />
                                </FormField>
                            </div>
                        </CardContent>
                    </Card>

                    <TopActions>
                        <Button variant="outline" asChild>
                            <Link href={ingredients.index().url}>
                                <ArrowLeftIcon size={16} />
                            </Link>
                        </Button>

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
