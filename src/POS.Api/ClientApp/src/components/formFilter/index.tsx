import { $, component$, type QwikMouseEvent, useStore } from "@builder.io/qwik"
import type {
    WithLabel,
    IFormfilter,
    WithIdAndLabel,
} from "~/Interface/Response/IFormFilter"
import menuItem from "~/api/LocalApi/MenuItem.json"

export const Formfilter = component$(() => {
    const form = useStore<IFormfilter>({
        casa: "",
        destino: "",
        fechaInicio: "",
        fechaFin: "",
        habitaciones: {
            cama: 0,
            personas: 0,
        },
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

    const handleSubmit = $(
        (event: QwikMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { id } = event.target as HTMLSpanElement
            form.casa = id
        }
    )

    return (
        <div class="flex justify-center items-center py-5 bg-violet-400">
            <div class="bg-indigo-900 w-[60rem] rounded-md p-4">
                <div class="text-white flex flex-row gap-7 pb-6 items-center">
                    <h2 class="text-2xl font-medium">Alojamientos</h2>
                    {newMenu.map((item, index) => (
                        <div key={index}>
                            <p>
                                <span
                                    id={item.id}
                                    class="border-2 rounded-full px-4"
                                    onClick$={() => handleSubmit}
                                >
                                    {item.label}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
                <form class="text-gray-500">
                    <label>Destino</label>
                    <input
                        type="text"
                        placeholder="ingresa una cuidad , alojamiento o punto de"
                    />
                    <div>
                        <label>Fecha de inicio</label>
                        <input type="date" placeholder="ingresa una fecha" />
                        <label>Fecha de fin</label>
                        <input type="date" placeholder="ingresa una fecha" />
                    </div>
                    <label>Habitaciones</label>
                    <div>
                        <h5>cama</h5>
                        <input type="text" value={form.habitaciones.cama} />
                    </div>
                    <div>
                        <h5>personas</h5>
                        <input type="text" value={form.habitaciones.personas} />
                    </div>
                </form>
            </div>
        </div>
    )
})
