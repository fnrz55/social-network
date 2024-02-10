import {produce} from "immer"
import { getUserAuth } from './authReducer';

const SET_INITIALIZED="SET_INITIALIZED"

const initialState={
    initialized:null,
}

const appReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_INITIALIZED:            
            return produce(state,draft=>{
                draft.initialized=true;
            })

        default:
            return state
    }
}

export const initializedSuccess=()=>({type:SET_INITIALIZED })

export const initializeApp=()=> (dispatch)=>{
    let promise=dispatch(getUserAuth())
    promise.then(()=>{
        dispatch(initializedSuccess())
    })

}

export default appReducer