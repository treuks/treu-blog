import { useSignal } from "@preact/signals";
import Header from "../components/header.tsx"
import About from "../components/about.tsx"
import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";
import { Head } from "$fresh/runtime.ts"

export type Post = {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title as string,
    publishedAt: new Date(attrs.published_at as Date),
    content: body,
    snippet: attrs.snippet as string,
  };
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

function Post(props: { post: Post }) {
  return (
    <>
      <div class="post-card-wrapper">
        <h2 class="post-card-title">
          <a href={`/post/${props.post.slug}`}>{props.post.title}</a>
        </h2>
        <time class="post-card-date">{new Date(props.post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}</time>
        <p class="post-card-snippet">{props.post.snippet}</p>
      </div>
    </>
  )
} 

export default async function Blogposts() {
  const posts = await getPosts();
  return (
    <>
      <Head>
        <meta name="theme-color" content="#fbcde3"/>
      </Head>
      <main class="blog-background">
        <Header/>
        <div class="blankspace"></div>
        {posts.map((post) => <Post post={post}/>)}
      </main>
    </>
  );
}
