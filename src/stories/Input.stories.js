import { default as NidInput } from "../components/Forms/Input.vue"

export default {
    title: 'Input',
    component: NidInput,
    argTypes: {
        disabled: {
            control: 'boolean'
        },
        id: {
            table: { disable: true }
        },
        icon: {
            table: { disable: true }
        },
        type: {
            table: { disable: true }
        }
    }
}

const Template = (args) => ({
    components: { NidInput },

    setup() {
        return { args }
    },

    template: '<NidInput v-bind="args" />'
})

export const DefaultInput = Template.bind({})
DefaultInput.args = {
    modelValue: 'Default input',
    placeholder: 'Placeholder'
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {...DefaultInput.args, disabled: true }
