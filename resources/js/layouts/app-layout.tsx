import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { FC, type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

const AppLayout = ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppLayoutTemplate>
);

export function withAppLayout<T>(breadcrumbs: BreadcrumbItem[], component: FC<T>) {
    // @ts-ignore layout exists on inertia
    component.layout = (page: ReactNode) => <AppLayout breadcrumbs={breadcrumbs}>
        <div className='p-4 lg:p-6'>{page}</div>
    </AppLayout>;
    return component;
}

export default AppLayout;
