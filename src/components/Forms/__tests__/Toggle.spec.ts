import { mount } from "@vue/test-utils";
import Toggle from "@/components/Forms/Toggle.vue"

describe('Toggle test', () => {
    it('has a state depending on selected property', async () => {
        const wrapper = mount(Toggle, {
            props: {
                selected: false
            }
        })

        expect(wrapper.find('[data-test="switch"]').classes()).toContain('bg-trueGray-700')
        expect(wrapper.find('[data-test="switch-enabled"]').classes()).toContain('opacity-0')
        expect(wrapper.find('[data-test="switch-disabled"]').classes()).toContain('opacity-100')

        await wrapper.setProps({ selected: true })

        expect(wrapper.find('[data-test="switch"]').classes()).toContain('bg-green-200')
        expect(wrapper.find('[data-test="switch-enabled"]').classes()).toContain('opacity-100')
        expect(wrapper.find('[data-test="switch-disabled"]').classes()).toContain('opacity-0')
    })
})