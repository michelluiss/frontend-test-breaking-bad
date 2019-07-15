import Vue from 'vue'
import Characters from '@/components/characters'

describe('Test page character', () => {
  test('Test value variable search', () => {
    const Constructor = Vue.extend(Characters)
    const vm = new Constructor().$mount()
    expect.assertions(1)
    expect(vm.$data.search).toEqual('')
  })
})