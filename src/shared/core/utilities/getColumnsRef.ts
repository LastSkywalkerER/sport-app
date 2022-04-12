import { collection } from "firebase/firestore";
import getDeskId from "./getDeskId";
import getDesksRef from "./getDesksRef";

export default function getColumnsRef() {
  const desksRef = getDesksRef();
  const idDesk = getDeskId();

  return collection(desksRef, idDesk, "columns");
}
