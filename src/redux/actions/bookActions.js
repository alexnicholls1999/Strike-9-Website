import { db } from "../../firebase/utils";

export const bookEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection("booking")
            .add()
    }
}