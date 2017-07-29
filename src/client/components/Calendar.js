import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

const Calendar = ({year,month,changeMonth,selectDate}) => {
    return (<div>
            <CalendarHeader year={year} month={month} changeMonth={changeMonth}/>
            <CalendarBody year={year} month={month} selectDate={selectDate}/>
            </div>);
};

Calendar.propTypes = {
    year: PropTypes.number,
    month: PropTypes.number,
    changeMonth : PropTypes.func,
    selectDate : PropTypes.func
};

Calendar.defaultProps = {
    year: 0,
    month: '',
    changeMonth: () => console.warn('changeMonth not defined'),
    selectDate : () => console.warn('selectDate')
};

export  default  Calendar;