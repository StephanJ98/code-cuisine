import { withAppLayout } from "@/layouts/app-layout";
import { BreadcrumbItem, Ingredient, PaginatedCollection } from "@/types";
import ingredients from "@/routes/ingredients";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CollectionPagination } from "@/components/collection-pagination";
import TopActions from "@/components/top-actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@inertiajs/react";

type Props = {
    q: string | null
    collection: PaginatedCollection<Ingredient>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ingrédients',
        href: ingredients.index().url,
    },
];


export default withAppLayout(breadcrumbs, ({ collection, q }: Props) => {
    return (
        <div className="space-y-4">
            <TopActions>
                <Form href={ingredients.index().url} className="flex gap-2 items-center">
                    <Input autoFocus placeholder="Rechercher un ingrédient" name="q" defaultValue={q ?? ''} />
                    <Button>Rechercher</Button>
                </Form>
            </TopActions>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {collection.data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                {/* Actions (Edit, Delete, etc.) can be added here */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <CollectionPagination collection={collection} />
        </div>
    )
});
