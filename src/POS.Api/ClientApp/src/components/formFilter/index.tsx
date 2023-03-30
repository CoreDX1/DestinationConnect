import { component$, useStore } from "@builder.io/qwik"

export const Formfilter = component$(() => {
    const form = useStore({
        casa: "",
        destino: "",
        fechaInicio: "",
        fechaFin: "",
        habitaciones: {
            cama: 0,
            personas: 0,
        },
    })

    return (
        <div class="flex justify-center pt-10">
            <div class="bg-violet-800 w-[1000px] rounded-2xl p-8 ">
                <div class="text-white flex flex-row gap-7 pb-6 items-center">
                    <h2 class="text-2xl font-medium">Alojamientos</h2>
                    <div>
                        <span class="border-2 rounded-full px-4 hover:bg-white hover:text-black">
                            Todos
                        </span>
                    </div>
                    <div>
                        <span class="border-2 rounded-full px-4">Hoteles</span>
                    </div>
                    <div>
                        <span class="border-2 rounded-full px-4">
                            Alquileres Temporarios
                        </span>
                    </div>
                </div>
                <form class="text-white">
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
