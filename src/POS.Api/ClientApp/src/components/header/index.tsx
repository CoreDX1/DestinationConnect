import { component$, useContext } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import Menu from "~/api/LocalApi/Menu.json"
import { AuthContext } from "~/root"

export const Header = component$(() => {
    const auth = useContext(AuthContext)

    return (
        <header class="px-[290px]">
            <div></div>
            <div class="flex justify-between">
                <Link href="/home">
                    <img class="w-16" src="/Logo/avion.png" alt="Logo" />
                </Link>
                <div class="flex flex-row gap-3">
                    <p>Para ventas 0810 810 9994</p>
                    {auth.isLogged.value ? null : (
                        <div>
                            <Link href="/auth/register">Register</Link>
                            <Link href="/auth/login">Login</Link>
                        </div>
                    )}
                    <Link href="/auth/mis-viajes">Mis Viajes</Link>
                    <Link href="/auth/ayuda">Ayuda</Link>
                    <li>
                        <a>
                            {auth.isLogged.value
                                ? "Usuario logado"
                                : "Usuario no logado"}
                        </a>
                    </li>
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
