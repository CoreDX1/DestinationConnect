import { $, component$, useContext } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import Menu from "~/service/LocalApi/Menu.json"
import { AuthContext } from "~/root"

export const Header = component$(() => {
    const auth = useContext(AuthContext)
    const handelLogout = $(() => {
        if (auth.isLogged.value) {
            auth.isLogged.value = false
            window.localStorage.removeItem("myToken")
        }
    })

    return (
        <header class="pl-[290px] text-[15px]">
            <div class="flex justify-between max-[1280px]">
                <Link href="/home">
                    <img class="w-16" src="/Logo/avion.png" alt="Logo" />
                </Link>
                <div class="flex flex-row h-[70px] items-center">
                    <p class="bg-[#270570] h-full  p-6 rounded-bl-3xl text-white">
                        Para ventas 0810 810 9994
                    </p>
                    <div class="flex flex-row items-center gap-4 bg-[#EEE] h-full w-[820px] pl-4">
                        <a href="*">Pasaporte</a>
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
                            {auth.isLogged.value ? (
                                <button
                                    class="border border-green-500 px-2 rounded-xl hover:bg-gray-400"
                                    onClick$={handelLogout}
                                >
                                    Logout
                                </button>
                            ) : (
                                ""
                            )}
                        </li>
                    </div>
                </div>
            </div>
            <div class="mb-2 mt-2 w-[1170px]">
                <nav class="grid">
                    <ul>
                        {Menu.map((item, index) => (
                            <li key={index} class="inline-block pr-5">
                                <Link href={item.url} class="px-[1px]">
                                    {item.menu}
                                </Link>
                            </li>
                        ))}
                        <div class="inline-block w-[200px] text-right">
                            <li class="inline-block border p-2 w-auto rounded-full align-middle hover:text-indigo-600 hover:border-indigo-600">
                                <a href="/auth/logout">Tarjeta Despegar ICBC</a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
})
