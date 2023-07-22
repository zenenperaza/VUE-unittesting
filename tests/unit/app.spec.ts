import { App } from "@/App.vue"
import { mount } from "@vue/test-utils";

describe('App.vue', () => {
  it('the component render the initial state', () => {
    const wrapper = mount(App)
    
    if(expect(wrapper.find('h3').exists())){
      expect(wrapper.text()).toBe('0')
    }

    expect(wrapper.find('button').exists())

  })
  it('THE INCREMENT BUTTON ADD ONES TO COUNTER', () => {

  }) 
})
