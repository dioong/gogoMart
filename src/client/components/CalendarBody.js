import React from 'react';

const CalendarHeader  = ({year,month,selectDate}) => {
    month = parseInt(month);

    let has31days = (month) => {
        let monthHas31Days= [1,3,5,7,8,10,12];

        if(monthHas31Days.indexOf(month) > -1){
            return true;
        }else{
            return false;
        }
    };

    let checkLeapYear = (year) =>
    /**
     * 1. 그 해의 숫자가 4의 배수인 경우는 윤년이다.   예) 2004는 4로 나누어지므로 윤년!
     2. 그 해의 숫자가 4로 나누어지지만 100으로도 나누어 지면 윤년이 아니다.   예) 2100년은 4로 나누어지지만 100으로 나누어지므로 윤년이 아니다!
     3. 그 해의 숫자가 100으로 나누어지지만 400으로도 나누어 지면 윤년이다.    예) 2000년은 100으로 나누어지지만 400으로도 나누어지므로 윤년이다!
     * */{
        if(year%4 == 0 && year%100 != 0 && year%400 == 0){
            return true;
        }else if(year%4 == 0 && year%100 != 0){
            return false
        }else if(year%4 == 0){
            return true;
        }else{
            return false;
        }
    };

    let getEndDate = (year,month) => {
        if(has31days(month)){
            return 31;
        }else if(month == 2){
            if(checkLeapYear(year)){
                return 29;
            }else{
                return 28;
            }
        }else{
            return 30;
        }
    };

    let makeDates = (year,month,selectDate) => {
        let startDate = 1;
        let endDate = getEndDate(year,month);

        let list=[];
        for(let date = startDate;date<=endDate;date++){
            list.push(<li onClick={()=>selectDate(date)} key={date}>{date}</li>)
        }
        return list;
    };

    return (<ul>{makeDates(year,month,selectDate)}</ul>);
};

export  default  CalendarHeader;