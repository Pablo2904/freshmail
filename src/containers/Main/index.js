import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getAllComments } from '../../redux/comments/operations'

const StyledDiv= styled.div`
  background: ${({ theme }) => theme.colors.black };
  margin: 50px auto;
  padding: 30px;
  width: 90%;
  min-height: 100vh;
  `

const Main = ({ children, getAllComments }) => {
  useEffect(() => {
    getAllComments()
  }, [getAllComments])

  return (
    <main>
      <StyledDiv>
       { children }
      </StyledDiv>
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  getAllComments: () => dispatch(getAllComments())
})

export default connect(null, mapDispatchToProps)(Main)
