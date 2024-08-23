<script setup>
    import {
        AlertDialog,
        AlertDialogAction,
        AlertDialogCancel,
        AlertDialogContent,
        AlertDialogDescription,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogTitle,
        AlertDialogTrigger,
    } from '@/components/ui/alert-dialog'

    const { loading, open, toggleLoading, toggleOpen } = useHelpers();

    const createNewProduct = async () => {
        try {
            loading.value = true
        } catch (error) {
            
        } finally {
            loading.value = false
            open.value = false
        }
    }
</script>

<template>
    <AlertDialog :open="open">
        <AlertDialogTrigger @click="toggleOpen()">Add product</AlertDialogTrigger>
        
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Create a new product</AlertDialogTitle>
            
                <Input placeholder="product name"/>
            </AlertDialogHeader>
        
            <AlertDialogFooter>
                <AlertDialogCancel @click="toggleOpen()">Cancel</AlertDialogCancel>
                <AlertDialogAction @click="createNewProduct()">Create</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>