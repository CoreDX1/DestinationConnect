import { component$, useContext } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import Menu from "~/api/LocalApi/Menu.json"
import { AuthContext } from "~/root"

export const Header = component$(() => {
    const auth = useContext(AuthContext)

    return (
        <header class="pl-[290px] text-[15px]">
            <div class="flex justify-between max-[1280px]">
                <Link href="/home">
                    <img class="w-16" src="/Logo/avion.png" alt="Logo" />
                </Link>
                <div class="flex flex-row items-center">
                    <p class="bg-[#270570] p-4 rounded-bl-3xl text-white">
                        Para ventas 0810 810 9994
                    </p>
                    <div class="flex flex-row items-center gap-4 bg-[#EEE] h-[54px] w-[820px] pl-4">
                        <a>Pasaporte</a>
                        {!auth.isLogged.value && (
                            <div>
                                <Link class="p-4" href="/auth/register">
                                    Register
                                </Link>
                                <Link class="p-4" href="/auth/login">
                                    Login
                                </Link>
                            </div>
                        )}
                        <Link href="/auth/mis-viajes">Mis Viajes</Link>
                        <Link href="/auth/ayuda">Ayuda</Link>
                        <li>
                            <a
                                class={{
                                    "bg-red-500 rounded-full p-2":
                                        !auth.isLogged.value,
                                    "bg-green-400 rounded-full p-2":
                                        auth.isLogged.value,
                                }}
                            >
                                {auth.isLogged.value
                                    ? "Usuario logado"
                                    : "Usuario no logado"}
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div>
                <nav class="grid">
                    <ul>
                        {Menu.map((item, index) => (
                            <li key={index} class="inline-block pr-5">
                                <Link href={item.url} class="px-[1px]">
                                    {item.menu}
                                </Link>
                            </li>
                        ))}
                        <li class="inline-block border p-2 rounded-full align-middle hover:text-indigo-600 hover:border-indigo-600">
                            <a href="/auth/logout">Tarjeta Despegar ICBC</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
})
