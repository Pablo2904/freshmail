import React from 'react'
import styled, { css } from 'styled-components'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'

import { Button } from '../../components/Button'
import commentsActions from '../../redux/comments/actions'

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.purple };
  background: ${({ theme }) => theme.colors.purple };
  color: ${({ theme }) => theme.colors.creamy };
  font-weight: bold;
  padding: 8px;
  outline: none;
  margin: 10px 0;
  min-width: 250px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.creamy };
  }

  ${props => props.error && css`
    border-color: ${({ theme }) => theme.colors.red };
  `};

  ${props => props.last && css`
    margin-bottom: 50px;
  `};
`
const StyledForm = styled.form`
  ${({ theme }) => theme.flexColumn };
  align-items: center;
`

const Form = ({ comments, addComment }) => {
  const { register, errors, reset, handleSubmit } = useForm();
  const { email, body, name } = errors

  const onSubmit = data => {
    const { name, email, body } = data
    const commentsCopy = [...comments]
    const nextId = (commentsCopy && commentsCopy.sort((a,b) => b.id - a.id)[0].id) + 1 || 0
    addComment(
      {
        name,
        email,
        body,
        id: nextId
      }
    )
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" placeholder='Wpisz imię' ref={register({required: true, minLength: 3, pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ]*$/i })} error={name} />
      <Input name="email" placeholder='Wpisz email' ref={register({required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]+$/ })} error={email} />
      <Input name='body' placeholder='Wpisz tekst' ref={register({required: true, minLength: 2, pattern: /^[A-ZĄĆĘŁŃÓŚŹŻ0-9 ]*$/i })} error={body} last/>
      <Button type='submit'>
        Dodaj komentarz
      </Button>
    </StyledForm>
  )
}

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(commentsActions.addComment(comment))
})

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)