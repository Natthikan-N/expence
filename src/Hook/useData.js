import React from "react";
import { AppDB } from "./../Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export default function useData() {
  ///Add Data

  const addData = async (record) => {
    try {
      const docRef = await addDoc(collection(AppDB, "expense"), {
        ...record,
        createdAt: new Date(),
      });
      console.log("data is added");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //Query Data

  //Edit Data

  return { addData };
}
