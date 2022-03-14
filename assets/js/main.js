function myFunction() {
	document.getElementById("masuk").innerHTML = alert("Hello World!");
}

var selector = ".nav li";

$(selector).on("click", function () {
	$(selector).removeClass(".active");
	$(this).addClass(".active");
});
