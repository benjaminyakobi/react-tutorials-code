import React, {useState}from 'react'
import DatePicker from 'react-datepicker'
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'

//API: https://github.com/Hacker0x01/react-datepicker

function App() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="App">
      <DatePicker 
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        // minDate={new Date()} //disable past dates
        // maxDate={new Date()} //disable future dates
        filterDate={date => date.getDay() !== 5 && date.getDay() !== 6} //disable weekends
        isClearable //enable clear button
        showYearDropdown //enable year selection
        scrollableMonthYearDropdown //enable scrollable dropdown

      />
    </div>
  );
}

export default App;
