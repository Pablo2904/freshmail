import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

import CommentItem from '../../components/CommentItem'
import { theme } from '../../layout/theme'

describe('CommentItem', () => {
  let wrapper

  it('renders email and name', () => {
    const props = {
      comment: {
        email: 'mail@mail.com',
        name: 'My name'
      }
    }

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <CommentItem {...props} />
      </ThemeProvider>
    )

    expect(wrapper.text()).toContain('E-mail: mail@mail.com')
    expect(wrapper.text()).toContain('Name: My name')
  })

  it('trim body to max 20 characters', () => {
    const props = {
      comment: {
        body: 'Body longer than 20 characters',
        email: 'mail@mail.com',
        name: 'My name',
        id: 1
      }
    }

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <CommentItem {...props} />
      </ThemeProvider>
    )

    expect(wrapper.text()).toContain('Body longer than 20 ...')
  })

  describe('when item is selected and selectHandler is present', () => {
    it('sets button to disabled', () => {
      const props = {
        comment: {
          body: 'Body longer than 20 characters',
          email: 'mail@mail.com',
          name: 'My name',
          selected: true
        },
        selectHandler: true
      }
  
      wrapper = mount(
        <ThemeProvider theme={theme}>
          <CommentItem {...props} />
        </ThemeProvider>
      )
  
      expect(wrapper.find('button').prop('disabled')).toBe(true)
    })
  })
})
