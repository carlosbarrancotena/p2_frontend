// layouts/Layout.tsx
import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <>
      <Head>
        <title>Diccionario Ingles</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <nav>
    <nav style="display: flex; gap: 2rem;">
    <a href="/">Home</a>
    <a href="/dictionary">Dictionary</a>
</nav>
      </nav>
      <main>{children}</main>
    </>
  );
}