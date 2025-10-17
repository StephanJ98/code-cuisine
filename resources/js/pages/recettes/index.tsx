import { withAppLayout } from "@/layouts/app-layout";
import { BreadcrumbItem, PaginatedCollection, Recette } from "@/types";
import recettes from "@/routes/recettes";
import TopActions from "@/components/top-actions";
import { Form, Link } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EditIcon, PlusIcon, TrashIcon } from "lucide-react";
import { CollectionPagination } from "@/components/collection-pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import SortableTableHead from "@/components/sortable-table-head";

type Props = {
    q: string | null
    collection: PaginatedCollection<Recette>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recettes',
        href: recettes.index().url,
    },
];


export default withAppLayout(breadcrumbs, ({ collection, q }: Props) => {
    return (
        <div className="space-y-4">
            <TopActions>
                <Form {...recettes.index.form()} className="flex gap-2 items-center">
                    <Input autoFocus placeholder="Rechercher une recette" name="q" defaultValue={q ?? ''} />
                    <Button>Rechercher</Button>
                </Form>

                <Button asChild variant="outline" className="group">
                    <Link href={recettes.create().url}>
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
                        <SortableTableHead field="duration">Durée</SortableTableHead>
                        <SortableTableHead field="persons">Personnes</SortableTableHead>
                        <SortableTableHead field="level">Niveau de difficulté</SortableTableHead>
                        <TableHead>Description</TableHead>
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
                                <Link className="hover:underline" href={recettes.edit({ recette: item.id })} >
                                    {item.name}
                                </Link>
                            </TableCell>
                            <TableCell>{item.duration}</TableCell>
                            <TableCell>{item.persons}</TableCell>
                            <TableCell>{item.level_label}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>
                                <div className="flex items-center justify-end gap-1">
                                    <Button asChild size={'icon'} variant={'outline'}>
                                        <Link href={recettes.edit({ recette: item.id })} className="hover:underline" >
                                            <EditIcon size={16} />
                                        </Link>
                                    </Button>

                                    <Button asChild size={'icon'} variant={'destructive-outline'}>
                                        <Link href={recettes.destroy({ recette: item.id })} onBefore={() => confirm('Voulez vous vraiment supprimer cet ingrédient ?')}>
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
