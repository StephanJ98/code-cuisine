import type { PaginatedCollection } from "@/types";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Props = {
    collection: PaginatedCollection<unknown>;
}

export function CollectionPagination({ collection }: Props) {
    return (
        <div className="flex items-center justify-between">
            <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
                Page {collection.meta.current_page} sur {collection.meta.last_page}
            </div>
            <nav role="navigation" aria-label="Navigation">
                <ul className="flex items-center gap-1">
                    {collection.meta.links.map((link, index) => (
                        <li key={index}>
                            <Button asChild
                                disabled={!link.url === null}
                                aria-current={link.active ? 'page' : undefined}
                                data-active={link.active}
                                variant={link.active ? 'outline' : 'ghost'}
                                size={'icon'}
                            >
                                <Link
                                    href={link.url ?? "#"}
                                >
                                    {label(link.label, index, collection.meta.links.length)}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

function label(s: string, index: number, count: number): ReactNode {
    if (index === 0) return <ChevronLeftIcon />
    if (index === count - 1) return <ChevronRightIcon />
    return s
}
