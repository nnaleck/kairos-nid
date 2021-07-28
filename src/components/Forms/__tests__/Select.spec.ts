import { shallowMount } from "@vue/test-utils"
import Select from "@/components/Forms/Select.vue"

describe('Select test', () => {
    let wrapper: any

    beforeEach(() => {
        wrapper = shallowMount(Select, {
            props: {
                modelValue: null,
                options: [
                    {key: 'one', value: 'One'},
                    {key: 'two', value: 'Two'},
                    {key: 'three', value: 'Three'}
                ]
            }
        })
    })

    afterEach(() => {
        wrapper.unmount()
    })

    it('renders options', () => {
        expect(
            wrapper.find('select').findAll('option').length
        ).toBe(wrapper.vm.options.length)
    })

    it('reacts to a value change', async () => {
        await wrapper.find('select').setValue('two')

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(
            wrapper.emitted()['update:modelValue'][0]
        ).toEqual(['two'])
    })

    it('can disable options based on a custom key', async () => {
        await wrapper.setProps({
            options: [
                {key: 'one', value: 'One', isDisabled: false},
                {key: 'two', value: 'Two', isDisabled: false},
                {key: 'three', value: 'Three', isDisabled: true}
            ],
            disabledKey: 'isDisabled'
        })


        const disabledOption = wrapper.find('select').find('option:disabled')
        expect(disabledOption.text()).toEqual('Three')
    })

    it('can use custom key and value', async () => {
        await wrapper.setProps({
            options: [
                {customKey: 'one', customValue: 'One'},
                {customKey: 'two', customValue: 'Two'},
                {customKey: 'three', customValue: 'Three'},
            ],
            optionKey: 'customKey',
            optionValue: 'customValue'
        })

        const options = wrapper.find('select').findAll('option')

        expect(options.length).toBe(wrapper.vm.options.length)
        expect(options[0].text()).toEqual('One')
    })
})