import { component$ } from "@builder.io/qwik"

export const Content = component$(() => {
    return (
        <div class="flex justify-center">
            <div class="grid grid-cols-4 gap-6 p-4 max-w-[1170px] justify-center">
                <img
                    class="col-span-2"
                    src="/Imagen/Hoteles/imagen1.jpg"
                    alt="hotel"
                />
                <img src="/Imagen/Hoteles/imagen2.jpg" alt="hotel" />
                <img src="/Imagen/Hoteles/imagen3.jpg" alt="hotel" />
            </div>
        </div>
    )
})
