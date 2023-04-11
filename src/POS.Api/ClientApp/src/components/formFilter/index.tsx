import {
    $,
    component$,
    useStore,
    type QwikChangeEvent,
    type QwikMouseEvent,
} from "@builder.io/qwik"
import type {
    WithLabel,
    IFormfilter,
    WithIdAndLabel,
} from "~/Interface/Response/IFormFilter"
import menuItem from "~/service/LocalApi/MenuItem.json"

export const Formfilter = component$(() => {
    const form = useStore<IFormfilter>({
        alojamiento: "",
        destino: "",
        fechaInicio: "",
        fechaFin: "",
    })

    const createItemsWithId = <T extends WithLabel>(
        items: Array<T>
    ): Array<WithIdAndLabel> => {
        return items.map((item) => ({
            id: item.label.toLowerCase().replace(/ /g, "-"),
            label: item.label,
        }))
    }
    const newMenu = createItemsWithId(menuItem)

    const handleTest = $((e: QwikChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        form[name] = value
    })

    const handleSubmit = $(
        (event: QwikMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { id } = event.target as HTMLSpanElement
            const textModicate = id.replace(/\s+/g, "-").toLowerCase()
            form["alojamiento"] = textModicate
        }
    )

    const handleForm = $(() => {
        console.log(form)
    })

    return (
        <div class="flex justify-center items-center py-5 bg-gradient-to-b from-purple-400 to-purple-500">
            <form
                class="bg-[#270570] gap-3 w-[60rem] rounded-md p-4 grid grid-cols-4 grid-rows-[50px,60px]"
                method="POST"
                preventdefault:submit
                onSubmit$={handleForm}
            >
                <h2 class="text-3xl text-white font-medium">Alojamientos</h2>
                <div class="col-span-3 p-2 align-bottom text-white">
                    {newMenu.map((item, index) => (
                        <span
                            key={index}
                            class="border-2 rounded-full mx-2 px-4"
                            id={item.label}
                            onClick$={handleSubmit}
                        >
                            {item.label}
                        </span>
                    ))}
                </div>
                <div class="bg-white pl-5 pt-2">
                    <label class="block text-sm">Destino</label>
                    <input
                        type="text"
                        name="destino"
                        class="w-full"
                        placeholder="ingresa Ubicacion"
                        onChange$={handleTest}
                    />
                </div>
                <div class="bg-white">
                    <label class="block">Fecha de inicio</label>
                    <input
                        type="date"
                        name="fechaInicio"
                        placeholder="ingresa una fecha"
                        onChange$={handleTest}
                    />
                </div>
                <div class="bg-white">
                    <label class="block">Fecha de fin</label>
                    <input
                        type="date"
                        name="fechaFin"
                        placeholder="ingresa una fecha"
                        onChange$={handleTest}
                    />
                </div>
                <div class=" text-right">
                    <button class=" bg-[#fa503f] w-2/4 h-full text-white rounded-full">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
})
