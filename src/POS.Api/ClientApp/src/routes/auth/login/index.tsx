import { useContext, type QwikChangeEvent } from "@builder.io/qwik"
import { $, component$, useStore, useSignal } from "@builder.io/qwik"
import type { IUserResponse } from "~/Interface/Response/IUserResponse"
import type { LoginData } from "~/Interface/Request/IUserRequest"
import { User } from "~/api/UserApi"
import { AuthContext } from "~/root"
import { ErrorList } from "~/components/errorList"

export const fakeAuthService = (credentiales: {
    email: string
    password: string
}): any => {
    console.log(credentiales)
    console.log(`Retorna un token session (JWT Json Web Token)`)
    const JWT = "TOKEN_SESSION_123"
    const expireDate = new Date()
    expireDate.setDate(expireDate.getDate() + 1)
    document.cookie = `myToken=${JWT};Secure; SameSite; path=/; expires=${expireDate.toUTCString()}`
}

export default component$(() => {
    const loginData = useStore<LoginData>({
        email: "",
        password: "",
    })
    const responseData = useSignal<IUserResponse>()
    const auth = useContext(AuthContext)

    const handlInputChange = $((e: QwikChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        loginData[name] = value
    })

    const loginAccount = $(async () => {
        const res = new User("/Auth/Login")
        const data = await res.accountLogin(loginData)
        responseData.value = data
        fakeAuthService(loginData)
        if (data.success) auth.isLogged.value = true
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
                        <form
                            preventdefault:submit
                            onSubmit$={loginAccount}
                            class="space-y-5 md:space-y-6"
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Email
                                </label>
                                {!responseData.value?.success && (
                                    <ErrorList
                                        message={
                                            responseData.value?.errors.email
                                        }
                                    />
                                )}
                                <input
                                    type="email"
                                    placeholder="user@gmail.com"
                                    name="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange$={handlInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Password
                                </label>
                                {!responseData.value?.success && (
                                    <ErrorList
                                        message={
                                            responseData.value?.errors.password
                                        }
                                    />
                                )}
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="on"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="password"
                                    onChange$={handlInputChange}
                                />
                            </div>
                            <button class="text-black bg-blue-400 w-full p-2 rounded-lg font-bold text-[20px] hover:bg-blue-300">
                                Login
                            </button>
                            {!responseData.value?.success && (
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
