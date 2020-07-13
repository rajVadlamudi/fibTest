import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Language from '@/components/Language.vue'

describe('HelloWorld.vue', () => {
  it('HelloWorld renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


describe('Language.vue', () => {
  it('Language renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Language, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
