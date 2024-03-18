import { useSignal } from "@preact/signals";
import Header from "../components/header.tsx"
import About from "../components/about.tsx"
import { Head } from "$fresh/runtime.ts"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#cdfbf2"/>
      </Head>

      <main class="background">
        <Header/>
        <About/>
      </main>
    </>
  );
}
