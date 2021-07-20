<template>
    <div class="bg-gray-300 flex flex-col p-5 space-y-5">
        <Toggle v-model:selected="selected" />

        <Select
            id="format"
            v-model="selectedOption"
            :options="options"
        />

        <Input v-model="inputValue"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Toggle from "./components/Forms/Toggle.vue"
import Select from "@/components/Forms/Select.vue"
import Input from "@/components/Forms/Input.vue"

export default defineComponent({
    components: {
        Toggle,
        Select,
        Input
    },

    setup()
    {
        const options = [
            { key: 'first', value: 'First' },
            { key: 'second', value: 'Second' },
            { key: 'third', value: 'Third' },
        ]

        const selected = ref<boolean>(false)
        const selectedOption = ref<string>(options[0].key)
        const inputValue = ref<string>('')

        return {
            selected,
            selectedOption,
            options,
            inputValue
        }
    }
})
</script>
