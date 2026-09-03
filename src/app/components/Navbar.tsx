"use client";

import { useEffect } from "react";
import Link from "next/link";
import { asset } from "@/lib/asset";
import styles from "./Navbar.module.css";

export default function Navbar() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-[9999] w-full ${styles.header}`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 py-3">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <img src={asset("/logo2.png")} alt="Aaruchudar" className="h-10 w-10 rounded-md object-cover" />
          <span className="font-semibold text-[#EAF2FF] truncate">AARUCHUDAR</span>
        </Link>
      </div>
    </header>
  );
}
