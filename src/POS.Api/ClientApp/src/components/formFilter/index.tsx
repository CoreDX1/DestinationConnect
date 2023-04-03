import { $, component$, type QwikMouseEvent, useStore } from "@builder.io/qwik"
interface IFormfilter {
    casa: string
    destino: string
    fechaInicio: string
    fechaFin: string
    habitaciones: {
        cama: number
        personas: number
    }
}

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

    const menuItem = [
        {
            id: "todos",
            label: "Todos",
        },
        {
            id: "hoteles",
            label: "Hoteles",
        },
        {
            id: "alquileres",
            label: "Alquileres Temporarios",
        },
    ]

    const handleSubmit = $(
        (event: QwikMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { id } = event.target as HTMLSpanElement
            form.casa = id
        }
    )

    // const handleSubmitInput =

    return (
        <div class="flex justify-center pt-10">
            <div class="bg-violet-800 w-[1000px] rounded-2xl p-8 ">
                <div class="text-white flex flex-row gap-7 pb-6 items-center">
                    <h2 class="text-2xl font-medium">Alojamientos</h2>
                    {menuItem.map((item, index) => (
                        <div key={index}>
                            <p>
                                <span
                                    id={item.id}
                                    class="border-2 rounded-full px-4"
                                    onClick$={(): any => handleSubmit}
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
