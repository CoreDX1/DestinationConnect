import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import Menu from "../../api/Menu.json"
import facebook from "/Logo/avion.png"

export const Header = component$(() => {
    return (
        <header class="px-[290px]">
            <div class="flex justify-between">
                <Link href="/home">
                    <img class="w-16" src={facebook} alt="Logo" />
                </Link>
                <div class="flex flex-row gap-3">
                    <p>Para ventas 0810 810 9994</p>
                    <Link href="/auth/login">Login</Link>
                    <Link href="/auth/register">Register</Link>
                    <Link href="/auth/mis-viajes">Mis Viajes</Link>
                    <Link href="/auth/ayuda">Ayuda</Link>
                </div>
            </div>
            <div>
                <nav class="flex flex-row justify-center items-center gap-16">
                    <ul>
                        {Menu.map((item, index) => (
                            <li key={index} class="inline-block px-5">
                                <Link href={item.url} class="pr-1.5">
                                    {item.menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
})
