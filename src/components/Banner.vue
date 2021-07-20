<template>
    <div class="bg-green-500">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: 'Banner'
})
</script>