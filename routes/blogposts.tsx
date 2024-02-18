import { useSignal } from "@preact/signals";
import Header from "../components/header.tsx"
import About from "../components/about.tsx"

export default function Blogposts() {
  return (
    <>
      <main class="blog-background">
        <Header/>
      </main>
    </>
  );
}
