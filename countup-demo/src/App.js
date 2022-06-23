import React from 'react'
import './App.css';
import CountUp, { useCountUp } from 'react-countup'

//API Documentation: https://github.com/glennreyes/react-countup

function App() {
  const countUpRef = React.useRef(null);

  const { countUp, start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 2,
    end: 10000,
    startOnMount: true
  })

  return (
    <div className="App">

      <h1 ref={countUpRef}>
        {countUp}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause - Resume</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
      <h1>
        <CountUp end={300} duration={2} />
        <br />
        <CountUp end={300} duration={5} />
        <br />
        <CountUp start={500} end={1000} duration={5} />
        <br />
        <CountUp end={1000} duration={5} prefix='$' decimals={2} />
        <br />
        <CountUp end={1000} duration={5} suffix='USD' decimals={2} />
        <br />
      </h1>
    </div>
  );
}

export default App;
