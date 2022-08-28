
import {createStore} from 'redux'

const authState = {
    data: {
        name: 'Strike Freedom',
        avatar: "https://4.bp.blogspot.com/-Z0ZIYp0Uqq8/VEWHe98wmmI/AAAAAAAHhMk/T4KCWfkjIQQ/s1600/Untitled-2.jpg"
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
