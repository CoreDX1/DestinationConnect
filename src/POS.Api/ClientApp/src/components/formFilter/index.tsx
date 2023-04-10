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
import menuItem from "~/api/LocalApi/MenuItem.json"

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
        console.log(form)
    })

    const handleSubmit = $(
        (event: QwikMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { id } = event.target as HTMLSpanElement
            const textModicate = id.replace(/\s+/g, "-").toLowerCase()
            form["alojamiento"] = textModicate
            console.log(form)
        }
    )

    return (
        <div class="flex justify-center items-center py-5 bg-gradient-to-b from-purple-400 to-purple-500">
            <div class="bg-[#270570] w-[60rem] rounded-md p-4">
                <div class="text-white flex flex-row gap-7 pb-6 items-center">
                    <h2 class="text-2xl font-medium">Alojamientos</h2>
                    {newMenu.map((item, index) => (
                        <div key={index}>
                            <span
                                class="border-2 rounded-full px-4"
                                id={item.label}
                                onClick$={handleSubmit}
                            >
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
                <form
                    class="text-gray-500 flex flex-row gap-3"
                    preventdefault:submit
                >
                    <div class="bg-white p-2">
                        <label class="block text-sm">Destino</label>
                        <input
                            type="text"
                            name="destino"
                            placeholder="ingresa una cuidad , alojamiento o punto de"
                            onChange$={handleTest}
                        />
                    </div>
                    <div class="flex flex-row ">
                        <div class="bg-white p-2">
                            <label class="block">Fecha de inicio</label>
                            <input
                                type="date"
                                name="fechaInicio"
                                placeholder="ingresa una fecha"
                                onChange$={handleTest}
                            />
                        </div>
                        <div class="bg-white p-2">
                            <label class="block">Fecha de fin</label>
                            <input
                                type="date"
                                name="fechaFin"
                                placeholder="ingresa una fecha"
                                onChange$={handleTest}
                            />
                        </div>
                    </div>
                    <button class="bg-orange-500 w-[120px] text-white">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
})
