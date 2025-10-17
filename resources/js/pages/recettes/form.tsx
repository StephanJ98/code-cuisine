import TopActions from "@/components/top-actions";
import { Button } from "@/components/ui/button";
import { SelectOption } from "@/components/ui/select-with-items";
import { withAppLayout } from "@/layouts/app-layout";
import recettes from "@/routes/recettes";
import { BreadcrumbItem, Recette } from "@/types";
import { Form, Link } from "@inertiajs/react";
import { ArrowLeftIcon, SaveIcon } from "lucide-react";

type Props = {
    recette: Recette,
    levels: SelectOption[]
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recettes',
        href: recettes.index().url,
    },
    {
        title: 'Édition',
        href: '#',
    }
];

export default withAppLayout<Props>(breadcrumbs, ({ levels, recette }) => {

    const action = recette.id ? recettes.update.form({ recette: recette.id }) : recettes.store.form();

    return (
        <Form {...action} className="space-y-4">
            {({ errors, processing, progress }) => (
                <>
                    {/* <Card className="max-w-2xl mx-auto">
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
                    </Card> */}

                    <TopActions>
                        <Button variant="outline" asChild>
                            <Link href={recettes.index().url}>
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
