import { withAppLayout } from "@/layouts/app-layout";
import { BreadcrumbItem, Ingredient, PaginatedCollection } from "@/types";
import ingredients from "@/routes/ingredients";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CollectionPagination } from "@/components/collection-pagination";
import TopActions from "@/components/top-actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, Link } from "@inertiajs/react";
import SortableTableHead from "@/components/sortable-table-head";
import { EditIcon, PlusIcon, TrashIcon } from "lucide-react";

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
                <Form {...ingredients.index.form()} className="flex gap-2 items-center">
                    <Input autoFocus placeholder="Rechercher un ingrédient" name="q" defaultValue={q ?? ''} />
                    <Button>Rechercher</Button>
                </Form>

                <Button asChild variant="outline" className="group">
                    <Link href={ingredients.create().url}>
                        <PlusIcon />
                        <p className="hidden opacity-0 group-hover:opacity-100 group-hover:inline ml-2 transition-all ease-in-out duration-1000">Ajouter</p>
                    </Link>
                </Button>
            </TopActions>

            <Table>
                <TableHeader>
                    <TableRow>
                        <SortableTableHead field="id">ID</SortableTableHead>
                        <TableHead>Image</TableHead>
                        <SortableTableHead field="name">Nom</SortableTableHead>
                        <SortableTableHead field="unit">Unité</SortableTableHead>
                        <TableHead className="text-end">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {collection.data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.image
                                ? <img src={item.image} alt={item.name} className="aspect-square w-20 object-cover rounded-lg" />
                                : <div className="aspect-square size-20 bg-muted rounded-lg" />
                            }</TableCell>
                            <TableCell>
                                <Link className="hover:underline" href={ingredients.edit({ ingredient: item.id })} >
                                    {item.name}
                                </Link>
                            </TableCell>
                            <TableCell>{item.unit_label}</TableCell>
                            <TableCell>
                                <div className="flex items-center justify-end gap-1">
                                    <Button asChild size={'icon'} variant={'outline'}>
                                        <Link href={ingredients.edit({ ingredient: item.id })} className="hover:underline" >
                                            <EditIcon size={16} />
                                        </Link>
                                    </Button>

                                    <Button asChild size={'icon'} variant={'destructive-outline'}>
                                        <Link href={ingredients.destroy({ ingredient: item.id })} onBefore={() => confirm('Voulez vous vraiment supprimer cet ingrédient ?')}>
                                            <TrashIcon size={16} />
                                        </Link>
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <CollectionPagination collection={collection} />
        </div>
    )
});
