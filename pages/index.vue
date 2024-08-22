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

    const cards = [
        {
            title: "Sales",
            progression: 12,
            amount: 1244.43,
            label: "View sales",
            description: "Sales of March 2024",
            icon: "solar:ticket-sale-outline"
        },
        {
            title: "Refunds",
            progression: 8,
            amount: 84.44,
            label: "View refunds",
            description: "Refunds since beginning of year",
            icon: "heroicons-outline:receipt-refund"
        },
        {
            title: "Payouts",
            progression: 14,
            amount: 899.99,
            label: "View payouts",
            description: "Payouts of this week",
            icon: "tabler:zoom-money"
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
            <div class="grid gap-4 lg:grid-cols-3">
                <Card
                    v-for="(item, index) in cards"
                    :key="index"
                    :data="item"
                >
                </Card>
            </div>
        </footer>
    </div>
</template>