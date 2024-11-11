import { collection, getDocs, getFirestore, query, where, doc, getDoc} from "firebase/firestore";
import { app} from './config'

const db = getFirestore(app);

export const getItems = async () =>{
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = [];
    
    querySnapshot.forEach((doc) => {
    items.push(doc.data());
});
return items
}

export const getCategoryItems = async (id) =>{
const q = query(collection(db, "items"), where("category", "==", id));
const categoryItems = []

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  categoryItems.push(doc.data());
});
return categoryItems
}

export const getDetail = async (id) =>{

const docRef = doc(db, "items", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data()
} else {
  console.log("No such document!");
}
}