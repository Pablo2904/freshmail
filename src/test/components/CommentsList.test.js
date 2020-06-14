import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import commentsActions from '../../redux/comments/actions'
import CommentsList from '../../components/CommentsList'
import { theme } from '../../layout/theme'
 

describe('CommentsList', () => {
  let wrapper
  let store
  let storeEmpty
  
  beforeEach(() => {
    const mockStore = configureStore([]);

    store = mockStore({
      comments: [{ name: 'pawel', body: 'body', email: 'email@emai.pl', id: 1}]
    })

    storeEmpty = mockStore({
      comments: []
    })
  })

  it('renders elements basing on store data', () => {
    wrapper = mount(
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <CommentsList regularList />
        </ThemeProvider>
      </Provider>
    )

    expect(wrapper.text()).toContain('pawel')
    expect(wrapper.text()).toContain('body')
    expect(wrapper.text()).toContain('email@emai.pl')
  })

  it('renders noDataContent information', () => {
    wrapper = mount(
      <Provider store={storeEmpty} >
        <ThemeProvider theme={theme}>
          <CommentsList regularList noDataContent='No data'/>
        </ThemeProvider>
      </Provider>
    )

    expect(wrapper.text()).toContain('No data')
  })

  it('dispatch addComments action then click on button', () => {
    store.dispatch = jest.fn()

    wrapper = mount(
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <CommentsList regularList/>
        </ThemeProvider>
      </Provider>
    )
    wrapper.find('button').simulate('click')

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      commentsActions.addComments([{"body": "body", "email": "email@emai.pl", "id": 1, "name": "pawel", "selected": true}])
    )
  })
})
