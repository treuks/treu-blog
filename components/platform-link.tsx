import { Component } from "preact";

import GithubLogo from "./logos/github.tsx"
import type { ComponentChildren } from "preact";

export default function PlatformLink(props: { name: string, href: string, children: ComponentChildren}) {
    return (
        <>
            <li>
                <a href={props.href} name={props.name}>
                    <div class="link-block">
                        <div class="link-logo"> 
                            {props.children}       
                        </div>
                    </div>    
                </a>
            </li>
        </>
    );
}