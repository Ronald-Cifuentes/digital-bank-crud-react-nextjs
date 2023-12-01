import { FC, useState } from "react";
import { BtnAdd, SectionHomeContainer } from "./SectionHome.styled";
import { SectionHomeProps } from "./interfaces";
import Table from "../Table";
import Modal from "../Modal";
import { Row } from "../Table/interfaces";
import { serviceDelete } from "../../services";

const SectionHome: FC<SectionHomeProps> = ({
  dataTestId = "section-home",
  initRows,
}) => {
  const [modalOpen, setModalOpen] = useState("");
  const [rows, setRows] = useState(initRows);
  const [rowToEdit, setRowToEdit] = useState<number | null>(null);
  const [rowToEditRemote, setRowToEditRemote] = useState<number | null>(null);

  const handleDeleteRow = (local_id?: number, remote_id?: number) => {
    console.log("handleDeleteRow", { local_id, remote_id });
    remote_id &&
      serviceDelete(String(process.env.NEXT_PUBLIC_URL_BASE), remote_id);
    local_id &&
      rows?.length &&
      setRows(rows.filter((_, idx: number) => idx !== local_id));
  };

  const handleEditRow = (local_id?: number, remote_id?: number) => {
    remote_id && setRowToEditRemote(remote_id);
    local_id && setRowToEdit(local_id);
    setModalOpen("edit");
  };

  const handleSubmit = (newRow: Row) => {
    rowToEdit === null
      ? rows?.length && setRows([...rows, newRow])
      : setRows(
          rows?.map((currRow: Row, idx: number) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };
  return (
    <SectionHomeContainer data-testid={dataTestId}>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <BtnAdd onClick={() => setModalOpen("add")}>Add</BtnAdd>
      {!!modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen("");
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows?.[rowToEdit]}
          itemId={rowToEditRemote}
          type={modalOpen}
        />
      )}
    </SectionHomeContainer>
  );
};

export default SectionHome;
