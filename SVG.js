//build polygon points
function formatBuilder(a, b, c) { // return string like "200,10 250,190 160,210"
    var points = String(a.x) + "," + String(a.y) + " " + String(b.x) + "," + String(b.y) + " " +String(c.x) + "," + String(c.y);
    return points;
}
function formatRect(a, b, c, d){
	var points = String(a.x) + "," + String(a.y) + " " + String(b.x) + "," + String(b.y) + " " +String(c.x) + "," + String(c.y) + " " + String(d.x) + "," + String(d.y);
    return points;
}
//globale variable count for switch
var count = 1;
//switch for creating different polygons
switch(count){
	case 1:{
		//one circle
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "100");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	circle.onmouseout = function(){this.style.fill = "#A9F5D0";};
          	circle.onmouseover = function(){this.style.fill = "#CEF6D8"};
          	circle.style.fill = "#A9F5D0";
          	svgEle.appendChild(circle);
          	//text
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 2:{
		//basic circle + 2 rectangles
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	//circle
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "60");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.style.fill = "#A9F5D0";
          	//first rectangle
          	var rect1 = document.createElementNS(svgNS, "polygon");
          	rect1.setAttribute("points", formatRect({x:50, y:50}, {x:200, y:50}, {x:200, y:350}, {x:50, y:350}));
          	rect1.setAttribute("stroke-width", "1");
          	rect1.setAttribute("stroke", "black");
          	rect1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	rect1.style.fill = "#58ACFA";
          	rect1.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	rect1.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//second rectangle
          	var rect2 = document.createElementNS(svgNS, "polygon");
          	rect2.setAttribute("points", formatRect({x:200, y:50}, {x:350, y:50}, {x:350, y:350}, {x:200, y:350}));
          	rect2.setAttribute("stroke-width", "1");
          	rect2.setAttribute("stroke", "black");
          	rect2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	rect2.style.fill = "#58ACFA";
          	rect2.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	rect2.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//append
          	svgEle.appendChild(rect1);
          	svgEle.appendChild(rect2);
          	svgEle.appendChild(circle);
          	//text
          	var text1 = document.createElementNS(svgNS, "text");
          	text1.setAttribute("x", "109");
          	text1.setAttribute("y", "205");
          	text1.setAttribute("fill", "black");
          	text1.textContent = "1";
          	svgEle.appendChild(text1);
          	var text2 = document.createElementNS(svgNS, "text");
          	text2.setAttribute("x", "289");
          	text2.setAttribute("y", "205");
          	text2.setAttribute("fill", "black");
          	text2.textContent = "2";
          	svgEle.appendChild(text2);
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 3:{
		//circle + three triangles
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	//circle
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "60");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.style.fill = "#A9F5D0";
          	//first triangle
          	var tri1 = document.createElementNS(svgNS, "polygon");
          	tri1.setAttribute("points", formatBuilder({x:200, y:0}, {x:200, y:200}, {x:27, y:300}));
          	tri1.setAttribute("stroke-width", "1");
          	tri1.setAttribute("stroke", "black");
          	tri1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri1.style.fill = "#58ACFA";
          	tri1.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri1.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//second triangle
          	var tri2 = document.createElementNS(svgNS, "polygon");
          	tri2.setAttribute("points", formatBuilder({x:200, y:0}, {x:373, y:300}, {x:200, y:200}));
          	tri2.setAttribute("stroke-width", "1");
          	tri2.setAttribute("stroke", "black");
          	tri2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri2.style.fill = "#58ACFA";
          	tri2.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri2.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//third triangle
          	var tri3 = document.createElementNS(svgNS, "polygon");
          	tri3.setAttribute("points", formatBuilder({x:27, y:300}, {x:373, y:300}, {x:200, y:200}));
          	tri3.setAttribute("stroke-width", "1");
          	tri3.setAttribute("stroke", "black");
          	tri3.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri3.style.fill = "#58ACFA";
          	tri3.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri3.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//append
          	svgEle.appendChild(tri1);
          	svgEle.appendChild(tri2);
          	svgEle.appendChild(tri3);
          	svgEle.appendChild(circle);
          	//text
          	var text1 = document.createElementNS(svgNS, "text");
          	text1.setAttribute("x", "128");
          	text1.setAttribute("y", "170");
          	text1.setAttribute("fill", "black");
          	text1.textContent = "1";
          	svgEle.appendChild(text1);
          	var text2 = document.createElementNS(svgNS, "text");
          	text2.setAttribute("x", "270");
          	text2.setAttribute("y", "170");
          	text2.setAttribute("fill", "black");
          	text2.textContent = "2";
          	svgEle.appendChild(text2);
          	var text3 = document.createElementNS(svgNS, "text");
          	text3.setAttribute("x", "198");
          	text3.setAttribute("y", "280");
          	text3.setAttribute("fill", "black");
          	text3.textContent = "3";
          	svgEle.appendChild(text3);
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 4:{
		//circle + four triangles
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	//circle
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "60");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.style.fill = "#A9F5D0";
          	//first triangle
          	var tri1 = document.createElementNS(svgNS, "polygon");
          	tri1.setAttribute("points", formatBuilder({x:200, y:0}, {x:200, y:200}, {x:0, y:200}));
          	tri1.setAttribute("stroke-width", "1");
          	tri1.setAttribute("stroke", "black");
          	tri1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri1.style.fill = "#58ACFA";
          	tri1.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri1.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//second triangle
          	var tri2 = document.createElementNS(svgNS, "polygon");
          	tri2.setAttribute("points", formatBuilder({x:200, y:0}, {x:400, y:200}, {x:200, y:200}));
          	tri2.setAttribute("stroke-width", "1");
          	tri2.setAttribute("stroke", "black");
          	tri2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri2.style.fill = "#58ACFA";
          	tri2.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri2.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//third triangle
          	var tri3 = document.createElementNS(svgNS, "polygon");
          	tri3.setAttribute("points", formatBuilder({x:400, y:200}, {x:200, y:400}, {x:200, y:200}));
          	tri3.setAttribute("stroke-width", "1");
          	tri3.setAttribute("stroke", "black");
          	tri3.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri3.style.fill = "#58ACFA";
          	tri3.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri3.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//forth triangle
          	var tri4 = document.createElementNS(svgNS, "polygon");
          	tri4.setAttribute("points", formatBuilder({x:0, y:200}, {x:200, y:400}, {x:200, y:200}));
          	tri4.setAttribute("stroke-width", "1");
          	tri4.setAttribute("stroke", "black");
          	tri4.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri4.style.fill = "#58ACFA";
          	tri4.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri4.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//append
          	svgEle.appendChild(tri1);
          	svgEle.appendChild(tri2);
          	svgEle.appendChild(tri3);
          	svgEle.appendChild(tri4);
          	svgEle.appendChild(circle);
          	//text
          	var text1 = document.createElementNS(svgNS, "text");
          	text1.setAttribute("x", "120");
          	text1.setAttribute("y", "130");
          	text1.setAttribute("fill", "black");
          	text1.textContent = "1";
          	svgEle.appendChild(text1);
          	var text2 = document.createElementNS(svgNS, "text");
          	text2.setAttribute("x", "278");
          	text2.setAttribute("y", "130");
          	text2.setAttribute("fill", "black");
          	text2.textContent = "2";
          	svgEle.appendChild(text2);
          	var text3 = document.createElementNS(svgNS, "text");
          	text3.setAttribute("x", "120");
          	text3.setAttribute("y", "270");
          	text3.setAttribute("fill", "black");
          	text3.textContent = "3";
          	svgEle.appendChild(text3);
          	var text4 = document.createElementNS(svgNS, "text");
          	text4.setAttribute("x", "278");
          	text4.setAttribute("y", "270");
          	text4.setAttribute("fill", "black");
          	text4.textContent = "4";
          	svgEle.appendChild(text4);
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 5:{
		//circle + five triangles
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	//circle
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "60");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.style.fill = "#A9F5D0";
          	//first triangle
          	var tri1 = document.createElementNS(svgNS, "polygon");
          	tri1.setAttribute("points", formatBuilder({x:200, y:0}, {x:390, y:138}, {x:200, y:200}));
          	tri1.setAttribute("stroke-width", "1");
          	tri1.setAttribute("stroke", "black");
          	tri1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri1.style.fill = "#58ACFA";
          	tri1.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri1.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//second triangle
          	var tri2 = document.createElementNS(svgNS, "polygon");
          	tri2.setAttribute("points", formatBuilder({x:390, y:138}, {x:318, y:362}, {x:200, y:200}));
          	tri2.setAttribute("stroke-width", "1");
          	tri2.setAttribute("stroke", "black");
          	tri2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri2.style.fill = "#58ACFA";
          	tri2.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri2.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//third triangle
          	var tri3 = document.createElementNS(svgNS, "polygon");
          	tri3.setAttribute("points", formatBuilder({x:318, y:362}, {x:82, y:362}, {x:200, y:200}));
          	tri3.setAttribute("stroke-width", "1");
          	tri3.setAttribute("stroke", "black");
          	tri3.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri3.style.fill = "#58ACFA";
          	tri3.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri3.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//forth triangle
          	var tri4 = document.createElementNS(svgNS, "polygon");
          	tri4.setAttribute("points", formatBuilder({x:82, y:362}, {x:10, y:138}, {x:200, y:200}));
          	tri4.setAttribute("stroke-width", "1");
          	tri4.setAttribute("stroke", "black");
          	tri4.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri4.style.fill = "#58ACFA";
          	tri4.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri4.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//fifth triangle
          	var tri5 = document.createElementNS(svgNS, "polygon");
          	tri5.setAttribute("points", formatBuilder({x:10, y:138}, {x:200, y:0}, {x:200, y:200}));
          	tri5.setAttribute("stroke-width", "1");
          	tri5.setAttribute("stroke", "black");
          	tri5.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri5.style.fill = "#58ACFA";
          	tri5.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri5.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//append
          	svgEle.appendChild(tri1);
          	svgEle.appendChild(tri2);
          	svgEle.appendChild(tri3);
          	svgEle.appendChild(tri4);
          	svgEle.appendChild(tri5);
          	svgEle.appendChild(circle);
          	//text
          	var text1 = document.createElementNS(svgNS, "text");
          	text1.setAttribute("x", "130");
          	text1.setAttribute("y", "104");
          	text1.setAttribute("fill", "black");
          	text1.textContent = "1";
          	svgEle.appendChild(text1);
          	var text2 = document.createElementNS(svgNS, "text");
          	text2.setAttribute("x", "268");
          	text2.setAttribute("y", "104");
          	text2.setAttribute("fill", "black");
          	text2.textContent = "2";
          	svgEle.appendChild(text2);
          	var text3 = document.createElementNS(svgNS, "text");
          	text3.setAttribute("x", "312");
          	text3.setAttribute("y", "240");
          	text3.setAttribute("fill", "black");
          	text3.textContent = "3";
          	svgEle.appendChild(text3);
          	var text4 = document.createElementNS(svgNS, "text");
          	text4.setAttribute("x", "198");
          	text4.setAttribute("y", "320");
          	text4.setAttribute("fill", "black");
          	text4.textContent = "4";
          	svgEle.appendChild(text4);
          	var text5 = document.createElementNS(svgNS, "text");
          	text5.setAttribute("x", "86");
          	text5.setAttribute("y", "240");
          	text5.setAttribute("fill", "black");
          	text5.textContent = "5";
          	svgEle.appendChild(text5);
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 6:{
		//circle + six triangles
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	//circle
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "60");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.style.fill = "#A9F5D0";
          	//first triangle
          	var tri1 = document.createElementNS(svgNS, "polygon");
          	tri1.setAttribute("points", formatBuilder({x:200, y:0}, {x:373, y:100}, {x:200, y:200}));
          	tri1.setAttribute("stroke-width", "1");
          	tri1.setAttribute("stroke", "black");
          	tri1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri1.style.fill = "#58ACFA";
          	tri1.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri1.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//second triangle
          	var tri2 = document.createElementNS(svgNS, "polygon");
          	tri2.setAttribute("points", formatBuilder({x:373, y:100}, {x:373, y:300}, {x:200, y:200}));
          	tri2.setAttribute("stroke-width", "1");
          	tri2.setAttribute("stroke", "black");
          	tri2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri2.style.fill = "#58ACFA";
          	tri2.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri2.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//third triangle
          	var tri3 = document.createElementNS(svgNS, "polygon");
          	tri3.setAttribute("points", formatBuilder({x:373, y:300}, {x:200, y:400}, {x:200, y:200}));
          	tri3.setAttribute("stroke-width", "1");
          	tri3.setAttribute("stroke", "black");
          	tri3.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri3.style.fill = "#58ACFA";
          	tri3.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri3.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//forth triangle
          	var tri4 = document.createElementNS(svgNS, "polygon");
          	tri4.setAttribute("points", formatBuilder({x:200, y:400}, {x:27, y:300}, {x:200, y:200}));
          	tri4.setAttribute("stroke-width", "1");
          	tri4.setAttribute("stroke", "black");
          	tri4.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri4.style.fill = "#58ACFA";
          	tri4.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri4.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//fifth triangle
          	var tri5 = document.createElementNS(svgNS, "polygon");
          	tri5.setAttribute("points", formatBuilder({x:27, y:300}, {x:27, y:100}, {x:200, y:200}));
          	tri5.setAttribute("stroke-width", "1");
          	tri5.setAttribute("stroke", "black");
          	tri5.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri5.style.fill = "#58ACFA";
          	tri5.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri5.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//sixth triangle
          	var tri6 = document.createElementNS(svgNS, "polygon");
          	tri6.setAttribute("points", formatBuilder({x:27, y:100}, {x:200, y:0}, {x:200, y:200}));
          	tri6.setAttribute("stroke-width", "1");
          	tri6.setAttribute("stroke", "black");
          	tri6.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri6.style.fill = "#58ACFA";
          	tri6.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri6.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//append
          	svgEle.appendChild(tri1);
          	svgEle.appendChild(tri2);
          	svgEle.appendChild(tri3);
          	svgEle.appendChild(tri4);
          	svgEle.appendChild(tri5);
          	svgEle.appendChild(tri6);
          	svgEle.appendChild(circle);
          	//text
          	var text1 = document.createElementNS(svgNS, "text");
          	text1.setAttribute("x", "139");
          	text1.setAttribute("y", "85");
          	text1.setAttribute("fill", "black");
          	text1.textContent = "1";
          	svgEle.appendChild(text1);
          	var text2 = document.createElementNS(svgNS, "text");
          	text2.setAttribute("x", "259");
          	text2.setAttribute("y", "85");
          	text2.setAttribute("fill", "black");
          	text2.textContent = "2";
          	svgEle.appendChild(text2);
          	var text3 = document.createElementNS(svgNS, "text");
          	text3.setAttribute("x", "331");
          	text3.setAttribute("y", "200");
          	text3.setAttribute("fill", "black");
          	text3.textContent = "3";
          	svgEle.appendChild(text3);
          	var text4 = document.createElementNS(svgNS, "text");
          	text4.setAttribute("x", "259");
          	text4.setAttribute("y", "315");
          	text4.setAttribute("fill", "black");
          	text4.textContent = "4";
          	svgEle.appendChild(text4);
          	var text5 = document.createElementNS(svgNS, "text");
          	text5.setAttribute("x", "138");
          	text5.setAttribute("y", "315");
          	text5.setAttribute("fill", "black");
          	text5.textContent = "5";
          	svgEle.appendChild(text5);
          	var text6 = document.createElementNS(svgNS, "text");
          	text6.setAttribute("x", "67");
          	text6.setAttribute("y", "200");
          	text6.setAttribute("fill", "black");
          	text6.textContent = "6";
          	svgEle.appendChild(text6);
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 7:{
		//circle + six triangles
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	//circle
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "60");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.style.fill = "#A9F5D0";
          	//first triangle
          	var tri1 = document.createElementNS(svgNS, "polygon");
          	tri1.setAttribute("points", formatBuilder({x:200, y:0}, {x:356, y:75}, {x:200, y:200}));
          	tri1.setAttribute("stroke-width", "1");
          	tri1.setAttribute("stroke", "black");
          	tri1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri1.style.fill = "#58ACFA";
          	tri1.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri1.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//second triangle
          	var tri2 = document.createElementNS(svgNS, "polygon");
          	tri2.setAttribute("points", formatBuilder({x:356, y:75}, {x:395, y:245}, {x:200, y:200}));
          	tri2.setAttribute("stroke-width", "1");
          	tri2.setAttribute("stroke", "black");
          	tri2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri2.style.fill = "#58ACFA";
          	tri2.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri2.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//third triangle
          	var tri3 = document.createElementNS(svgNS, "polygon");
          	tri3.setAttribute("points", formatBuilder({x:395, y:245}, {x:287, y:380}, {x:200, y:200}));
          	tri3.setAttribute("stroke-width", "1");
          	tri3.setAttribute("stroke", "black");
          	tri3.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri3.style.fill = "#58ACFA";
          	tri3.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri3.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//forth triangle
          	var tri4 = document.createElementNS(svgNS, "polygon");
          	tri4.setAttribute("points", formatBuilder({x:287, y:380}, {x:113, y:380}, {x:200, y:200}));
          	tri4.setAttribute("stroke-width", "1");
          	tri4.setAttribute("stroke", "black");
          	tri4.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri4.style.fill = "#58ACFA";
          	tri4.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri4.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//fifth triangle
          	var tri5 = document.createElementNS(svgNS, "polygon");
          	tri5.setAttribute("points", formatBuilder({x:113, y:380}, {x:5, y:245}, {x:200, y:200}));
          	tri5.setAttribute("stroke-width", "1");
          	tri5.setAttribute("stroke", "black");
          	tri5.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri5.style.fill = "#58ACFA";
          	tri5.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri5.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//sixth triangle
          	var tri6 = document.createElementNS(svgNS, "polygon");
          	tri6.setAttribute("points", formatBuilder({x:5, y:245}, {x:44, y:75}, {x:200, y:200}));
          	tri6.setAttribute("stroke-width", "1");
          	tri6.setAttribute("stroke", "black");
          	tri6.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri6.style.fill = "#58ACFA";
          	tri6.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri6.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//seventh triangle
          	var tri7 = document.createElementNS(svgNS, "polygon");
          	tri7.setAttribute("points", formatBuilder({x:44, y:75}, {x:200, y:0}, {x:200, y:200}));
          	tri7.setAttribute("stroke-width", "1");
          	tri7.setAttribute("stroke", "black");
          	tri7.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri7.style.fill = "#58ACFA";
          	tri7.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri7.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//append
          	svgEle.appendChild(tri1);
          	svgEle.appendChild(tri2);
          	svgEle.appendChild(tri3);
          	svgEle.appendChild(tri4);
          	svgEle.appendChild(tri5);
          	svgEle.appendChild(tri6);
          	svgEle.appendChild(tri7);
          	svgEle.appendChild(circle);
          	//text
          	var text1 = document.createElementNS(svgNS, "text");
          	text1.setAttribute("x", "137");
          	text1.setAttribute("y", "63");
          	text1.setAttribute("fill", "black");
          	text1.textContent = "1";
          	svgEle.appendChild(text1);
          	var text2 = document.createElementNS(svgNS, "text");
          	text2.setAttribute("x", "261");
          	text2.setAttribute("y", "63");
          	text2.setAttribute("fill", "black");
          	text2.textContent = "2";
          	svgEle.appendChild(text2);
          	var text3 = document.createElementNS(svgNS, "text");
          	text3.setAttribute("x", "348");
          	text3.setAttribute("y", "170");
          	text3.setAttribute("fill", "black");
          	text3.textContent = "3";
          	svgEle.appendChild(text3);
          	var text4 = document.createElementNS(svgNS, "text");
          	text4.setAttribute("x", "309");
          	text4.setAttribute("y", "297");
          	text4.setAttribute("fill", "black");
          	text4.textContent = "4";
          	svgEle.appendChild(text4);
          	var text5 = document.createElementNS(svgNS, "text");
          	text5.setAttribute("x", "200");
          	text5.setAttribute("y", "345");
          	text5.setAttribute("fill", "black");
          	text5.textContent = "5";
          	svgEle.appendChild(text5);
          	var text6 = document.createElementNS(svgNS, "text");
          	text6.setAttribute("x", "89");
          	text6.setAttribute("y", "297");
          	text6.setAttribute("fill", "black");
          	text6.textContent = "6";
          	svgEle.appendChild(text6);
          	var text7 = document.createElementNS(svgNS, "text");
          	text7.setAttribute("x", "50");
          	text7.setAttribute("y", "170");
          	text7.setAttribute("fill", "black");
          	text7.textContent = "7";
          	svgEle.appendChild(text7);
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 8:{
		//circle + six triangles
		function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("Lab");
          	//circle
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "60");
          	circle.setAttribute("stroke-width", "3");
          	circle.setAttribute("stroke", "black");
          	circle.style.fill = "#A9F5D0";
          	//first triangle
          	var tri1 = document.createElementNS(svgNS, "polygon");
          	tri1.setAttribute("points", formatBuilder({x:200, y:0}, {x:341, y:59}, {x:200, y:200}));
          	tri1.setAttribute("stroke-width", "1");
          	tri1.setAttribute("stroke", "black");
          	tri1.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri1.style.fill = "#58ACFA";
          	tri1.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri1.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//second triangle
          	var tri2 = document.createElementNS(svgNS, "polygon");
          	tri2.setAttribute("points", formatBuilder({x:341, y:59}, {x:400, y:200}, {x:200, y:200}));
          	tri2.setAttribute("stroke-width", "1");
          	tri2.setAttribute("stroke", "black");
          	tri2.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri2.style.fill = "#58ACFA";
          	tri2.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri2.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//third triangle
          	var tri3 = document.createElementNS(svgNS, "polygon");
          	tri3.setAttribute("points", formatBuilder({x:400, y:200}, {x:341, y:341}, {x:200, y:200}));
          	tri3.setAttribute("stroke-width", "1");
          	tri3.setAttribute("stroke", "black");
          	tri3.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri3.style.fill = "#58ACFA";
          	tri3.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri3.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//forth triangle
          	var tri4 = document.createElementNS(svgNS, "polygon");
          	tri4.setAttribute("points", formatBuilder({x:341, y:341}, {x:200, y:400}, {x:200, y:200}));
          	tri4.setAttribute("stroke-width", "1");
          	tri4.setAttribute("stroke", "black");
          	tri4.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri4.style.fill = "#58ACFA";
          	tri4.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri4.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//fifth triangle
          	var tri5 = document.createElementNS(svgNS, "polygon");
          	tri5.setAttribute("points", formatBuilder({x:200, y:400}, {x:59, y:341}, {x:200, y:200}));
          	tri5.setAttribute("stroke-width", "1");
          	tri5.setAttribute("stroke", "black");
          	tri5.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri5.style.fill = "#58ACFA";
          	tri5.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri5.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//sixth triangle
          	var tri6 = document.createElementNS(svgNS, "polygon");
          	tri6.setAttribute("points", formatBuilder({x:59, y:341}, {x:0, y:200}, {x:200, y:200}));
          	tri6.setAttribute("stroke-width", "1");
          	tri6.setAttribute("stroke", "black");
          	tri6.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri6.style.fill = "#58ACFA";
          	tri6.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri6.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//seventh triangle
          	var tri7 = document.createElementNS(svgNS, "polygon");
          	tri7.setAttribute("points", formatBuilder({x:0, y:200}, {x:59, y:59}, {x:200, y:200}));
          	tri7.setAttribute("stroke-width", "1");
          	tri7.setAttribute("stroke", "black");
          	tri7.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri7.style.fill = "#58ACFA";
          	tri7.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri7.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//eighth triangle
          	var tri8 = document.createElementNS(svgNS, "polygon");
          	tri8.setAttribute("points", formatBuilder({x:59, y:59}, {x:200, y:0}, {x:200, y:200}));
          	tri8.setAttribute("stroke-width", "1");
          	tri8.setAttribute("stroke", "black");
          	tri8.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
          	tri8.style.fill = "#58ACFA";
          	tri8.onmouseover = function(){this.style.fill = "#A9E2F3"};
          	tri8.onmouseout = function(){this.style.fill = "#58ACFA";};
          	//append
          	svgEle.appendChild(tri1);
          	svgEle.appendChild(tri2);
          	svgEle.appendChild(tri3);
          	svgEle.appendChild(tri4);
          	svgEle.appendChild(tri5);
          	svgEle.appendChild(tri6);
          	svgEle.appendChild(tri7);
          	svgEle.appendChild(tri8);
          	svgEle.appendChild(circle);
          	//text
          	var text1 = document.createElementNS(svgNS, "text");
          	text1.setAttribute("x", "155");
          	text1.setAttribute("y", "80");
          	text1.setAttribute("fill", "black");
          	text1.textContent = "1";
          	svgEle.appendChild(text1);
          	var text2 = document.createElementNS(svgNS, "text");
          	text2.setAttribute("x", "243");
          	text2.setAttribute("y", "80");
          	text2.setAttribute("fill", "black");
          	text2.textContent = "2";
          	svgEle.appendChild(text2);
          	var text3 = document.createElementNS(svgNS, "text");
          	text3.setAttribute("x", "318");
          	text3.setAttribute("y", "155");
          	text3.setAttribute("fill", "black");
          	text3.textContent = "3";
          	svgEle.appendChild(text3);
          	var text4 = document.createElementNS(svgNS, "text");
          	text4.setAttribute("x", "318");
          	text4.setAttribute("y", "245");
          	text4.setAttribute("fill", "black");
          	text4.textContent = "4";
          	svgEle.appendChild(text4);
          	var text5 = document.createElementNS(svgNS, "text");
          	text5.setAttribute("x", "243");
          	text5.setAttribute("y", "320");
          	text5.setAttribute("fill", "black");
          	text5.textContent = "5";
          	svgEle.appendChild(text5);
          	var text6 = document.createElementNS(svgNS, "text");
          	text6.setAttribute("x", "155");
          	text6.setAttribute("y", "320");
          	text6.setAttribute("fill", "black");
          	text6.textContent = "6";
          	svgEle.appendChild(text6);
          	var text7 = document.createElementNS(svgNS, "text");
          	text7.setAttribute("x", "80");
          	text7.setAttribute("y", "245");
          	text7.setAttribute("fill", "black");
          	text7.textContent = "7";
          	svgEle.appendChild(text7);
          	var text8 = document.createElementNS(svgNS, "text");
          	text8.setAttribute("x", "80");
          	text8.setAttribute("y", "155");
          	text8.setAttribute("fill", "black");
          	text8.textContent = "8";
          	svgEle.appendChild(text8);
          	var text = document.createElementNS(svgNS, "text");
          	text.setAttribute("x", "178");
          	text.setAttribute("y", "205");
          	text.setAttribute("fill", "black");
          	text.textContent = "LabXX";
          	svgEle.appendChild(text);
          }
          break;
	}
	case 9:{
		
        function createPolygon() {
          	var svgNS = "http://www.w3.org/2000/svg";
          	var svgEle = document.getElementById("demo");
          	var polygonEle = document.createElementNS(svgNS, "polygon");
          	polygonEle.setAttribute("points", formatBuilder({x:200, y:10}, {x:250, y:190}, {x:160, y:210}));
	    	polygonEle.onclick = function(){window.location.assign("http://www.ntu.edu.tw/");};
	    	polygonEle.onmouseover = function(){this.style.fill = "silver";};
	    	polygonEle.onmouseout = function(){this.style.fill = "gray";};
          	svgEle.appendChild(polygonEle);
          	var poly = document.createElementNS(svgNS, "polygon");
          	poly.setAttribute("points", formatBuilder({x:200, y:200}, {x:250, y:200}, {x:200, y:250}));
          	svgEle.appendChild(poly);
          	var circle = document.createElementNS(svgNS, "circle");
          	circle.setAttribute("cx", "200");
          	circle.setAttribute("cy", "200");
          	circle.setAttribute("r", "50");
          	svgEle.appendChild(circle);
        }
        	
	}
}
