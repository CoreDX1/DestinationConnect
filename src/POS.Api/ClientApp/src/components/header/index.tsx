import { component$ } from "@builder.io/qwik"
import facebook from "/Logo/facebook-logo-meta.svg"
import youtube from "/Logo/youtube.svg"
import instagram from "/Logo/instagram.svg"
import arrow from "/Logo/arrow-down.svg"
import { Link } from "@builder.io/qwik-city"

const icon = [
    {
        src: facebook,
    },
    {
        src: youtube,
    },
    {
        src: instagram,
    },
]
const listMenu = [
    {
        name: "Destinations",
        href: "/home",
    },
    {
        name: "Travel Tips",
        href: "/travel-tips",
    },
    {
        name: "Planning",
        href: "/planning",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Shop",
        href: "/shop",
    },
]

export const Header = component$(() => {
    return (
        <header>
            <nav class="flex flex-row justify-center items-center gap-16">
                <Link class="text-[30px]" href="/home">
                    Titulo
                </Link>
                <ul>
                    {listMenu.map((item, index) => (
                        <li key={index} class="inline-block px-5">
                            <Link class="pr-1.5" href={item.href}>
                                {item.name}
                            </Link>
                            <img
                                src={arrow}
                                class="inline-block"
                                alt="arrow-down"
                            />
                        </li>
                    ))}
                </ul>
                <div>
                    <ul>
                        {icon.map((item, index) => (
                            <img
                                key={index}
                                src={item.src}
                                class="inline-block w-5"
                                alt="arrow-down"
                            />
                        ))}
                        <Link href="/auth/login">Login</Link>
                        <Link href="/auth/register">Register</Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
})
