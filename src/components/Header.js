"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-sm py-3 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-full p-1">
            <Image
              src="/images/logo.png"
              alt="SVA Detailing"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden md:block text-white font-bold text-xl">
            SVA Detailing
          </span>
        </div>

        <ul className="flex items-center gap-3 md:gap-6 text-sm md:text-base">
          {["hero", "pdr-benefits", "services", "cases", "process", "pricing", "faq", "contacts"].map(
            (section) => (
              <li key={section} className="hidden md:block">
                <Link
                  href={`#${section}`}
                  className="text-white hover:text-emerald-300 transition"
                >
                  {section === "hero"
                    ? "Начало"
                    : section === "pdr-benefits"
                    ? "Защо PDR"
                    : section === "services"
                    ? "Услуги"
                    : section === "cases"
                    ? "До/След"
                    : section === "process"
                    ? "Как работим"
                    : section === "pricing"
                    ? "Цена"
                    : section === "faq"
                    ? "FAQ"
                    : "Контакти"}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              href="#quiz"
              className="bg-emerald-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-emerald-400 transition font-semibold"
            >
              Оцени по снимка
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
