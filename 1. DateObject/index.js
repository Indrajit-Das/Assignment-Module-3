var getCurrentDay=(myDate)=>{
    var days =["Sunday"," Monday"," Tuesday", "Wednesday" ,"Thursday", "Friday","Saturday"];
    var obj = new Date();
    // here obj.getDay(myDate) will return the numeric value 
    // from the days array index we can get the name of the day 
    var getCurrentDay =days[obj.getDay(myDate)];
    return getCurrentDay;
}
console.log("The day of the week is : "+getCurrentDay("2023-06-19"));