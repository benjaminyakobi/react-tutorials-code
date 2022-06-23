import './App.css';
import React, { useReducer } from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterFour from './components/CounterFour';
import CounterFive from './components/CounterFive';
import UserForm from './components/UserForm';


function App() {
  return (
    <div className="App">
      {/* 73+74+75+76 - Custom Hooks */}
      {/* <UserForm /> */}
      {/* <CounterFour /> */}
      {/* <CounterFive /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* 71+72 - useRef to access the DOM from functional components */}
      {/* <HookTimer />
      <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* 70 - useMemo Hook for Performance Optimization */}
      {/* <Counter /> */}
      {/* 69 - useCallback Hook (and React.memo) for Performance Optimization */}
      {/* <ParentComponent /> */}
      {/* 67+68 - Fetching data with useReducer
          useState vs useReducer for state management & when to use each one of them */}
      {/* <DataFetchingTwo /> */}
      {/* 66+68 - Fetching data with useState 
          useState vs useReducer for state management & when to use each one of them*/}
      {/* <DataFetchingOne /> */}
    </div>
  );
}
export default App;


{/* 65 - useReducer with useContext */ }
export const CountContext = React.createContext()
// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)

//   return (
//     <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
//     <div className="App">
//         <div>
//           Count - {count}
//           <CompA />
//           <CompB />
//           <CompC />
//         </div>
//     </div>
//     </CountContext.Provider>
//   );
// }
// export default App;
// {/* 65 - useReducer with useContext */ }


{/* 58+59+60 - useContext */ }
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
{/* 58+59+60 - useContext */ }

// function App() {
//   return (
//     <div className="App">
//       {/* 61+62+63+64 - useReducers */}
//       {/* <CounterThree /> */}
//       {/* <CounterTwo /> */}
//       {/* <CounterOne /> */}
//       {/* 58+59+60 - useContext */}
//       {/* <UserContext.Provider value={'Benjamin'}>
//         <ChannelContext.Provider value={'Codevolution'}>
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserContext.Provider> */}
//       {/* 55+56+57 - useEffect */}
//       {/* <DataFetching /> */}
//       {/* 54 */}
//       {/* <IntervalClassCounter />
//       <IntervalHookCounter /> */}
//       {/* 52+53 */}
//       {/* <MouseContainer /> */}
//       {/* <HookMouse /> */}
//       {/* <ClassMouse /> */}
//       {/* 50+51 */}
//       {/* <HookCounterOne /> */}
//       {/* <ClassCounterOne /> */}
//       {/* 48 */}
//       {/* <HookCounterFour /> */}
//       {/* 47 */}
//       {/* <HookCounterThree /> */}
//       {/* 46 */}
//       {/* <ClassCounterTwo /> */}
//       {/* <HookCounterTwo /> */}
//       {/* 45 */}
//       {/* <HookCounter /> */}
//       {/* <ClassCounter /> */}
//     </div>
//   );
// }
// export default App;