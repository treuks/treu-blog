import { useSignal } from "@preact/signals";
import Header from "../components/header.tsx"
import About from "../components/about.tsx"

export default function Home() {
  return (
    <>
      <main class="background">
        <Header/>
        <About/>
      </main>
    </>
  );
}
