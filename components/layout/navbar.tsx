"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { resourceLinks, serviceGroups, serviceMenuColumns }
  from "@/lib/nav";
// , specialtiesGroup } 

const triggerClass =
  "group inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:text-white";

function navLinkClass(active: boolean) {
  return cn(
    "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    active ? "text-white" : "text-white/80",
  );
}

function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export function Navbar() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close the mobile menu when the route changes
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 bg-[#051a37] text-white transition-colors duration-300 backdrop-blur-xl",
        scrolled ? "shadow-[0_12px_30px_rgba(3,24,51,0.18)]" : "",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-4.5rem">
        <Logo />

        <NavigationMenu.Root className="relative hidden lg:flex" delayDuration={80}>
          <NavigationMenu.List className="flex items-center gap-0.5">
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/about" className={navLinkClass(pathname === "/about")}>
                  About
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger className={triggerClass}>
                Services
                <ChevronDown
                  className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-full z-50 mt-2.5 rounded-2xl border border-white/10 bg-[#0a2243] shadow-[0_18px_48px_rgba(3,24,51,0.35)] data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in">
                <div className="grid max-h-[calc(100vh-6rem)] w-[52rem] grid-cols-4 gap-x-6 gap-y-6 overflow-y-auto p-6">
                  {serviceMenuColumns.map((column, i) => (
                    <div key={i} className="space-y-6">
                      {column.map((group) => (
                        <div key={group.label}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                            {group.label}
                          </p>
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <NavigationMenu.Link asChild>
                                  <Link
                                    href={item.href}
                                    className="block rounded-lg p-2.5 transition-colors hover:bg-white/5"
                                  >
                                    <span className="block text-sm font-medium text-white">
                                      {item.label}
                                    </span>
                                    {item.description ? (
                                      <span className="mt-0.5 block text-xs leading-snug text-slate-300">
                                        {item.description}
                                      </span>
                                    ) : null}
                                  </Link>
                                </NavigationMenu.Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/why-zah-kpo"
                  className={navLinkClass(pathname === "/why-zah-kpo")}
                >
                  Why ZAH
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger className={triggerClass}>
                Resources
                <ChevronDown
                  className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-full z-50 mt-2.5 rounded-2xl border border-white/10 bg-[#0a2243] shadow-[0_18px_48px_rgba(3,24,51,0.35)] data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in">
                <div className="w-[20rem] p-3">
                  {resourceLinks.map((item) => (
                    <NavigationMenu.Link asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg p-3 transition-colors hover:bg-white/5"
                      >
                        <span className="block text-sm font-medium text-white">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-snug text-slate-300">
                          {item.description}
                        </span>
                      </Link>
                    </NavigationMenu.Link>
                  ))}
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/careers" className={navLinkClass(pathname === "/careers")}>
                  Careers
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Book a Discovery Call</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-[#051a37] text-white">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <Logo />
              <nav className="-mx-1 flex-1 overflow-y-auto px-1 text-white">
                <Link
                  href="/about"
                  className="block border-b border-white/10 py-3.5 text-base font-medium text-white"
                >
                  About
                </Link>
                <Accordion type="multiple">
                  <AccordionItem value="services">
                    <AccordionTrigger>Services</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {[...serviceGroups,
                          // specialtiesGroup
                        ].map((group) => (
                          <div key={group.label}>
                            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {group.label}
                            </p>
                            <ul className="space-y-0.5">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-md py-1.5 text-sm text-foreground/90 hover:text-primary"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resources">
                    <AccordionTrigger>Resources</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-0.5">
                        {resourceLinks.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block rounded-md py-1.5 text-sm text-foreground/90 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link
                  href="/why-zah-kpo"
                  className="block border-b border-white/10 py-3.5 text-base font-medium text-white"
                >
                  Why ZAH
                </Link>
                <Link
                  href="/careers"
                  className="block border-b border-white/10 py-3.5 text-base font-medium text-white"
                >
                  Careers
                </Link>
                <Link href="/contact" className="block py-3.5 text-base font-medium text-white">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
                <SheetClose asChild>
                  <Button asChild className="flex-1">
                    <Link href="/contact">Book a Discovery Call</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
