import store from "../store/store";

export default function getUID(): string {
  return store.getState().authUID.value;
}
