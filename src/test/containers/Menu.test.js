import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { Menu } from '../../containers/Menu'
import { theme } from '../../layout/theme'

describe('Menu', () => {
  let wrapper

  it('renders anchors based on configuration', () => {
    wrapper = mount(
      <Router>
        <ThemeProvider theme={theme}>
          <Menu />
        </ThemeProvider>
      </Router>
    )

    expect(wrapper.find('a')).toHaveLength(3)
    expect(wrapper.find('a').first().prop('href')).toBe('/comments')
    expect(wrapper.find('a').first().text()).toBe('Komentarze')
    expect(wrapper.find('a').at(1).prop('href')).toBe('/comments/selected')
    expect(wrapper.find('a').at(1).text()).toBe('Wybrane komentarze')
    expect(wrapper.find('a').last().prop('href')).toBe('/comments/new')
    expect(wrapper.find('a').last().text()).toBe('Dodaj komentarz')
  })

  it('renders basic styles', () => {
    wrapper = mount(
      <Router>
        <ThemeProvider theme={theme}>
          <Menu />
        </ThemeProvider>
      </Router>
    )

    expect(wrapper).toHaveStyleRule('background', theme.colors.black)
    expect(wrapper.find('ul')).toHaveStyleRule('justify-content', 'flex-start')
    expect(wrapper.find('ul')).toHaveStyleRule('display', 'flex')
  })

  it('renders semantic tags', () => {
    wrapper = mount(
      <Router>
        <ThemeProvider theme={theme}>
          <Menu />
        </ThemeProvider>
      </Router>
    )

    expect(wrapper.find('nav')).toBeTruthy()
    expect(wrapper.find('header')).toBeTruthy()
  })
})
