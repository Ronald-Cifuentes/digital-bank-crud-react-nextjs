export interface Row {
  id?: number
  user: string
  birthday: string
  gender: string
}

export type TableProps = Partial<{
  dataTestId: string
  rows: Row[]
  deleteRow: (local_id?: number, remote_id?: number) => void
  editRow: (local_id?: number, remote_id?: number) => void
}>
