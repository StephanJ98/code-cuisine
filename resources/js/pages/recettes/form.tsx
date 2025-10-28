import { withAppLayout } from '@/layouts/app-layout';
import type { BreadcrumbItem, RecetteDetail } from '@/types';
import recettes from '@/routes/recettes';
import { Form, Head } from '@inertiajs/react';
import { FormField } from '@/components/ui/form-field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SaveIcon } from 'lucide-react';
import SelectWithItems, {
    type SelectOption,
} from '@/components/ui/select-with-items';
import { Card, CardContent } from '@/components/ui/card';
import ImageInput from '@/components/ui/image-input';
import TopActions from '@/components/top-actions';
import IngredientsField from '@/components/forms/ingredients-field';

type Props = {
    recette: RecetteDetail,
    levels: SelectOption[]
}


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recettes',
        href: recettes.index().url,
    },
    {
        title: 'Editer',
        href: "#",
    },
];

export default withAppLayout<Props>(breadcrumbs, ({ recette, levels }) => {
    const action = recette.id ? recettes.update.form({ recette: recette.id }) : recettes.store.form();

    return <>
        <Head title="Editer une recette" />
        <Form {...action} className="space-y-4">
            {({ errors, processing, progress }) => (
                <div className="grid gap-8 md:grid-cols-[1fr_350px] items-start">
                    <main className="space-y-4">
                        <FormField label="Nom" htmlFor="name" error={errors['name']}>
                            <Input id="name" name="name" defaultValue={recette.name} aria-invalid={!!errors['name']} />
                        </FormField>
                        <FormField label="Description" htmlFor="description" error={errors['description']}>
                            <Textarea id="description" name="description" rows={4} defaultValue={recette.description} aria-invalid={!!errors['description']} />
                        </FormField>
                    </main>
                    <Card>
                        <ImageInput id="image" progress={progress?.progress} className="aspect-video" name="image" aria-invalid={!!errors['image']} defaultValue={recette.image} />
                        <CardContent className="px-4 pb-6 space-y-4">
                            <FormField label="Nombre de personnes" htmlFor="persons" error={errors['persons']}>
                                <Input id="persons" name="persons" type="number" min="1" defaultValue={recette.persons} aria-invalid={!!errors['persons']} />
                            </FormField>
                            <FormField label="Durée (en minutes)" htmlFor="duration" error={errors['duration']}>
                                <Input id="duration" name="duration" type="number" min="1" defaultValue={recette.duration} aria-invalid={!!errors['duration']} />
                            </FormField>
                            <FormField label="Niveau de difficulté" htmlFor="level" error={errors['level']}>
                                <SelectWithItems items={levels} id="level" name="level" defaultValue={recette.level} aria-invalid={!!errors['level']} />
                            </FormField>
                            <IngredientsField ingredients={recette.ingredients} errors={errors} />
                        </CardContent>
                    </Card>

                    <TopActions>
                        <Button disabled={processing}>
                            <SaveIcon /> Enregistrer
                        </Button>
                    </TopActions>
                </div>
            )}
        </Form></>
})
