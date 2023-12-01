import { Row } from "../components/Table/interfaces";

export const serviceDelete = (url: string, remote_id: number | undefined) => {
  const options = { method: "DELETE" };

  fetch(`${url}/users/${remote_id}`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export const serviceGet = (url: string, setData: (data: Row[]) => void) => {
  fetch(`${url}/users`)
    .then((res) => res.json())
    .then((json) =>
      setData(json.map((x: { _id: string }) => ({ ...x, id: x._id })))
    );
};

export const serviceAddEdit = (
  url: string,
  type: string | undefined,
  formState: Row,
  itemId: number | null | undefined
) => {
  const options = {
    method: type === "add" ? "POST" : "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formState),
  };

  fetch(`${url}/users/${type === "edit" ? itemId : ""}`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
