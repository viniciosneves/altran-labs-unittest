import AltHeader from '@/components/AltHeader'
import { mount } from '@vue/test-utils'
import '@testing-library/jest-dom'

let wrapper

beforeEach(() => {
  wrapper = mount(AltHeader)
})

describe('AltHeader', () => {
  test('se o usuário não está logado, não devemos exibir o btn logout', () => {
    expect(wrapper.find('button').element).not.toBeVisible()
  })
  test('se o usuário está logado, devemos exibir o btn logout', async () => {
    wrapper.setData({ logged: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').element).toBeVisible()
  })
})
