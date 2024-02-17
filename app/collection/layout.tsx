"use client";
import "@/styles/markdown.css";
import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { back } = useRouter();

  return (
    <div className="markdown py-4">
      {pathname !== "/collection" && (
        <button
          onClick={back}
          className="flex text-sm gap-1 items-center hover:underline text-light-100 dark:text-dark-600"
        >
          <ChevronLeft size={16} /> Go back
        </button>
      )}

      {children}
    </div>
  );
}
