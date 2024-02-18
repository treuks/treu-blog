import PlatformLink from "./platform-link.tsx"
import DiscordLink from "./discord-link.tsx"

import GithubLogo from "./logos/github.tsx"
import BlueskyLogo from "./logos/bluesky.tsx"
import TwitchLogo from "./logos/twitch.tsx"

export default function About() {
    return (
        <>
            <div class="about-thing">
                <div class="text-group"> 
                    <span class="big-text">TreuKS</span>
                    <span class="smol-text"> / Isabelle</span>
                </div>

                <span class="subtitle">Programmer, Designer, Video Editor</span>

                <ul class="platform-links">
                    <PlatformLink name="GitHub" href="https://github.com/treuks">
                        <GithubLogo/>
                    </PlatformLink>
                    <PlatformLink name="Bluesky" href="https://bsky.app/profile/treuks.bsky.social">
                        <BlueskyLogo/>
                    </PlatformLink>

                    <PlatformLink name="Twitch" href="https://twitch.tv/treuks">
                        <TwitchLogo/>
                    </PlatformLink>

                    <DiscordLink/>
                </ul>
            </div>
        </>
    );
}