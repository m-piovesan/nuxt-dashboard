<script setup>
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
    const list = [
        {
            title: "Today"
        }, {
            title: "Week"
        }, {
            title: "Month"
        }, {
            title: "Year"
        }
    ]

</script>

<template>
    <div class="grid gap-4">
        <header class="flex items-start justify-between">
            <div class="grow">
                <p>Hi, welcome back tigrão!</p>
                <h1>Dashboard</h1>
            </div>
        </header>

        <main class="grid w-full gap-4">
            <Tabs default-value="Today" class="w-full">
                <TabsList class="max-w-[400px]">
                    <TabsTrigger v-for="item, index in list" :key="index" :value="item.title">
                        {{ item.title }}
                    </TabsTrigger>
                </TabsList>
                
                <TabsContent
                    class="w-[100%]"
                    v-for="item, index in list"
                    :key="index"
                    :value="item.title"
                >
                    <Chart />
                </TabsContent>
            </Tabs>
        </main>

        <footer>
            the end of it
        </footer>
    </div>
</template>