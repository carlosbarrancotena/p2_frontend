import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <title>Diccionario Fresh</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <nav>
        </nav>
        <Component />
      </body>
    </html>
  );
}
