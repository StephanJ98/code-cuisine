import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import { FC, useEffect, type ReactNode } from 'react';
import { toast, Toaster } from 'sonner';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

const AppLayout = ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const page = usePage<SharedData>();

    useEffect(() => {
        if (page.props.flash.success) toast.success(page.props.flash.success);
        if (page.props.flash.error) toast.error(page.props.flash.error);
    }, [page.props.flash]);

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}
            <Toaster richColors position='top-center' closeButton />
        </AppLayoutTemplate>
    )
}

export function withAppLayout<T>(breadcrumbs: BreadcrumbItem[], component: FC<T>) {
    // @ts-ignore layout exists on inertia
    component.layout = (page: ReactNode) => <AppLayout breadcrumbs={breadcrumbs}>
        <div className='p-4 lg:p-6'>{page}</div>
    </AppLayout>;
    return component;
}

export default AppLayout;
