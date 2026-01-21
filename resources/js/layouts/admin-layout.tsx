import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useAppearance } from '@/hooks/use-appearance';
import { useInitials } from '@/hooks/use-initials';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, LogOut, Moon, Sun, User as UserIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
    const { auth } = usePage().props as any;
    const { appearance, updateAppearance } = useAppearance();
    const initials = useInitials();

    const isDarkMode = appearance === 'dark';

    const toggleTheme = () => {
        updateAppearance(isDarkMode ? 'light' : 'dark');
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* Top Navigation Bar */}
            <nav className="border-b border-border bg-card px-6 py-3 shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admin/boletin"
                            className="flex items-center gap-2"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-brand-green text-white">
                                <BookOpen className="size-5" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-foreground">
                                Admin Boletín
                            </span>
                        </Link>

                        {/* Main Navigation Menu */}
                        <NavigationMenu className="ml-6 hidden md:flex">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                        active={
                                            window.location.pathname ===
                                            '/admin/boletin'
                                        }
                                    >
                                        <Link href="/admin/boletin">
                                            Dashboard
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <Link href="/boletin" target="_blank">
                                            Ver Sitio Público
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDarkMode ? (
                                <Sun className="size-5" />
                            ) : (
                                <Moon className="size-5" />
                            )}
                        </button>

                        {/* User Profile Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                                <span className="hidden text-sm font-medium md:block">
                                    {auth.user.name}
                                </span>
                                <div className="flex size-9 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-black ring-2 ring-transparent transition hover:ring-brand-green/20">
                                    {initials(auth.user.name)}
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/settings/profile"
                                        className="w-full cursor-pointer"
                                    >
                                        <UserIcon className="mr-2 size-4" />
                                        Perfil
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="w-full cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950/20"
                                    >
                                        <LogOut className="mr-2 size-4" />
                                        Cerrar Sesión
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="mx-auto max-w-7xl p-6">{children}</main>
        </div>
    );
}
