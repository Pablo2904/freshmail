import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import store from '../../redux/store'

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CommentItem {...props} />
        </ThemeProvider>
      </Provider>
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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CommentItem {...props} />
        </ThemeProvider>
      </Provider>
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
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CommentItem {...props} />
          </ThemeProvider>
        </Provider>
      )
  
      expect(wrapper.find('button').prop('disabled')).toBe(true)
    })
  })


  // it('renders basic colors', () => {
  //   wrapper = mount(
  //     <ThemeProvider theme={theme}>
  //       <Button />
  //     </ThemeProvider>
  //   )

  //   expect(wrapper).toHaveStyleRule('background', theme.colors.orange)
  // })

  // it('renders passed children', () => {
  //   wrapper = shallow(
  //     <Button>
  //       <span>Should Be Rendered</span>
  //     </Button>
  //   )
  //   expect(wrapper.text()).toContain('Should Be Rendered')
  // })

  // it('renders passed type', () => {
  //   wrapper = shallow(
  //     <Button type='submit'/>
  //   )

  //   expect(wrapper.prop('type')).toBe('submit')
  // })

  // describe('when its disabled', () => {
  //   it('render valid styles', () => {
  //     wrapper = mount(
  //       <ThemeProvider theme={theme}>
  //         <Button disabled/>
  //       </ThemeProvider>
  //       )
  
  //     expect(wrapper).toHaveStyleRule('pointer-events', 'none')
  //     expect(wrapper).toHaveStyleRule('background', theme.colors.grey)
  //   })
  
  //   it('not fires function', () => {
  //     const props = {
  //       onClickHandler: jest.fn(),
  //       disabled: true
  //     }
  
  //     wrapper = mount(
  //       <ThemeProvider theme={theme}>
  //         <Button {...props} />
  //       </ThemeProvider>
  //     )
  //     wrapper.find('button').simulate('click')
  
  //     expect(props.onClickHandler).toHaveBeenCalledTimes(0)
  //   })
  // })
})
