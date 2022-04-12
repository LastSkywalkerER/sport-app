import CardInterface from "./Card";

export default interface ColumnInterface {
  id: string;
  title: string;
  cards: CardInterface[];
  order: number;
}
