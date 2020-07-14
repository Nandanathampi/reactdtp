import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays' 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form } from 'semantic-ui-react';
import './style.css';


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    
  }

  handleChange(date) {
    this.setState({
      startDate: date.toISOString()
      
    })
    console.log(this.state.startDate)
  }

  onFormSubmit(e) {
    e.preventDefault();
    
  }

  
  render() {
    return (          
      <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
        <header>DATE TIME PICKER</header>
          <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              showTimeSelect
               timeFormat="HH:mm"
               timeIntervals={20}
               timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
              maxDate={addDays(new Date(), 365)}
          />
          <button className="btn btn-primary">Show Date</button>
        </div>
      
      </form>
    );
  }
  
}


export default App;





