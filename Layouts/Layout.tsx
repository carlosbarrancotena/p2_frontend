// layouts/Layout.tsx
import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <>
      <Head>
        <title>Diccionario Inglés</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <nav style="display: flex; justify-content: center; gap: 2rem; padding: 1rem; background-color: #f8f9fa;">
        <a href="/">Home</a>
        <a href="/dictionary">Diccionario</a>
      </nav>
      <main style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; text-align: center;">
        {children}
      </main>
    </>
  );
}
