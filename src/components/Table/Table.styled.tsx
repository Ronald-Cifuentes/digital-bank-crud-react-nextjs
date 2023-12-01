import styled, { css } from 'styled-components'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export const TableContainer = styled.div`
  width: 100%;
`
export const TABLEX = styled.table`
  display: grid;
  flex-direction: column;

  margin: auto;
  width: 100em;
  max-width: 80%;

  border-collapse: collapse;
  box-shadow: 0px 10px 10px #ccc;
  border-radius: 10px;

  overflow: hidden;
  overflow-x: auto;
  table-layout: auto;
  white-space: nowrap;
`

export const TRX = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`

export const THTDX = css`
  padding: 0.8rem;
`

export const THX = styled.th`
  width: 100%;
  ${THTDX}
`

export const TDX = styled.td`
  border-top: 0.5px solid #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: flex;
  justify-content: center;
  ${THTDX}
`

export const THEADX = styled.thead`
  background-color: #ccc;
  color: #222;
`

export const TBODY = styled.tbody`
  ${TRX}:hover {
    background-color: #eee;
  }
`

export const LABEL = styled.label<{ type: string }>`
  border-radius: 3px;
  padding: 0.3rem;
  color: white;
  ${({ type }) => {
    switch (type) {
      case 'male':
        return css`
          background-color: #1d4ed8;
        `
      case 'female':
        return css`
          background-color: #d732bc;
        `
      case 'not-defined':
        return css`
          background-color: black;
        `
    }
  }}
`

export const ACTIONS = styled.span`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const SVG = css`
  cursor: pointer;
`
export const DeleteBtn = styled(BsFillTrashFill)`
  color: #e10d05;
  ${SVG}
`
export const EditBtn = styled(BsFillPencilFill)`
  ${SVG}
`
