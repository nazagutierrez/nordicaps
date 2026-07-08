import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Explora nuestro catálogo completo de gorras, pilusos y gorros. Gran variedad de colores y estilos.",
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: "Catálogo de Gorras - Nordicaps",
    description: "Explora nuestro catálogo completo de gorras, pilusos y gorros.",
    url: "https://nordicaps.vercel.app/productos",
  },
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
