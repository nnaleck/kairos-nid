<template>
    <Switch
        v-model="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
        :class="[backgroundClass, 'relative h-5 w-11 rounded-full p-0.5 inline-flex items-center']"
    >
        <span class="sr-only">Enable</span>
        <span
            :class="[modelValue ? 'translate-x-6' : 'translate-x-0', 'relative w-4 h-4 inline-block transform transition ease-in-out duration-200']"
        >
            <!--Switch enabled icon-->
            <span
                :class="[modelValue ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-200']"
                class="absolute inset-0 w-full h-full rounded-full bg-green-500 border-2 border-white transform transition-opacity"
            />

            <!--Switch disabled icon-->
            <span
                :class="[modelValue ? 'opacity-0 ease-out duration-200' : 'opacity-100 ease-in duration-200']"
                class="absolute inset-0 w-full h-full bg-white rounded-full transform transition-opacity"
            />
        </span>
    </Switch>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { Switch } from "@headlessui/vue"

export default defineComponent({
    name: 'Toggle',

    emits: ['update:modelValue'],

    props: ['modelValue'],

    components: {
        Switch
    },

    setup(props)
    {
        const backgroundClass = computed(() => {
            return props.modelValue ? 'bg-green-200' : 'bg-trueGray-700'
        })

        return { backgroundClass }
    }
})
</script>