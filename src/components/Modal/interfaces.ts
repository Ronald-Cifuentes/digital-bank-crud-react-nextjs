import { Row } from '../Table/interfaces'

export type ModalProps = Partial<{
  dataTestId: string
  closeModal: () => void
  onSubmit: (newRow: Row) => void
  defaultValue: false | Row
  itemId?: number | null
  type: string
}>
