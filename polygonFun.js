//畫正多邊形的點加中心
function polorPoly(n){
	if(n > 2){
	var r = 150;
	theta = Math.PI / n;
	var i;
	var xArray = ["150"];
	var yArray = ["0"];
	for(i = 1; i < n; i++){
		var newX = r * Math.cos(i * theta);
		var newY = r * Maht.sin(i * theta);
		xArray.push(newX);
		yArray.push(newY);
	}
    var triArray = [];
    for(i = 0; i < xArray.length; i++){
    	
    	triArray[i] = "200,200 " + xArray[i] + "," + yArray[i]
    	+ " " + xArray[(i + 1) % (n - 1)] + "," + yArray[(i + 1) % (n -1)];
    }
    return triArray;
}
}

/*咱們來幹svg吧>//< */
function svgHereICome(po){
	if(po > 2){
		var poly = polorPoly(po);
		
	}
}