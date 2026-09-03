"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFranchisePage = pathname?.startsWith("/franchise1");

  return (
    <>
      {!isFranchisePage && <Navbar />}
      <main
        className="min-h-screen safe-bottom pb-16 md:pb-0"
        aria-label="Page content"
      >
        {children}
      </main>
    </>
  );
}
