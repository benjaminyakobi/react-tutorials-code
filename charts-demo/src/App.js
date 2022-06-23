import './App.css';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';

//API: https://www.chartjs.org/docs/latest/

function App() {
  return (
    <div className="App">
      <div className='chart'>
        <LineChart />
        <BarChart />
        <DoughnutChart />
      </div>
    </div>
  );
}

export default App;
