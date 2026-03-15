"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "ルーレット" }, 
    { href: "how-to-use", label: "使い方"},
    // ここではアプリのページをトップページと説明書ページに分けています。
];

// 全＠エージ共通のナビゲーションバー
export function Nav() {
    const pathname = usePathname();

    return (
        <nav className="w-full flex fustify-center gap-8 pt-6 pb-2">
            {links.map(({ href, label }) => (
                <Link
                key={href}
                href={href}
                className={
                    pathname === href
                     ? "text-sm text-gray-800 font-semibold"
                     : "text-sm text-gray-400 hover:text-gray-600 transition-colors"
                }
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
}