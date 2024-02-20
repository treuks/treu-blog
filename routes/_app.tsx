import { type PageProps } from "$fresh/server.ts";


export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TreuKS</title>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap')
        </style>
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
