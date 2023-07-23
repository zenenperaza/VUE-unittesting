import PropExample from '@/components/PropExample.vue'
import { mount } from "@vue/test-utils";

describe('PropExample.vue', ()=>{
    it('the component receive and show title and content prop', () => {
        const wrapper = mount(PropExample, {
            props: {
                title: "Hello world",
                content: "Lorem Ipsum"
            }
        })
        if(expect(wrapper.find('h3').exists())){
            expect(wrapper.find('h3').text()).toBe("Hello world")
        }
        if(expect(wrapper.find('p').exists())){
            expect(wrapper.find('p').text()).toBe("Lorem Ipsum")
        }
    })
})