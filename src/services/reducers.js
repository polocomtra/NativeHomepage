import React, { createContext, useReducer } from 'react';

export const UPDATE_HOME_ARTICLES = 'UPDATE_HOME_ARTICLES';
export const UPDATE_HOME_CATEGORIES = 'UPDATE_HOME_CATEGORIES';
export const UPDATE_HOME_BANNER = 'UPDATE_HOME_BANNER';
export const UPDATE_HOME_TERMS = 'UPDATE_HOME_TERMS';
export const UPDATE_HOME_COLLECTIONS = 'UPDATE_HOME_COLLECTIONS';
export const UPDATE_HOME_HOT_COLLECTIONS = 'UPDATE_HOME_HOT_COLLECTIONS';


const initialState={
    articles:[],
    banner:null,
    collections:[],
    hotCollections:[],
    homeCategories:[],
    terms:[]
}

const store=createContext(initialState);
const {Provider}=store;

const reducer=(state,action)=>{
    const {type,data}=action;
    switch(type){
        case UPDATE_HOME_ARTICLES:
            return {...state,articles:data};
        case UPDATE_HOME_CATEGORIES:
            return {...state,homeCategories:data}
        case UPDATE_HOME_BANNER:
            return {...state,banner:data}
        case UPDATE_HOME_TERMS:
            return {...state,terms:data}
        case UPDATE_HOME_COLLECTIONS:
            return {...state,collections:data}
        case UPDATE_HOME_HOT_COLLECTIONS:
            return {...state,hotCollections:data}
        default:
            return state
    }
}

const HomeProvider=({children})=>{
    const [state,dispatch] = useReducer(reducer, initialState);
    return <Provider value={{...state,dispatch}}>{children}</Provider>
}

export {store,HomeProvider}