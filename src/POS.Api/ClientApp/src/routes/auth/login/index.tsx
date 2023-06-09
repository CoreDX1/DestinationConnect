import { type QwikChangeEvent } from "@builder.io/qwik"
import { $, component$ } from "@builder.io/qwik"
import { User } from "~/service/UserApi"
import { ErrorList } from "~/components/errorList"
import { SuccessMessage } from "~/components/successMessage"
import { useLogin } from "~/hooks/useLogin"

export default component$(() => {
    const { auth, loginData, responseData, showSuccessMessage, navigate } =
        useLogin()

    const handlInputChange = $((e: QwikChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        loginData[name] = value
    })

    const loginAccount = $(async () => {
        const data = await User.AccountLogin(loginData)
        console.log(data)
        responseData.value = data
        setTimeout(() => (showSuccessMessage.value = false), 5000)
        if (data.success) {
            auth.isLogged.value = true
            window.localStorage.setItem("myToken", JSON.stringify(data))
            navigate("/auth/solo/user")
        }
    })

    return (
        <section class="bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg-py-0">
                <a class="text-[40px] font-bold py-8" href="/home">
                    Login Form
                </a>
                <SuccessMessage
                    show={showSuccessMessage.value}
                    success={responseData.value?.success}
                    message={responseData.value?.message}
                />
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight ">
                            Please sign in
                        </h1>
                        <form
                            method="POST"
                            preventdefault:submit
                            onSubmit$={loginAccount}
                            class="space-y-5 md:space-y-6"
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Your Email
                                </label>
                                {!responseData.value?.success && (
                                    <ErrorList
                                        message={
                                            responseData.value?.errors.login
                                                .email
                                        }
                                    />
                                )}
                                <input
                                    type="email"
                                    placeholder="user@gmail.com"
                                    name="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                                    onChange$={handlInputChange}
                                />
                            </div>
                            <div>
                                <label
                                    for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Your Password
                                </label>
                                {!responseData.value?.success && (
                                    <ErrorList
                                        message={
                                            responseData.value?.errors.login
                                                .password
                                        }
                                    />
                                )}
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="on"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
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
