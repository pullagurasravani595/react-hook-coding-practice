// Write your code here

import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  Heading,
  Description,
  InputElement,
  ErrorElement,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setInput] = useState('')
  const [errorMsgShow, setErrorMsgShow] = useState(true)

  const changeInput = event => {
    setInput(event.target.value)
  }
  const keyBoardEvent = event => {
    if (event.key === 'Enter') {
      if (userInput.length < 8) {
        setErrorMsgShow(true)
      } else if (userInput.length >= 8) {
        setErrorMsgShow(false)
      }
    }
  }

  console.log(userInput)
  return (
    <BgContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputElement
          type="password"
          onChange={changeInput}
          onKeyDown={keyBoardEvent}
        />
        {errorMsgShow && (
          <ErrorElement>
            Your password must be at least 8 characters
          </ErrorElement>
        )}
      </CardContainer>
    </BgContainer>
  )
}

export default PasswordValidator
