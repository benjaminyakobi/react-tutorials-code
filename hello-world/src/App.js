import React, { Component } from 'react';
import './App.css';
import './appStyles.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Context: 38+39+40 */}
        {/* <UserProvider value="Benjamin">
          <ComponentC />
        </UserProvider> */}
        {/* Render Props Pattern: 36+37 */}
        {/* First variation with render */}
        {/* <CounterTwo
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterTwo
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}

        {/* Second variation with children */}
        {/* <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>
        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo> */}

        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedin) => isLoggedin ? "Benjamin" : "Guest"} /> */}
        {/* HOC Pattern: 33+34+35 */}
        {/* <ClickCounter name="Benjamin" /> */}
        {/* <HoverCounter name="Danit" /> */}
        {/* 32 */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* 32 */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Sucess</h1>
        <Inline /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter addValue={11}/> */}
        {/* <Message /> */}
        {/* <Greet name='benjamin' heroName='Batman'>
          <p>This is children props</p>
        </Greet> */}
        {/* <Greet name='danit' heroName='Captain Marvel'>
          <button>Action</button>
          <button>Action2</button>
        </Greet> */}
        {/* <Greet name='ilay' heroName='Thor'/> */}
        {/* <Welcome name='benjamin' heroName='Batman'/> */}
        {/* <Welcome name='danit' heroName='Captain Marvel'/> */}
        {/* <Welcome name='ilay' heroName='Thor'/> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;