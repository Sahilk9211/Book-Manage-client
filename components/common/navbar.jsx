"use client";

import Link from "next/link";

import Container from "./container";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User, Settings, LogOut } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/services/auth.service";

export default function Navbar({ userData }) {
  // console.log("userdata", userData);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    // router.push("/login");

    try {
      const res = await logout();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    // {
    //   label: "Books",
    //   href: "/books",
    // },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-10">
            <Logo />

            <nav className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors hover:text-primary ${
                    pathname === item.href
                      ? "font-medium text-primary"
                      : "font-medium text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Avatar className="cursor-pointer">
                    <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/settings" className="cursor-pointer">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Logout */}
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
}
