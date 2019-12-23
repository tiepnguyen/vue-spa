import { shallowMount } from '@vue/test-utils'
import { welcome } from '@/services/greeting'
import HelloWorld from '@/components/HelloWorld.vue'

describe('greeting service', () => {
  it('should say welcome with passed string', () => {
    const name = 'foo bar'
    expect(welcome(name)).toBe(`Welcome to ${name}`)
  })
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
