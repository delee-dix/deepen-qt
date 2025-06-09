import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db } from "~/util/firebase";

export async function createChatRoom(name: string, participants: string[]) {
  const roomRef = await addDoc(collection(db, "chatRooms"), {
    name,
    participants,
    createdAt: serverTimestamp(),
  });

  return roomRef.id;
}
