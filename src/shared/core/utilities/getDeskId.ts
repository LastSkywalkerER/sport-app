import store from "../store/store";

export default function getDeskId() {
  return store.getState().desk.id;
}
