/**
 * A reducer is a function that returns a subset or transformation of state data.
 * The state in this case is the "current value" of the reducer.
 *
 * As actions are passed through all reducers, the switch statement picks up
 * the required action. In this case, the Clicks Reducer only reacts to a BANANA_CLICKED
 * action. It increases the number of clicks and returns the new value as reducer state
 * ("current value").
 *
 *
 * Returning the state means "skip";
 *
 * If there is no state set yet (begin condition) : set it to zero.
 *
 *
 **/
export default function (state, action) {
    //If state is not set, default it to 0
    if (!state){
        state = 0;
    }

    switch (action.type) {
        //Increment the currentNumberOfClicks when a BANANA_CLICKED action is passed
        case 'BANANA_CLICKED':
            return action.currentNumberOfClicks+1;
        default:
            //Skip all other actions
            return state;
    }
}