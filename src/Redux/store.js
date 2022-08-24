// import { createStoreHook } from "react-redux";
import {createStore} from 'redux'

const authState = {
    data: {
        name: 'Dimas',
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    }
}
// const fakeFunction = () => {
//     return true
// }


// function memasukkan state ke dalam store  
const authReducer = (state = authState) => {
    return state
}
const store = createStore (authReducer)
// const store = createStore (fakeFunction, authState)

export default store
