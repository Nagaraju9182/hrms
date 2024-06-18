//  const time = new Date()

 let h = gettime.hours()
 let m = gettime.minutes()
 let s = gettime.seconds()

 const calHour = (hour, min) =>{
     const hh = hour % 12 || 12;

     const deg = (360/12) * hh;
     const degMin = (360/60) * min;
     return deg+degMin;
 }
   const calTime = (time) =>{
    return (360/60) * time
   }
     h = calHour(h,m);
     m = calTime(m);
     s = calTime(s);

      hour.Style.rotate ='${h}deg';
      minute.Style.rotate ='${m}deg';
      second.Style.rotate ='${s}deg';
 
