import { default as NidSelect } from "../components/Forms/Select"

const options = [
    {key: 'one', value: 'One value', disabled: false},
    {key: 'two', value: 'Two value', disabled: true},
    {key: 'three', value: 'Three value', disabled: false}
]

export default {
    title: 'Select',
    component: NidSelect,
    argTypes: {
        modelValue: {
            options: options.map((el) => el.key),
            control: { type: 'select' }
        },
        optionKey: {
            table: { disable: true }
        },
        optionValue: {
            table: { disable: true }
        },
        disabledKey: {
            table: { disable: true }
        },
        options: {
            table: { disable: true }
        }
    }
}

const Template = (args) => ({
    components: { NidSelect },

    setup()
    {
        return { args }
    },

    template: '<NidSelect v-bind="args" />'
})

export const DefaultSelect = Template.bind({})
DefaultSelect.args = {
    modelValue: 'one',
    options: options
}

export const WithDisabledOptions = Template.bind({})
WithDisabledOptions.args = {
    ...DefaultSelect.args,
    disabledKey: 'disabled'
}

