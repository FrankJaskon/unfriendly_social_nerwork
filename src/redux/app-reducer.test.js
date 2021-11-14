import appReducer, {setInitialization} from './app-reducer';

const state = {
    initialized: false
};

it ('get true if we put true', () => {
    //test data
    const action = setInitialization(true);

    //action
    const newState = appReducer(state, action);

    //expectation
    expect(newState.initialized).toBe(true);
});