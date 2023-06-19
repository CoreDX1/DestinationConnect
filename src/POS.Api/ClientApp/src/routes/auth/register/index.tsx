import { $, component$, type QwikChangeEvent } from "@builder.io/qwik"
import { ErrorList } from "~/components/errorList"
import { SuccessMessage } from "~/components/successMessage"
import { useFetchUser } from "~/hooks/useFetchUser"

export default component$(() => {
    const {
        registrationData,
        resgistrationResponse,
        showSuccessMessage,
        responseRegister,
    } = useFetchUser()

    const registerAccount = $(async () => {
        resgistrationResponse.value = await responseRegister(registrationData)
        showSuccessMessage.value = true
        setTimeout(() => (showSuccessMessage.value = false), 5000)
    })

    const updateRegistrationData = $((e: QwikChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        console.log(value, name)
        registrationData[name] = value
    })

    return (
        <section class="bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg-py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div class="text-center">
                            <SuccessMessage
                                show={showSuccessMessage.value}
                                success={resgistrationResponse.value?.success}
                                message={resgistrationResponse.value?.message}
                            />
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
                                                .register.firstName
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
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Your Lastname
                                </label>
                                {!resgistrationResponse.value?.success && (
                                    <ErrorList
                                        message={
                                            resgistrationResponse.value?.errors
                                                .register.lastName
                                        }
                                    />
                                )}
                                <input
                                    type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                                    placeholder="lastname"
                                    value={registrationData.lastname}
                                    name="lastname"
                                    onChange$={updateRegistrationData}
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Your Email
                                </label>
                                {!resgistrationResponse.value?.success && (
                                    <ErrorList
                                        message={
                                            resgistrationResponse.value?.errors
                                                .register.email
                                        }
                                    />
                                )}
                                <input
                                    type="email"
                                    placeholder="user@gmail.com"
                                    class={
                                        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                                    }
                                    value={registrationData.email}
                                    name="email"
                                    onChange$={updateRegistrationData}
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900">
                                    Your Password
                                </label>
                                {!resgistrationResponse.value?.success && (
                                    <ErrorList
                                        message={
                                            resgistrationResponse.value?.errors
                                                .register.password
                                        }
                                    />
                                )}
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="on"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
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
