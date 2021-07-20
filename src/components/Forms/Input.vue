<template>
    <div :class="[! disabled ? 'text-trueGray-700' : 'text-trueGray-400', 'relative rounded']">
        <div
            v-if="icon"
            class="absolute inset-y-0 left-0 pl-2.5 flex items-center"
        >
            <component
                :is="icon"
                class="fill-current"
                size="20"
                weight="regular"
            />
        </div>

        <input
            :id="id"
            :type="type"
            :class="[inputClass, 'block w-full rounded border-none ring-2 ring-trueGray-200 py-2.5 pr-2.5 leading-5']"
            :disabled="disabled"
            :value="modelValue"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: "Input",

    emits: ['update:modelValue'],

    props: {
        id: {
            type: String,
            default: () => null
        },
        icon: {
            type: String,
            default: () => null
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
        type: {
            type: String,
            default: () => 'text'
        },
        placeholder: {
            type: String,
            default: () => null
        },
        modelValue: {
            required: true
        }
    },

    computed: {
        inputClass(): string  {
            const classes =  [
                ! this.disabled ? 'bg-white' : 'bg-trueGray-200',
                this.icon ? 'pl-10' : 'pl-2.5'
            ]

            return classes.join(' ')
        }
    }
})
</script>
