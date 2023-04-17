import {
    $,
    component$,
    useStore,
    type QwikChangeEvent,
    type QwikMouseEvent,
} from "@builder.io/qwik"
import type {
    WithLabel,
    WithIdAndLabel,
} from "~/Interface/Response/IFormFilter"
import menuItem from "~/service/LocalApi/MenuItem.json"
import { type ILodgingRequestDto } from "~/Interface/Request/ILodgingRequestDto"
import { useNavigate } from "@builder.io/qwik-city"

export const Formfilter = component$(() => {
    const form = useStore<ILodgingRequestDto>({
        numPage: 1,
        numRecordPage: 5,
        textLodgingType: "",
        numFilters: 1,
        textFilter: "",
        endData: "",
        startData: "",
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
    const navigate = useNavigate()

    const handleTest = $((e: QwikChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        form[name] = value
    })

    const handleSubmit = $(
        (event: QwikMouseEvent<HTMLSpanElement, MouseEvent>) => {
            const { id } = event.target as HTMLSpanElement
            form["textLodgingType"] = id
        }
    )

    const handleForm = $(async () => {
        // await lodgingApi.FilterLedging(form)
        // numPage=1&numRecordPage=10&numFilters=1&textLodgingType=hotel&textFilter=Madrid&startData=2022-01-01&endData=2022-01-10
        navigate(
            `/alojamientos/numPage=${form.numPage}&numRecordPage=${form.numRecordPage}&numFilters=${form.numFilters}&textLodgingType=${form.textLodgingType}&textFilter=${form.textFilter}&startData=${form.startData}&endData=${form.endData}`
        )
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
                            class="border-2 rounded-full mx-2 px-4 hover:bg-white hover:text-[#270570] cursor-pointer"
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
                        name="textFilter"
                        class="w-full"
                        placeholder="ingresa Ubicacion"
                        onChange$={handleTest}
                    />
                </div>
                <div class="bg-white">
                    <label class="block">Fecha de inicio</label>
                    <input
                        type="date"
                        name="startData"
                        placeholder="ingresa una fecha"
                        onChange$={handleTest}
                    />
                </div>
                <div class="bg-white">
                    <label class="block">Fecha de fin</label>
                    <input
                        type="date"
                        name="endData"
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
