<script setup>
    const user = {
        name: "John Doe",
        role: "Front end Developer"
    }
</script>

<template>
   <div class="p-4 m-2 border rounded flex items-center justify-start gap-2 cursor-pointer hover:bg-neutral-100 transition">
        <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-white">
            {{ user.name[0] }}
        </div>
    
        <div>
            <p class="text-black text-sm font-bold m-0 leading-1">{{ user.name }}</p>
            <p class="m-0 text-xs">{{ user.role }}</p>
        </div>
   </div>
</template>