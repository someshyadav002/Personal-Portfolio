var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
 function closemenu(){
    sidemeu.style.right = "-200px";
}
alert("Kindly share your personalized valuable feedback \n at the end of the page....!");

//about
var tablinks = document.getElementsByClassName("tab-links");
	var tabcontents = document.getElementsByClassName("tab-contents");
	
	function opentab(tabname){
		for(tablink of tablinks){
			tablink.classList.remove("active-link");
		}
		for(tabcontent of tabcontents){
			tabcontent.classList.remove("acitve-tab");
		}
		event.currentTarget.classList.add("active-link");
		document.getElementById(tabname).classList.add("acitve-tab");
	}