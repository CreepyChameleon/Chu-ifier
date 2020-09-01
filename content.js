console.log("chu-ified!");
var elements = document.getElementsByTagName("img");

for (var i = 0; i < elements.length; i++) {
	elements[i].src = "images/chu.png";
	clicked = true;
}