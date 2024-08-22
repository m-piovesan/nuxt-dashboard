<script setup>
    import { Badge } from "@/components/ui/badge";
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'

    const props = defineProps(["data"]);
</script>

<template>
   <Card>
        <CardHeader class="pb-0">
            <div class="flex items-center justify-between">
                <p>{{ data.title }}</p>
                <Badge class="bg-green-500">{{ "+" + data.progression + "%" }}</Badge>
            </div> 
        </CardHeader>

        <CardContent class="flex items-center justify-end border-b pt-0">
            <div class="text-[48px] font-[800]">
                <span class="text-green-500">$</span>
                <span>{{ data.amount }}</span>
            </div>
        </CardContent>

        <CardFooter class="flex items-center justify-between gap-2 p-2">
            <div class="w-8 h-8 rounded flex items-center justify-center">
                <Icon size="20" :name="data.icon" color="black" />
            </div>
            <p class="text-xs grow">{{ data.description }}</p>
            <Button variant="outline">{{ data.label }}</Button>
        </CardFooter>
   </Card>
</template>