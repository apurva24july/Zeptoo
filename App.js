import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    
    KeyboardDatePicker
}from '@material-ui/pickers'


function App(){
    const[selectedDate,setsSelectedDate]=React.useState(
        new Date("2020-09-11:12:00:00")
    )
    const handleDateChange=(data)=>{
    setSelectedDate(data)
}
    return(
        
<div className="App">
    <MuiPickersUtilsProvider utils={DataFnsUtils}>
      <Grid  container justify='space-around'>
        <KeyboardDatePicker
        disableToolbar
        variant='dialog'
        format='MM/dd/yyy'
        margin='normal'
        id='date-picker'
        label='Date Picker'
        value={selectedDate}
        onChange={handleDataChange}
        KeyboardButtonProps={{
            'aria-label]':'change-date'
        }}
        
/>
<KeyboardTimePicker
margin='normal'
id='time-picker'
label='Time-picker'
value={selectedDate}
onChange={(handleDataChange)}
KeyboardButtonProps={{
    'arial-label':'change date'
}}
/>
      </Grid>
    </MuiPickersUtilsProvider>
    

        </div>
    );

}