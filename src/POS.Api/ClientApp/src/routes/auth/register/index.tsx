import {
    $,
    component$,
    useStore,
    useSignal,
    type QwikChangeEvent,
} from "@builder.io/qwik"
import type { IUserResponse } from "~/Interface/Response/IUserResponse"
import { User } from "~/service/UserApi"
import { type Register } from "~/Interface/Request/IUserRequest"
import { ErrorList } from "~/components/errorList"
import { SuccessMessage } from "~/components/successMessage"

export default component$(() => {
    const registrationData = useStore<Register>({
        lastname: "",
        firstname: "",
        email: "",
        password: "",
    })
    const resgistrationResponse = useSignal<IUserResponse>()
    const showSuccessMessage = useSignal<boolean>(false)

    const registerAccount = $(async (): Promise<IUserResponse> => {
        const res = new User("/Auth/Register")
        const data = await res.accountRegister(registrationData)
        resgistrationResponse.value = data
        showSuccessMessage.value = true
        setTimeout(() => (showSuccessMessage.value = false), 5000)
        return data
    })

    const updateRegistrationData = $((e: QwikChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        registrationData[name] = value
    })

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg-py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div class="text-center">
                            {showSuccessMessage.value && (
                                <SuccessMessage
                                    success={
                                        resgistrationResponse.value?.success
                                    }
                                    message={
                                        resgistrationResponse.value?.message
                                    }
                                />
                            )}
                        </div>
                        <h1 class="text-xl font-bold leading-tight tracking-tight ">
                            Register your account
                        </h1>
                        <form class="space-y-5 md:space-y-6">
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Your FirstName
                                </label>
                                {!resgistrationResponse.value?.success && (
                                    <ErrorList
                                        message={
                                            resgistrationResponse.value?.errors
                                                .firstName
                                        }
                                    />
                                )}
                                <input
                                    type="text"
                                    placeholder="firstname"
                                    name="firstname"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                                    value={registrationData.firstname}
                                    onChange$={updateRegistrationData}
                                />
                            </div>
                            <div>
                                <label
                                    for="lastname"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Lastname
                                </label>
                                {!resgistrationResponse.value?.success && (
                                    <ErrorList
                                        message={
                                            resgistrationResponse.value?.errors
                                                .lastName
                                        }
                                    />
                                )}
                                <input
                                    type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="lastname"
                                    value={registrationData.lastname}
                                    name="lastname"
                                    onChange$={updateRegistrationData}
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Email
                                </label>
                                {!resgistrationResponse.value?.success && (
                                    <ErrorList
                                        message={
                                            resgistrationResponse.value?.errors
                                                .email
                                        }
                                    />
                                )}
                                <input
                                    type="email"
                                    placeholder="user@gmail.com"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={registrationData.email}
                                    name="email"
                                    onChange$={updateRegistrationData}
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Password
                                </label>
                                {!resgistrationResponse.value?.success && (
                                    <ErrorList
                                        message={
                                            resgistrationResponse.value?.errors
                                                .password
                                        }
                                    />
                                )}
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="on"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={registrationData.password}
                                    name="password"
                                    onChange$={updateRegistrationData}
                                />
                            </div>
                            <button
                                class="text-black bg-blue-400 w-full p-2 rounded-lg font-bold text-[20px] hover:bg-blue-300"
                                preventdefault:click
                                onClick$={registerAccount}
                            >
                                Login
                            </button>
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
