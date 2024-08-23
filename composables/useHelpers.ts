export default function useHelpers() {
    const loading = ref(false)
    const open = ref(false)

    return {
        loading,
        open,
        toggleLoading() {
            loading.value = !loading.value
        },
        toggleOpen() {
            open.value = !open.value
        }
    }
}