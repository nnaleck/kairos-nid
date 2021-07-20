<template>
    <select
        @change="$emit('update:modelValue', $event.target.value)"
        class="bg-white p-2.5 rounded border-none ring-2 ring-trueGray-200 text-left text-trueGray-700 leading-5"
    >
        <option
            v-for="option in options"
            :key="option"
            :value="option[optionKey]"
            :disabled="disabledKey ? option[disabledKey] : false"
        >
            {{ optionValue ? option[optionValue] : null }}
        </option>
    </select>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "Select",

        emits: ['update:modelValue'],

        props: {
            modelValue: {
                required: true,
            },
            options: {
                type: Array,
                required: true,
            },
            optionKey: {
                type: String,
                default: () => 'key'
            },
            optionValue: {
                type: String,
                default: () => 'value'
            },
            disabledKey: {
                type: String,
                default: () => null
            }
        }
    })
</script>