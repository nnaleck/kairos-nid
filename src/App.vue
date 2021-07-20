<template>
    <Toggle v-model="selected" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Toggle from "./components/Toggle.vue"

export default defineComponent({
    components: {
        Toggle
    },

    setup()
    {
        const selected = ref(false)

        return { selected }
    }
})
</script>
