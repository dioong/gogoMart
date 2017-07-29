import React from 'react';

const CalendarHeader  = ({year,month,changeMonth}) => {
    return (<div>
                <button onClick={() => changeMonth(-1)}>previous</button>
                <p>{year}-{month}</p>
                <button onClick={() => changeMonth(1)}>next</button>
            </div>);
};

export  default  CalendarHeader;