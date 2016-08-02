//most important function
//SVG產生器
function makeSVG(tag, attrs) {
              var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
              for (var k in attrs)
                  el.setAttribute(k, attrs[k]);
              return el;
          }
function turnPage(){
	window.location.assign("http://www.ntu.edu.tw/");
}
//原始圖形(正中間的圓)
var circle = makeSVG("circle", {cx:200, cy:200, r:80, stroke:"black", "stroke-width":3, fill:"#F3E2A9"});
document.getElementById("Lab").appendChild(circle);
//globale variable count
var count = 2;
//switch for producing svgs
switch(count){
	case 1:{
	    var circle1 = circle;
	    circle1.style.transformOrigin = "50% 50%"
	    circle1.style.transform = "scale(2, 2)";
	    //remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //add mouse effects
	    circle1.onmouseover = function(){circle.style.fill = "#088A29"};
	    circle1.onmouseout = function(){circle.style.fill = "#F3E2A9"};
	    circle1.onclick = function(){turnPage()};
	    //上圖
	    document.getElementById("Lab").appendChild(circle1);
	    break;
	}
	case 2:{
		var rectangle1 = makeSVG("rect", {x:0, y:0, width:200, height:400, stroke:"black", "stroke-width":1, fill:"#A9F5BC"});
		var rectangle2 = makeSVG("rect", {x:200, y:0, width:200, height:400, stroke:"black", "stroke-width":1, fill:"#A9F5BC"});
        //remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //add mouse effects
	    rectangle1.onmouseover = function(){rectangle1.style.fill = "#088A29"};
	    rectangle2.onmouseover = function(){rectangle2.style.fill = "#088A29"};
	    rectangle1.onmouseout = function(){rectangle1.style.fill = "#A9F5BC"};
	    rectangle2.onmouseout = function(){rectangle2.style.fill = "#A9F5BC"};
	    rectangle1.onclick = function(){turnPage()};
	    rectangle2.onclick = function(){turnPage()};
	    //上圖
	    document.getElementById("Lab").appendChild(rectangle1);
	    document.getElementById("Lab").appendChild(rectangle2);
	    document.getElementById("Lab").appendChild(circle);
	    break;
	}
	case 3:{
		//remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //make 3 circles
        var cir = [];
        cir[0] = makeSVG("circle", {cx:200, cy:60, r:60, stroke:"black", "stroke-width":1, fill:"#A9F5BC"});
	    cir[1] = makeSVG("circle", {cx:200, cy:60, r:60, stroke:"black", "stroke-width":1, fill:"#A9F5BC"});
	    cir[2] = makeSVG("circle", {cx:200, cy:60, r:60, stroke:"black", "stroke-width":1, fill:"#A9F5BC"});
	    cir[1].style.transform = "rotate(-120deg)";
	    cir[1].style.transformOrigin = "200px 200px";
	    cir[2].style.transform = "rotate(-240deg)";
	    cir[2].style.transformOrigin = "200px 200px";
	    var i;
	    //add mouse events + 上圖
	    for(i = 0; i < 3; i++){
	    	cir[i].onmouseover = function(){cir[i].style.fill = "#088A29"};
	    	cir[i].onmouseout = function(){cir[i].style.fill = "#A9F5BC"};
	    	cir[i].onclick = function(){turnPage()};
	    	document.getElementById("Lab").appendChild(cir[i]);
	    }
	    document.getElementById("Lab").appendChild(circle);
	    break;
	}
	case 4:{
		//remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //make 4 rectangles
        var rectangle = [];
        rectangle[0] = makeSVG("rect", {x:200, y:200, width:108, height:108});
        rectangle[0].style.transform = "skewX(45deg)";
        rectangle[0].style.transformOrigin = "200 200";
        rectangle[0].style.transform = "rotate(-112.5deg)"
	    for(var i = 1; i < 4; i++){
            rectangle[i] = rectangle[i-1];
            rectangle[i].style.transform = "rotate(-90deg)"
	    }
	    //add mouse events + 上圖
	    for(var i = 0; i < 4; i++){
	    	rectangle[i].onmouseover = function(){rectangle[i].style.fill = "#088A29"};
	    	rectangle[i].onmouseout = function(){rectangle[i].style.fill = "#A9F5BC"};
	    	rectangle[i].onclick = function(){turnPage()};
	    	document.getElementById("Lab").appendChild(rectangle[i]);
	    }
	    document.getElementById("Lab").appendChild(circle);
	    break;
	}
	case 5:{
		//remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //make 5 rectangles
        var rectangle = [];
        rectangle[0] = makeSVG("rect", {x:200, y:200, width:105, height:105});
        rectangle[0].style.transform = "skewX(54deg)";
        rectangle[0].style.transformOrigin = "200 200";
        rectangle[0].style.transform = "rotate(-108deg)"
	    for(var i = 1; i < 5; i++){
            rectangle[i] = rectangle[i-1];
            rectangle[i].style.transform = "rotate(-72deg)"
	    }
	    //add mouse events + 上圖
	    for(var i = 0; i < 5; i++){
	    	rectangle[i].onmouseover = function(){rectangle[i].style.fill = "#088A29"};
	    	rectangle[i].onmouseout = function(){rectangle[i].style.fill = "#A9F5BC"};
	    	rectangle[i].onclick = function(){turnPage()};
	    	document.getElementById("Lab").appendChild(rectangle[i]);
	    }
	    document.getElementById("Lab").appendChild(circle);
	    break;
	}
	case 6:{
		//remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //make 5 rectangles
        var rectangle = [];
        rectangle[0] = makeSVG("rect", {x:200, y:200, width:104, height:104});
        rectangle[0].style.transform = "skewX(60deg)";
        rectangle[0].style.transformOrigin = "200 200";
        rectangle[0].style.transform = "rotate(-105deg)"
	    for(var i = 1; i < 6; i++){
            rectangle[i] = rectangle[i-1];
            rectangle[i].style.transform = "rotate(-60deg)"
	    }
	    //add mouse events + 上圖
	    for(var i = 0; i < 6; i++){
	    	rectangle[i].onmouseover = function(){rectangle[i].style.fill = "#088A29"};
	    	rectangle[i].onmouseout = function(){rectangle[i].style.fill = "#A9F5BC"};
	    	rectangle[i].onclick = function(){turnPage()};
	    	document.getElementById("Lab").appendChild(rectangle[i]);
	    }
	    document.getElementById("Lab").appendChild(circle);
	    break;
	}
	case 7:{
		//remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //make 5 rectangles
        var rectangle = [];
        rectangle[0] = makeSVG("rect", {x:200, y:200, width:103, height:103});
        rectangle[0].style.transform = "skewX(64.29deg)";
        rectangle[0].style.transformOrigin = "200 200";
        rectangle[0].style.transform = "rotate(-102.86deg)"
	    for(var i = 1; i < 7; i++){
            rectangle[i] = rectangle[i-1];
            rectangle[i].style.transform = "rotate(-51.43deg)"
	    }
	    //add mouse events + 上圖
	    for(var i = 0; i < 7; i++){
	    	rectangle[i].onmouseover = function(){rectangle[i].style.fill = "#088A29"};
	    	rectangle[i].onmouseout = function(){rectangle[i].style.fill = "#A9F5BC"};
	    	rectangle[i].onclick = function(){turnPage()};
	    	document.getElementById("Lab").appendChild(rectangle[i]);
	    }
	    document.getElementById("Lab").appendChild(circle);
	    break;
	}
	case 8: {
	//remove all elements in the svg id = Lab
	    var myNode = document.getElementById("Lab");
	    while(myNode.firstChild){
	    	myNode.removeChild(myNode.firstChild);
	    }
	    //make 5 rectangles
        var rectangle = [];
        rectangle[0] = makeSVG("rect", {x:200, y:200, width:102, height:102});
        rectangle[0].style.transform = "skewX(67.5deg)";
        rectangle[0].style.transformOrigin = "200 200";
        rectangle[0].style.transform = "rotate(-101.25deg)"
	    for(var i = 1; i < 8; i++){
            rectangle[i] = rectangle[i-1];
            rectangle[i].style.transform = "rotate(-45deg)"
	    }
	    //add mouse events + 上圖
	    for(var i = 0; i < 8; i++){
	    	rectangle[i].onmouseover = function(){rectangle[i].style.fill = "#088A29"};
	    	rectangle[i].onmouseout = function(){rectangle[i].style.fill = "#A9F5BC"};
	    	rectangle[i].onclick = function(){turnPage()};
	    	document.getElementById("Lab").appendChild(rectangle[i]);
	    }
	    document.getElementById("Lab").appendChild(circle);
	    break;
        }
    default:{
        document.getElementById("Lab").appendChild(circle);
        }
}
function addCount(){
	count++;
	location.reload();
}
function minusCount(){
	count--;
	location.reload();
}