<script setup>
    const items = ref([
        {
            title: "Overview",
            path: "/",
            icon: "ri:dashboard-line",
        },
        {
            title: "Transactions",
            path: "/transactions",
            icon: "hugeicons:transaction",
        },
        {
            title: "Account",
            path: "/account",
            icon: "material-symbols:account-circle"
        },
        {
            title: "Contacts",
            path: "/contacts",
            icon: "ri:contacts-book-3-line"
        },
        {
            title: "Settings",
            path: "/settings",
            icon: "ri:settings-3-line"
        }
    ])
</script>

<template>
    <div>
        <header class="flex items-center gap-2 p-4 transition cursor-pointer lg:hover:scale-[101%]">
            <Logo />
        </header>

        <div class="px-4 grow">
            <div class="grid gap-2">
                <NuxtLink 
                    v-for="item in items"
                    :href="item.path"
                    :key="index"
                    class="flex items-center gap-2 p-2 transition rounded cursor-pointer hover:bg-neutral-100"
                >
                    <Icon size="20" :name="item.icon" color="black" />
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
