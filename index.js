// Your code here
function createEmployeeRecord([firstName,familyName,title,payPerHour]){
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents:[],
        timeOutEvents:[],

    }
}

function createEmployeeRecords(employeeInfo){
    return employeeInfo.map(createEmployeeRecord)
   

}createEmployeeRecords()

function createTimeInEvent(employeeInfo,){

}

function createTimeInEvent(employeeInfo,dateStamp){
    const [date,hour] = dateStamp.split(' ')

    employeeInfo.timeInEvents.push({
        type:'TimeIn',
        hour:parseInt(hour,10),
        date:date
    });
    return employeeInfo

}

function createTimeOutEvent(employeeInfo,dateStamp){
    const [date,hour]= dateStamp.split(' ')

    employeeInfo.timeOutEvents.push({
        type:'TimeOut',
        hour:parseInt(hour,10),
        date:date
    })
    return employeeInfo
}

function hoursWorkedOnDate(employeeInfo,date){
    const timeIn=employeeInfo.timeInEvents.find(event => event.date === date);
    const timeOut = employeeInfo.timeOutEvents.find(event => event.date === date);

    if(timeIn && timeOut){
        return(timeOut.hour - timeIn.hour) / 100;
    }else {
        return null;
    }
};

function wagesEarnedOnDate(employeeInfo,date){
    const hoursWorked = hoursWorkedOnDate(employeeInfo, date);
    return hoursWorked * employeeInfo.payPerHour;

}

function allWagesFor(employeeInfo){
    const datesWorked = employeeInfo.timeInEvents.map(event => event.date);

    const totalWages = datesWorked.reduce((total,date) =>{
        return total + wagesEarnedOnDate(employeeInfo,date);
    },0);

    return totalWages;
}

function calculatePayroll(employeeInfo){
    return employeeInfo.reduce((total,employee) =>{
        return total + allWagesFor(employee)
    },0)


}

