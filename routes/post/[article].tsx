import { getPost, Post } from "../posts.tsx"
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import Header from "../../components/header.tsx"
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts"

export const handler: Handlers<Post> = {
    async GET(_req, ctx) {
        const post = await getPost(ctx.params.article);
        if (post === null) return ctx.renderNotFound();
        return ctx.render(post)
    }
}

export default function ArticlePage(props: PageProps<Post>) {
    const post = props.data
    return (
        <>
            <main class="blog-background">
                <Head>
                    <style dangerouslySetInnerHTML={{__html: CSS}}/>
                    <title>TreuKS - {post.title}</title>
                    <meta property="og:title" content={post.title} />
                    <meta property="og:description" content={post.snippet} />
                    <meta property="og:url" content={`${props.url}`} />
                    
                    // we do a bit of hardcoding :tf: 
                    <meta property="og:image" content="https://treuks.com/placeholder.jpg" />
                    <meta property="og:image:width" content="512" />
                    <meta property="og:image:height" content="512" />
                    <meta property="og:image:alt" content="Chinese symbol for the number 7, on a pink background" />
                    <meta name="og:site_name" content="TreuKS"/>

                    <meta property="og:type" content="article"/>
                    <meta name="article:author" content="TreuKS"/>
                    <meta name="article:published_time" content={post.publishedAt.toISOString()} />

                    <meta name="description" content={post.snippet} />
                    <meta name="theme-color" content="#fbcde3"/>

                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap')
                    </style>
                </Head>

                <Header/>
                <div class="article-stuff">
                    <h1 class="article-title">{post.title}</h1>
                    <time class="article-date">{new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                    </time>
                </div>
                <article class="article-background">
                    <div class="article-text markdown-body"
                        dangerouslySetInnerHTML={{ __html: render(post.content)}}
                    />
                </article>  
            </main>

        </>
    )
}