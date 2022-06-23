import React, { forwardRef } from 'react'
import './App.css';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

//API Documentation: https://github.com/atomiks/tippyjs-react

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow' }}>Colored Component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>CustomChild - Hover first line</div>
      <div>CustomChild - Hover second line</div>
    </div>
  )
})

function App() {
  return (
    <div className="App">
      <div stule={{ paddingBottom: '20px' }}>
        <Tippy placement='right' arrow={false} delay={1000} content='Basic Tooltip with delay'>
          <button>Hover (Basic)</button>
        </Tippy>
      </div>

      <div stule={{ paddingBottom: '20px' }}>
        <Tippy placement='left' content={<span style={{ color: 'orange' }}>Colored</span>}>
          <button>Hover (Colored HTML)</button>
        </Tippy>
      </div>

      <div stule={{ paddingBottom: '20px' }}>
        <Tippy placement='top' content={<ColoredTooltip />}>
          <button>Hover (Component)</button>
        </Tippy>
      </div>

      <div stule={{ paddingBottom: '20px' }}>
        <Tippy placement='bottom' content={<ColoredTooltip />}>
          <CustomChild />
        </Tippy>
      </div>

    </div>
  );
}

export default App;
