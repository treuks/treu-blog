import { type PageProps } from "$fresh/server.ts";


export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TreuKS</title>
        
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/reset.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
