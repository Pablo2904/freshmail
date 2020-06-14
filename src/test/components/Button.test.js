import React from 'react'
import { shallow, mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

import { Button } from '../../components/Button'
import { theme } from '../../layout/theme'

describe('Button', () => {
  let wrapper

  it('fires function on click', () => {
    const props = {onClickHandler: jest.fn()}

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    )
    wrapper.find('button').simulate('click')

    expect(props.onClickHandler).toHaveBeenCalledTimes(1)
  })

  it('renders basic colors', () => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    )

    expect(wrapper).toHaveStyleRule('background', theme.colors.orange)
  })

  it('renders passed children', () => {
    wrapper = shallow(
      <Button>
        <span>Should Be Rendered</span>
      </Button>
    )
    expect(wrapper.text()).toContain('Should Be Rendered')
  })

  it('renders passed type', () => {
    wrapper = shallow(
      <Button type='submit'/>
    )

    expect(wrapper.prop('type')).toBe('submit')
  })

  describe('when its disabled', () => {
    it('render valid styles', () => {
      wrapper = mount(
        <ThemeProvider theme={theme}>
          <Button disabled/>
        </ThemeProvider>
        )
  
      expect(wrapper).toHaveStyleRule('pointer-events', 'none')
      expect(wrapper).toHaveStyleRule('background', theme.colors.grey)
    })
  
    it('not fires function', () => {
      const props = {
        onClickHandler: jest.fn(),
        disabled: true
      }
  
      wrapper = mount(
        <ThemeProvider theme={theme}>
          <Button {...props} />
        </ThemeProvider>
      )
      wrapper.find('button').simulate('click')
  
      expect(props.onClickHandler).toHaveBeenCalledTimes(0)
    })
  })
})
