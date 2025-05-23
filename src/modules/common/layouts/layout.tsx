"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Aside from "../components/aside.component";
import { useLayout } from "../hooks/useLayout";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const { title, routes } = useLayout(pathname);

  return (
    <main className="bg-neutral-950 xl:px-48 md:px-16 sm:px-8 px-5 py-6 min-h-screen lg:h-screen flex flex-col lg:flex-row sm:gap-5">
      <Aside />
      <div className="flex-1 py-8 overflow-auto hide-scrollbar ">
        <section className="w-full flex flex-col sm:11/12 lg:w-3/4 px-4 sm:px-8 pt-10 pb-12 bg-neutral-900  relative rounded-2xl border border-neutral-700">
          <header className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
            <h1 className="text-white text-3xl font-bold mb-3 capitalize">
              {title}
            </h1>
            <nav className="sm:absolute sm:top-0 sm:right-0 sm:px-10 py-4 bg-neutral-800 max-sm:rounded-2xl rounded-bl-2xl rounded-tr-2xl border-b border-l border-neutral-700">
              <ul className="flex flex-row gap-4 px-2 sm:gap-10">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    className={`${
                      pathname === route.path
                        ? "text-yellow-200"
                        : "text-neutral-400"
                    } font-semibold capitalize`}
                    href={route.path}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </header>
          {children}
        </section>
      </div>
    </main>
  );
}
