<script setup>
    const open = ref(true);
    const desktop = "hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r shadow-lg"; 
    const mobile = "z-50 flex items-center justify-between w-full h-full p-4 lg:hidden";

    const openMenu = () => {
        open.value = true;
    }

    const closeMenu = () => {
        open.value = false;
    }
</script>

<template>
    <div>
        <div :class="mobile">
            <Logo />

            <Icon 
                class="z-50 cursor-pointer left-2 top-2"
                size="30"
                name="solar:hamburger-menu-linear"
                @click="openMenu"
            />

            <div 
                v-if="open"
                class="fixed top-0 left-0 z-50 w-full h-screen bg-white"
            >
                <Icon 
                    class="absolute z-50 cursor-pointer right-4 top-4"
                    size="30"
                    name="material-symbols:close"
                    @click="closeMenu"
                />

                <SidebarMenu />
            </div>
        </div>

        <div :class="desktop">
            <SidebarMenu />
            <div>
                <UserItem />
            </div>
        </div>
    </div>
</template>
