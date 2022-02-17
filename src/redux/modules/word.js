import {db} from "../../firebase";
import {
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc
  } from "firebase/firestore";


  const initialState = {
    is_loaded: false,
    list:  [],
  };


// 액션
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const LOADED = "word/LOADED";

const DELETE = "word/DELETE";
const REDO = "wore/REDO";

// 액션 크리에이터
export function loadWord(words) {
    return {type: LOAD, words: words};
}

export function createWord(words){
    return {type: CREATE, words: words};
    }

export function isLoaded(loaded){
    return {type: LOADED, loaded};
}

export function deleteWord(word){
    return {type: DELETE, word};
}

export function reDoWord(word){
    return {type: REDO, word}
}


// 미들웨어 = 리덕스 청크
export const loadWordFB = () => {

    return async function (dispatch) {
        const words_data = await getDocs(collection(db, "word"));
        let words_list = [];

        words_data.forEach((w) => {
            words_list.push({ id: w.id, ...w.data() });
        });
        
        dispatch(loadWord(words_list));
    }
}


export const addWordFB = (word) => {

    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db, "word"), word);
        const word_data = { id: docRef.id, ...word };
        dispatch(createWord(word_data));
        
    }
}

export const deleteWordFB = (word) => {
    return async function (dispatch) {
        const docRef = doc(db, "word", word);
        await deleteDoc(docRef);
        dispatch(loadWordFB());

    };
};

export const reDoWordFB = (word, id) => {
    return async function (dispatch) {
        const docRef = doc(db, "word", id);
        await updateDoc(docRef, word);
        dispatch(loadWordFB());
    };
};

// 리듀서
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

      case "word/LOAD": {
          return {list: action.words, is_loaded: true };
      }
      case "word/CREATE": {
          const new_word_list = [...state.list, action.words];
          return {...state, list: new_word_list, is_loaded: true}
      }

      case "word/LOADED" : {
          return { ...state, is_loaded: action.loaded }
      }

      case "word/DELETE" : {
        return { ...state, is_loaded: true }
    }
      case "word/REDO" : {
        return { ...state, is_loaded: true }
        }

      default:
        return state;
    }
    }