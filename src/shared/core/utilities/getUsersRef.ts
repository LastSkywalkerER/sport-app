import { collection, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default function getUsersRef() {
  return collection(db, "users");
}
