import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { commentsService } from '../../services/commentsService'
import {getAllComments} from '../../redux/comments/operations'


const StyledDiv= styled.div`
  background: ${({ theme }) => theme.colors.black };
  margin: 50px auto;
  width: 90%;
  padding: 20px;
`

const Main = ({ children, comments, getAllComments }) => {
  console.log(comments, getAllComments)
  useEffect(() => {
    getAllComments()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <StyledDiv>
       { children }
      </StyledDiv>
    </main>
  )
}
const mapStateToProps = (state) => ({
  comments: state.comments
})

const mapDispatchToProps = dispatch => ({
  getAllComments: () => dispatch(getAllComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
