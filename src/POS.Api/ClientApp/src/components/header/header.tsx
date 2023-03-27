import { component$ } from "@builder.io/qwik"
import facebook from "/Logo/facebook-logo-meta.svg"
import youtube from "/Logo/youtube.svg"
import instagram from "/Logo/instagram.svg"
import arrow from "/Logo/arrow-down.svg"

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

export default component$(() => {
    return (
        <header>
            <nav class="flex flex-row justify-center items-center gap-16">
                <a class="text-[30px]" href="/home">
                    Titulo
                </a>
                <ul>
                    {listMenu.map((item, index) => (
                        <li key={index} class="inline-block px-5">
                            <a class="pr-1.5" href={item.href}>
                                {item.name}
                            </a>
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
                        <a href="/auth/login">Login</a>
                        <a href="/auth/register">Register</a>
                    </ul>
                </div>
            </nav>
        </header>
    )
})
