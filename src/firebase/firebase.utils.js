import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC9xG-XVX_O5vYBsSZrprzXwLaxNAMvc0U",
  authDomain: "crown-clothing-7c3fa.firebaseapp.com",
  databaseURL: "https://crown-clothing-7c3fa.firebaseio.com",
  projectId: "crown-clothing-7c3fa",
  storageBucket: "crown-clothing-7c3fa.appspot.com",
  messagingSenderId: "998938599603",
  appId: "1:998938599603:web:90f74515a1eef7155150c6",
  measurementId: "G-HQXHDPETMC"
};

export const createUserProfileDocument = async (userAuth, extraData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      });
    } catch (err) {
      console.error('Error creating user: ', err.message)
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch(); 

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);

  })
  
  return await batch.commit()
}

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((a, b) => {
    a[b.title.toLowerCase()] = b;
    return a
  }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;