import ColumnInterface from "./Column";

export default interface DeskInerface {
  id: string;
  title: string;
  columns: ColumnInterface[];
}
