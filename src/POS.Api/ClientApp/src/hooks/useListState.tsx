export const useListState = (todo: any, ruta: any) => {
    const pageTotal = todo.value?.data?.totalPages ?? 0
    const urlParams = new URLSearchParams(ruta)
    const valorPage = urlParams.get("NumPage")

    return {
        pageTotal,
        urlParams,
        valorPage,
    }
}
