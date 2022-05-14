
import { ExternalLinkIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

import MetaTags from "@/components/metatags.jsx";

const quicklinks = [
    ["Discord", "/discord", "bg-[#5865F2] hover:bg-[#7289DA]"],
    ["Github", "https://github.com/Le0Developer", "bg-gray-600 hover:bg-gray-500"],
    ["Youtube", "https://www.youtube.com/channel/UCmdFZ_sBx6xorFWVVE_bm2A", "bg-red-500 hover:bg-red-600"]
]


export default function Home() {
    const router = useRouter();
    return (
        <>
            <MetaTags
                title="Leo Developer | leodev.xyz"
                description="Personal website of Leo."
            />
            <h1 className="my-10 text-5xl font-extrabold text-center sm:text-8xl">
                Hello there!
            </h1>

            <div className="--container">
                <div>
                    <h2 className="text-2xl font-medium underline">
                        Quick links
                    </h2>
                    <div className="grid grid-cols-1 gap-2 mt-2 text-white sm:grid-cols-3">
                        {quicklinks.map(([label, href, style]) => <Link href={href} key={href}>
                            <a className={clsx("--btn --btn-1", style)}>
                                {label}
                            </a>
                        </Link>)}
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="mb-2 text-2xl font-medium underline">
                        About me
                    </h2>
                    <p>
                        Hey! I am <span className="--highlight">Leo</span> from Germany and go by the alias <span className="--highlight">Leo Developer</span>.
                    </p>
                    <p className="mt-2">
                        Things I like:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>
                            <span className="--highlight">coding</span>{" "}
                            (python, lua/moonscript/yuescript, js/css/html/react, V)
                        </li>
                        <li>
                            <Link href="#discord">
                                <a className="hover:underline --highlight">
                                    Discord
                                </a>
                            </Link>{" "}
                            (check out my <Link href="/discord">
                                <a className="hover:underline">
                                    Discord
                                </a>
                            </Link> and <Link href="#discord">
                                <a className="hover:underline">
                                    my bots
                                </a>
                            </Link>)
                        </li>
                        <li>
                            <span className="--highlight">
                                games
                            </span>{" "}
                            (<Link href="#csgo">
                                <a className="hover:underline">
                                    csgo
                                </a>
                            </Link>, minecraft, botw, splatoon, ...)
                        </li>
                        <li className="--highlight">
                            you 😳
                        </li>
                    </ul>
                </div>

                <div className="mt-12">
                    <h2 className="mb-2 text-2xl font-medium underline">
                        Miss the old page?
                    </h2>
                    <Link href="https://legacy.leodeveloper.pages.dev">
                        <a className="w-full --btn --btn-3 --btn-primary sm:w-96 hover:bg-blue-550">
                            Visit the legacy documentation
                            <ExternalLinkIcon className="inline w-6 h-6 ml-2" />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="py-20 space-y-8">
                <Section name="Counter-Strike: Global Offensive" id="csgo">
                    <p>
                        I started playing CS:GO in late 2018 and really enjoy cheating in it.
                        So this section will be very cheating related.
                    </p>
                    {/* <h3 className="mt-8 text-lg font-bold">
                        Documentation
                    </h3>
                    <p className="text-gray-200">
                        Documentation I wrote for the scripting interface of some cheats.
                    </p>
                    <div className="flex mt-2 gap-x-4 gap-y-2">
                        <Link href="/csgo/aimware-v5/docs">
                            <a className="hover:underline">
                                Aimware v5
                            </a>
                        </Link>
                        <Link href="/csgo/onetap-v3/docs">
                            <a className="hover:underline">
                                Onetap v3
                            </a>
                        </Link>
                        <Link href="/csgo/neverlose-v2/docs">
                            <a className="hover:underline">
                                Neverlose v2
                            </a>
                        </Link>
                    </div> */}
                    {/* <h3 className="mt-8 text-lg font-bold">
                        My scripts
                    </h3>
                    <p className="text-gray-200">
                        I wrote some scripts for a few cheats aswell, you can find them here:
                    </p>
                    <div className="flex mt-2 gap-x-4 gap-y-2">
                        <Link href="/csgo/aimware-v5/scripts">
                            <a className="hover:underline">
                                Aimware v5
                            </a>
                        </Link>
                        <Link href="/csgo/onetap-v3/scripts">
                            <a className="hover:underline">
                                Onetap v3
                            </a>
                        </Link>
                        <Link href="/csgo/neverlose-v2/scripts">
                            <a className="hover:underline">
                                Neverlose v2
                            </a>
                        </Link>
                    </div> */}
                    <h3 className="mt-8 text-lg font-bold">
                        CustomSU
                    </h3>
                    <p className="text-gray-200">
                        A project of mine that enabled the usage of LauncherSU outside of China.{" "}
                        <b>This project is discontinued.</b>
                    </p>
                    <h3 className="mt-8 text-lg font-bold">
                        cslua
                    </h3>
                    <p className="text-gray-200">
                        A lua loader for CS:GO which is still in early development.
                        Name is subject to change.
                    </p>
                    <Link href="https://github.com/le0developer/csgo-lua">
                        <a className="--highlight hover:underline">
                            Github repo for people who have access
                        </a>
                    </Link>
                </Section>
                <Section name="Discord" id="discord">
                    <p>
                        I've been using Discord since 2017 and here are mostly bot related things.
                    </p>
                    <Link href="/discord">
                        <a className="hover:underline --highlight">
                            My Discord
                        </a>
                    </Link>
                    <h3 className="mt-8 text-lg font-bold">
                        My public bots
                    </h3>
                    <div className="flex mt-2 gap-x-4 gap-y-2">
                        <Link href="https://cleaner.leodev.xyz">
                            <a className="hover:underline --highlight">
                                The Cleaner
                            </a>
                        </Link>
                    </div>
                </Section>
                <Section name="Lua" id="lua">
                    <p>
                        Lua coder since forever.
                    </p>
                    <p>
                        I really love{" "}
                        <Link href="https://yuescript.org">
                            <a className="hover:underline --highlight">
                                Yuescript
                            </a>
                        </Link>.
                    </p>
                    <h3 className="mt-8 text-lg font-bold">
                        Some libraries I made
                    </h3>
                    <div className="flex mt-2 gap-x-4 gap-y-2">
                        <Link href="https://github.com/leodev-xyz/leadoc">
                            <a className="hover:underline --highlight">
                                leadoc
                            </a>
                        </Link>
                        <Link href="https://github.com/le0developer/luapack">
                            <a className="hover:underline --highlight">
                                luapack
                            </a>
                        </Link>
                    </div>
                </Section>
                <Section name="Triangoli" id="triangoli">
                    <p>
                        Small little game I made that is inspired by triangoli (a kind of ravioli available in my local aldi).
                    </p>
                    <Link href="https://triangoli.leodev.xyz">
                        <a className="hover:underline --highlight">
                            Website
                        </a>
                    </Link>
                </Section>
            </div>
            <p className="flex items-center justify-center mt-12 mb-4">
                <Link href="/privacy">
                    <a className="hover:underline --highlight">
                        Privacy Policy
                    </a>
                </Link>
            </p>
        </>
    )
}

function Section({ name, id, children }) {
    return (
        <>
            <h2 className="w-full py-2 text-center bg-gray-900" id={id}>
                {name}
            </h2>
            <div className="--container">
                {children}
            </div>
        </>
    )
}
