import type { QwikChangeEvent } from "@builder.io/qwik"
import { $, component$, useStore, useSignal } from "@builder.io/qwik"
import { useNavigate } from "@builder.io/qwik-city"
import type { IUserResponse } from "~/Interface/Response/IUserResponse"
import type { Login } from "~/Interface/Request/IUserRequest"
import { User } from "~/api/UserApi"

export default component$(() => {
    const sign = useStore<Login>({
        email: "",
        password: "",
    })
    const responseData = useSignal<IUserResponse>()
    const nav = useNavigate()

    const onChangePasswod = $((e: QwikChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target
        sign.password = value
    })

    const onChangeEmail = $((e: QwikChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target
        sign.email = value
    })

    const webLogin = $(async () => {
        const res = new User("/Auth/Login")
        const data = await res.accountLogin(sign)
        responseData.value = data
        console.log(data)
        if (data.success) {
            nav("/home")
        }
    })

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg-py-0">
                <a class="text-[40px] font-bold py-8" href="/home">
                    Login Form
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight ">
                            Please sign in
                        </h1>
                        <form class="space-y-5 md:space-y-6">
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Email
                                </label>
                                {responseData.value?.success ? null : (
                                    <div>
                                        {responseData.value?.errors.email.map(
                                            (item, index) => (
                                                <p
                                                    key={index}
                                                    class="text-red-600"
                                                >
                                                    {item}
                                                </p>
                                            )
                                        )}
                                    </div>
                                )}
                                <input
                                    type="email"
                                    placeholder="user@gmail.com"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange$={onChangeEmail}
                                />
                            </div>
                            <div>
                                <label
                                    for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Password
                                </label>
                                {responseData.value?.success ? null : (
                                    <div>
                                        {responseData.value?.errors.password.map(
                                            (item, index) => (
                                                <p
                                                    key={index}
                                                    class="text-red-600"
                                                >
                                                    {item}
                                                </p>
                                            )
                                        )}
                                    </div>
                                )}
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="on"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange$={onChangePasswod}
                                />
                            </div>
                            <button
                                class="text-black bg-blue-400 w-full p-2 rounded-lg font-bold text-[20px] hover:bg-blue-300"
                                preventdefault:click
                                onClick$={webLogin}
                            >
                                Login
                            </button>
                            {responseData.value?.success ? null : (
                                <p class="text-red-600">
                                    {responseData.value?.message}
                                </p>
                            )}
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <a
                                    href="#"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
})
