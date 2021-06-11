 const todayDay = new Date();

 let valor = todayDay.getFullYear();
 valor = todayDay.getMonth();
 valor = todayDay.getMinutes();
 valor = todayDay.getHours();
 valor = todayDay.getTime();


 console.log(todayDay)

 console.log(valor)

 const dateFormat1 = new Date().toLocaleString()
 console.log(dateFormat1)

 const dateFormat2 = new Date().toLocaleDateString()
 console.log(dateFormat2)

 const dateFormat3 = new Date().toLocaleTimeString()
 console.log(dateFormat3)