import  { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types'
// Prepare the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
    reducer : PropTypes.func.isRequired,
    initialState : PropTypes.object.isRequired,
    children : PropTypes.object.isRequired
}


// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
