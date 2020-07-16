import AltSorteador from '@/components/AltSorteador'
import { mount } from '@vue/test-utils'
import '@testing-library/jest-dom'

describe('AltSorteador', () => {
  test('por padrão, o sorteado é 0', () => {
    const wrapper = mount(AltSorteador)
    expect(wrapper.html()).toContain('<span>0</span>')
  })
  test('ao btn clicado, o sorteado deve ser entre 1 e 10', async () => {
    const wrapper = mount(AltSorteador)
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const sorteado = parseInt(wrapper.find('span').element.textContent)
    expect(sorteado).toBeGreaterThanOrEqual(1)
    expect(sorteado).toBeLessThanOrEqual(10)
  })
  test('ao btn clicado, o sorteado deve ser entre 200 e 300', async () => {
    const wrapper = mount(AltSorteador, {
      propsData: {
        min: 200,
        max: 300
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const sorteado = parseInt(wrapper.find('span').element.textContent)
    expect(sorteado).toBeGreaterThanOrEqual(200)
    expect(sorteado).toBeLessThanOrEqual(300)
  })
})
