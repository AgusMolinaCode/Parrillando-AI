"use client";

import React, { Suspense } from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Lobster } from "next/font/google";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const lobster = Lobster({ weight: "400", preload: false });

export default function Menu() {
  const pathname = usePathname();

  const isMiPerfilPage = pathname === "/perfil";

  const { user } = useUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Perfil", "Recetas AI", "Gastronomia"];

  return (
    <Navbar
      className="bg-[#FCFBF4]/80 p-1 px-2"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <Link href="/">
          <NavbarBrand>
            <div className={lobster.className}>
              <h1 className="text-2xl text-black">Parrillando</h1>
            </div>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 items-center"
        justify="center"
      >
        <NavbarBrand>
          <div className={lobster.className}>
            <Link href="/">
              <h1 className="text-4xl text-black">Parrillando</h1>
            </Link>
          </div>
        </NavbarBrand>

        <Dropdown>
          <DropdownTrigger>
            <p className="font-bold text-xl cursor-pointer hover:underline duration-250 mt-3">
              Menu
            </p>
          </DropdownTrigger>

          {isMiPerfilPage ? (
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="generar">
                <Link href="/recetas-ai" className="text-black">
                  Generar recetas con IA
                </Link>
              </DropdownItem>

              <DropdownItem key="Gastronomia">
                <Link href="/gastronomia" className="text-black">
                  Gastronomia
                </Link>
              </DropdownItem>

              <DropdownItem key="Mis Recetas">
                <Link href="/gastronomia" className="text-black">
                  Mis Recetas
                </Link>
              </DropdownItem>

              <DropdownItem key="Mis Restaurants">
                <Link href="/gastronomia" className="text-black">
                  Mis Restaurants
                </Link>
              </DropdownItem>
            </DropdownMenu>
          ) : (
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="generar">
                <Link href="/recetas-ai" className="text-black">
                  Generar recetas con IA
                </Link>
              </DropdownItem>

              <DropdownItem key="Gastronomia">
                <Link href="/gastronomia" className="text-black">
                  Gastronomia
                </Link>
              </DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      </NavbarContent>

      <NavbarContent className="flex items-center" justify="end">
        <SignedIn>
          <Suspense>
            <NavbarItem className="hidden sm:flex">
              {isMiPerfilPage ? (
                <Link
                  className="font-bold text-xl cursor-pointer hover:underline duration-250 mt-3 text-black"
                  href="/"
                >
                  Inicio
                </Link>
              ) : (
                <Link
                  className="font-bold text-xl cursor-pointer hover:underline duration-250 mt-3 text-black"
                  href="/perfil"
                >
                  Mi Perfil
                </Link>
              )}
            </NavbarItem>
            <UserButton afterSignOutUrl="/" />
          </Suspense>
        </SignedIn>

        <SignedOut>
          <NavbarItem>
            <Button
              as={Link}
              className="bg-orange-400/30 border-1 border-black"
              href="/sign-in"
              variant="flat"
            >
              Iniciar sesión
            </Button>
          </NavbarItem>
        </SignedOut>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black"
              href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
