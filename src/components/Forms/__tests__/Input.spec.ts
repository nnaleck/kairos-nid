import { shallowMount } from "@vue/test-utils"
import Input from "@/components/Forms/Input.vue"

describe('Input test', () => {
    let wrapper: any

    beforeEach(() => {
        wrapper = shallowMount(Input, {
            props: {
                modelValue: 'Some value',
                id: 'input-id'
            }
        })
    })

    afterEach(() => wrapper.unmount())

    it('renders input element', () => {
        expect(wrapper.find('#input-id')).not.toBeNull()
    })

    it('reacts to value change', async () => {
        await wrapper.find('#input-id').setValue('Changed value!')

        expect(
            <HTMLInputElement>(wrapper.find('#input-id').element).value
        ).toEqual('Changed value!')

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()

        expect(
            wrapper.emitted()['update:modelValue'][0]
        ).toEqual(['Changed value!'])
    })

    it('can be disabled', async () => {
        await wrapper.setProps({
            disabled: true
        })

        expect(
            wrapper.find('[data-test="input-wrapper"]').classes()
        ).toContain('text-trueGray-400')

        expect(wrapper.find('#input-id').classes()).toContain('bg-trueGray-200')
    })
})