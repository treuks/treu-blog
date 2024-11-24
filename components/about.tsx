import PlatformLink from "./platform-link.tsx";
export default function About() {
    return (
        <>
            <div class="about-thing">
                <div class="abouter-thing">
                    <div class="text-group">
                        <span class="big-text">treuks</span>
                    </div>

                    <span class="subtitle">
                        Programmer, Designer, Video Editor
                    </span>

                    <ul class="platform-links">
                        <PlatformLink
                            name="GitHub"
                            href="https://github.com/treuks"
                        >
                            <img src="Icons/github.svg" alt="GitHub logo" />
                        </PlatformLink>
                        <PlatformLink
                            name="Bluesky"
                            href="https://bsky.app/profile/did:plc:2dscizrfsdsbxkytjsyllhc5"
                        >
                            <img src="Icons/bluesky.svg" alt="Bluesky logo" />
                        </PlatformLink>

                        <PlatformLink
                            name="Twitch"
                            href="https://twitch.tv/treuks"
                        >
                            <img src="Icons/twitch.svg" alt="Twitch logo" />
                        </PlatformLink>

                        <PlatformLink
                            name="Discord"
                            href="https://discordapp.com/users/291634765751386112"
                        >
                            <img src="Icons/discord.svg" alt="Discord logo" />
                        </PlatformLink>
                    </ul>
                </div>
            </div>
        </>
    );
}
