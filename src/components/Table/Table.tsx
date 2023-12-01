import { FC } from 'react'
import {
  TBODY,
  TDX,
  THX,
  TRX,
  TableContainer,
  TABLEX,
  THEADX,
  LABEL,
  ACTIONS,
  DeleteBtn,
  EditBtn,
} from './Table.styled'
import { Row, TableProps } from './interfaces'

const Table: FC<TableProps> = ({ dataTestId = 'table', rows, deleteRow, editRow }) => {
  return (
    <TableContainer data-testid={dataTestId}>
      <TABLEX>
        <THEADX>
          <TRX>
            <THX>Usuario</THX>
            <THX>Fecha de Nacimiento</THX>
            <THX>Sexo</THX>
            <THX>Actions</THX>
          </TRX>
        </THEADX>
        <TBODY>
          {rows?.map((row: Row, idx: number) => {
            const genderText = row.gender.charAt(0).toUpperCase() + row.gender.slice(1)

            return (
              <TRX key={idx}>
                <TDX>{row.user}</TDX>
                <TDX>{row.birthday}</TDX>
                <TDX>
                  <LABEL type={row.gender}>{genderText}</LABEL>
                </TDX>
                <TDX>
                  <ACTIONS>
                    <DeleteBtn onClick={() => deleteRow && deleteRow(idx, row.id)} />
                    <EditBtn onClick={() => editRow && editRow(idx, row.id)} />
                  </ACTIONS>
                </TDX>
              </TRX>
            )
          })}
        </TBODY>
      </TABLEX>
    </TableContainer>
  )
}

export default Table
