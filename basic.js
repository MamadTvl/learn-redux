// with redux :
// 1 : store has all of app states
// 2 : getState() 
// 3 : use dispatch(action) for updating states
// 4 : register listener => subscribe(listener)
// 5 : with return you can Unregister listener 

const redux = require('redux')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const BUY_MOB = 'BUY_MOB';
const BUY_TAB = 'BUY_TAB';

//action
function buyMob() {
    return {
        type: BUY_MOB,
        info: 'first Action'
    }
}

function buyTab() {
    return {
        type: BUY_TAB,
        info: 'second Action'
    }
}
//state
// const initialState = {
//     numberOfMobs: 100,
//     numberOfTabs: 50,
// }
const initalTabState = {
    numberOfTabs: 50,
}

const initalMobState = {
    numberOfMobs: 100,
}


//reducer

const mobReducer = (state = initalMobState, action) => {
    switch (action.type) {
        case BUY_MOB:
            return {
                ...state,
                numberOfMobs: state.numberOfMobs - 1,
            }
        default:
            return state
    }
}

const tabReducer = (state = initalTabState, action) => {
    switch (action.type) {
        case BUY_TAB:
            return {
                ...state,
                numberOfTabs: state.numberOfTabs - 1,
            }
        default:
            return state
    }

}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_MOB:
//             return {
//                 ...state,
//                 numberOfMobs: state.numberOfMobs - 1,
//             }
//         case BUY_TAB:
//             return {
//                 ...state,
//                 numberOfTabs: state.numberOfTabs - 1,
//             }
//         default:
//             return state
//     }
// }

const rootReducer = combineReducers({
    mob: mobReducer,
    tab: tabReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger)) // you can have just one store in application
console.log('initial state is : ', store.getState());

// register listener 
const unSubscribe = store.subscribe(() => {
    // when states updated you can see this
    console.log('Updated state is : ', store.getState());
})

store.dispatch(buyMob())
store.dispatch(buyTab())
store.dispatch(buyMob())
store.dispatch(buyTab())
store.dispatch(buyMob())
store.dispatch(buyMob())

unSubscribe()