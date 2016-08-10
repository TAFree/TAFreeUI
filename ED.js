//function for building circle
function makeSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs){
        el.setAttribute(k, attrs[k]);
        return el;
    }
}
//build polygon points
function formatBuilder(a, b, c) { // return string like "200,10 250,190 160,210"
    var points = String(a.x) + "," + String(a.y) + " " + String(b.x) + "," + String(b.y) + " " +String(c.x) + "," + String(c.y);
    return points;
}
//basic variables
var svgNS = "http://www.w3.org/2000/svg";
var svgEle = document.getElementById("Lab");
//globale variable count for switch
var count = 2;
//switch for creating different polygons
switch(count){
	case 1:{
		//one circle
		var circle = makeSVG("circle", {cx:200, cy:200, r:100, stroke:"black", "stroke-width":3});
		//remove all elements
		var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //add mouse event
	    circle.onmouseover = function(){circle.style.fill = "#088A29"};
	    circle.onmouseout = function(){circle.tstyle.fill = "#F3E2A9"};
	    circle.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
	    //append child
	    svgEle.appendChild(circle)
	    break;
	}
	case 2:{
		//basic circle
		var circle = makeSVG("circle", {cx:200, cy:200, r:60, stroke:"black", "stroke-width":3, fill:"red"});
		//two rectangles
		var rect1 = makeSVG("rect", {x:50, y:50, rx:20, ry:20, width:150, height:300, "stroke-width":1, stroke:"black"});
		var rect2 = makeSVG("rect", {x:200, y:50, rx:20, ry:20, width:150, height:300, "stroke-width":1, stroke:"black"});
		//remove all elements
		var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //add mouse event
	    rect1.onmouseover = function(){circle.style.fill = "#088A29"};
	    rect1.onmouseout = function(){circle.tstyle.fill = "#F3E2A9"};
	    rect1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
	    rect2.onmouseover = function(){circle.style.fill = "#088A29"};
	    rect2.onmouseout = function(){circle.tstyle.fill = "#F3E2A9"};
	    rect2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
	    //append child
	    svgEle.appendChild(rect1);
	    svgEle.appendChild(rect2);
	    svgEle.appendChild(circle);
	    break;
	}
	case 3:{
		//basic circle
		var circle = makeSVG("circle", {cx:200, cy:200, r:60, stroke:"black", "stroke-width":3, fill:"red"});
		//three triangles
		//array poly to input polygons, convenient for using for loop
		var poly = [];
		for(var i = 0; i < 3; i++){
			poly[i] = document.createElementNS(svgNS, "polygon");
		}
		//set points
		poly[0].setAttribute("points", formatBuilder({x:200, y:200}, {x:373, y:300}, {x:27, y:300}));
		poly[1].setAttribute("points", formatBuilder({x:200, y:200}, {x:200, y:0}, {x:373, y:300}));
		poly[2].setAttribute("points", formatBuilder({x:200, y:200}, {x:200, y:0}, {x:27, y:300}));
		//add mouse event, append child
		for(var i = 0; i < 3; i++){
			poly[i].onmouseover = function(){circle.style.fill = "#088A29"};
	        poly[i].onmouseout = function(){circle.tstyle.fill = "#F3E2A9"};
	        poly[i].onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
	        svgEle.appendChild(poly[i]);
		}
		svgEle.appendChild(circle);
		break;
	}

}
