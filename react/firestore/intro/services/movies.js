import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const getAllMovies = async () => {
  const querySnapshot = await getDocs(collection(db, "movies"));

  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });

  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  // console.log(dataToReturn);

  return dataToReturn;
};

export const getMovieById = async (id) => {
  const docRef = doc(db, "movies", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Movie not found.");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

export const deleteMovieById = async (id) => {
  const docRef = doc(db, "movies", id);
  try {
    await deleteDoc(docRef);
  } catch (e) {
    console.log(e.message);
    return e.message;
  }

  return;
};

export const addMovie = async (movie) => {
  const docRef = await addDoc(collection(db, "movies"), {
    title: movie.title,
    director: movie.director,
    releaseYear: parseInt(movie.releaseYear),
    image: movie.image,
    timesWatched: parseInt(movie.timesWatched),
  });

  console.log("Document written with ID: ", docRef.id);
};
