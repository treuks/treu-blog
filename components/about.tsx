import PlatformLink from "./platform-link.tsx";
import DiscordLink from "./discord-link.tsx";
export default function About() {
    return (
        <>
            <div class="about-thing">
                <div class="text-group">
                    <span class="big-text">treuks</span>
                    <span class="smol-text">/ Isabelle</span>
                </div>

                <span class="subtitle">Programmer, Designer, Video Editor</span>

                <ul class="platform-links">
                    <PlatformLink
                        name="GitHub"
                        href="https://github.com/treuks"
                    >
                        <img src="Icons/github.svg" />
                    </PlatformLink>
                    <PlatformLink
                        name="Bluesky"
                        href="https://bsky.app/profile/treuks.com"
                    >
                        <img src="Icons/bluesky.svg" />
                    </PlatformLink>

                    <PlatformLink name="Twitch" href="https://twitch.tv/treuks">
                        <img src="Icons/twitch.svg" />
                    </PlatformLink>

                    <DiscordLink />
                </ul>
            </div>
        </>
    );
}
