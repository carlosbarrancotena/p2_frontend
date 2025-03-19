// routes/index.tsx
import Layout from "../Layouts/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "20vh" }}>
        <h1>Bienvenido al mejor diccionario de inglés</h1>
        <p>Encuentra definiciones y significados fácilmente.</p>
        <p>
          <a
            href="/dictionary"
          >
            Buscar una palabra
          </a>
        </p>
      </div>
    </Layout>
  );
}
