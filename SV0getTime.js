function getTime() {
		var time = new Date(year,month,day,hours);
		var y = time.getFullyear();
		var m = time.getMonth();
		var d = time.getDay();
		var h = time.getHours();
		var order = 0;
		var select = document.getElementById("Time");
		
		for(i = 0; i<=6;i++,d++,order++){
				select.add(new option("y+m+d+h",order),order);
			}
		
}