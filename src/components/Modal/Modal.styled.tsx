import styled, { css } from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalX = styled.div`
  border-radius: 5px;
  padding: 2rem;
  background-color: white;
  width: 25em;
`
export const BTNSutmit = styled.button`
  display: block;
  margin: auto;
  background: orange;
  border: 0;
  padding: 10px;
  border-radius: 15px;
  color: white;
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
export const ITS = css`
  border: 1px solid black;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-size: 1rem;
`

export const Input = styled.input`
  ${ITS}
`
export const Select = styled.select`
  ${ITS}
`

// export const ModalContainer = styled.div`
//   margin-bottom: 0.2rem;
// `
// export const ModalContainer = styled.div`
//   background-color: #f8d7da;
//   color: #df4759;
//   padding: 0.5rem;
//   border-radius: 0.3rem;
//   margin-bottom: 1rem;
// `
