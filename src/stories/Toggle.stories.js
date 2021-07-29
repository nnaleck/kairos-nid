import { default as NidToggle } from "../components/Forms/Toggle"

export default {
    title: 'Forms/Toggle',
    component: NidToggle,
    argTypes: {
        selected: {
            type: 'boolean',
            control: 'boolean'
        },
    }
}

const Template = (args) => ({
    components: { NidToggle },

    setup()
    {
        return { args }
    },

    template: '<NidToggle v-bind="args" />'
})

export const DefaultToggle = Template.bind({})
DefaultToggle.args = {
    selected: false,
}

