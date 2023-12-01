import { ChangeEvent, FC, MouseEvent, useState } from "react";
import {
  BTNSutmit,
  FormGroup,
  Input,
  ModalContainer,
  ModalX,
  Select,
} from "./Modal.styled";
import { ModalProps } from "./interfaces";
import { Row } from "../Table/interfaces";
import { serviceAddEdit } from "../../services";

const Modal: FC<ModalProps> = ({
  dataTestId = "modal",
  closeModal,
  onSubmit,
  defaultValue,
  itemId,
  type,
}) => {
  const [formState, setFormState] = useState<Row>(
    defaultValue || {
      user: "",
      birthday: "",
      gender: "not-defined",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.user && formState.birthday && formState.gender) {
      setErrors("");
      return true;
    } else {
      const errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    serviceAddEdit(
      String(process.env.NEXT_PUBLIC_URL_BASE),
      type,
      formState,
      itemId
    );

    onSubmit && onSubmit(formState);

    closeModal && closeModal();
  };

  return (
    <ModalContainer
      className="modal-container"
      data-testid={dataTestId}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        const target = e.target;
        if (target instanceof HTMLElement) {
          if (target.className?.includes("modal-container"))
            closeModal && closeModal();
        }
      }}
    >
      <ModalX>
        <form>
          <FormGroup>
            <label htmlFor="user">Usuario</label>
            <Input name="user" onChange={handleChange} value={formState.user} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="birthday">Fecha de Nacimiento</label>
            <Input
              name="birthday"
              onChange={handleChange}
              type="date"
              value={formState.birthday}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="gender">Sexo</label>
            <Select
              name="gender"
              onChange={handleChange}
              value={formState.gender}
            >
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="not-defined">No definido</option>
            </Select>
          </FormGroup>
          {errors && (
            <div className="error">{`Por favor incluya: ${errors}`}</div>
          )}
          <BTNSutmit type="submit" onClick={handleSubmit}>
            Submit
          </BTNSutmit>
        </form>
      </ModalX>
    </ModalContainer>
  );
};

export default Modal;
