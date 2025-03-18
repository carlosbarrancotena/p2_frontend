// routes/index.tsx
import Layout from "../Layouts/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <h1>Bienvenido al mejor diccionario ingles que vas a encontrar</h1>
      <p>Click <a href="/dictionary">aqui</a> para buscar una palabra.</p>
    </Layout>
  );
}