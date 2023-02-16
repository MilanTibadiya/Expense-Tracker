const redux = require('redux')
                           //(state, action)
const counterReducer = (state = {counter : 0}, {type,payload}) => {
    if (type === 'increment') {
        return {
            counter: state.counter + payload
        };
    }
    
    
    if (type === 'decrement') {
        return { 
            counter: state.counter - payload 
        };
    }

        return {
        counter : state.counter 
    }
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment", payload: 5 });
store.dispatch({ type: "decrement", payload: 1});