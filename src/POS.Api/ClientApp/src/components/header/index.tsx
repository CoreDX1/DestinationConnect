import { component$ } from "@builder.io/qwik"
import facebook from "/Logo/facebook-logo-meta.svg"
import youtube from "/Logo/youtube.svg"
import instagram from "/Logo/instagram.svg"
import { Link } from "@builder.io/qwik-city"
import Menu from "../../api/Menu.json"

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

export const Header = component$(() => {
    return (
        <header>
            <nav class="flex flex-row justify-center items-center gap-16">
                <Link class="text-[30px]" href="/home">
                    Titulo
                </Link>
                <ul>
                    {Menu.map((item, index) => (
                        <li key={index} class="inline-block px-5">
                            <a href={item.url} class="pr-1.5">
                                {item.menu}
                            </a>
                            <ul>
                                {item.submenu?.map((subitem, index) => (
                                    <li class="py-2" key={index}>
                                        {subitem.url.length > 0 ? (
                                            <a href={subitem.url}>
                                                {subitem.name}
                                            </a>
                                        ) : (
                                            ""
                                        )}
                                        <ul>
                                            {subitem.submenu?.map(
                                                (subsubitem, index) => (
                                                    <li key={index}>
                                                        <a>{subsubitem.name}</a>
                                                        {subsubitem.description
                                                            .length > 0 ? (
                                                            <p>
                                                                {
                                                                    subsubitem.description
                                                                }
                                                            </p>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
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
