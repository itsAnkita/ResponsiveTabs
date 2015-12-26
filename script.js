function myFunction() {
    document.getElementsByClassName('nav-bar')[0].getElementsByClassName('active')[0].className = "";
    document.getElementsByClassName('tab-content')[0].getElementsByClassName('active')[0].className = "";
    this.className = "active";
    var a = this.children[0].getAttribute("href");
    var c = this.children[0].innerHTML;
    a = a.slice(1);
    document.getElementById(a).className = "active"; 
    document.getElementsByClassName('tab-mobile')[0].innerHTML = c ;
}
var tabs = document.getElementsByClassName('nav-bar')[0].children;
for (var i=0; i < tabs.length; i++) {
       tabs[i].addEventListener('click', myFunction); 
 }
function toggleMenu() {
    var b= document.getElementsByClassName('nav-bar')[0];
    if(b.className == "nav-bar active") {
        b.className = "nav-bar";
    }
    else{
        b.className = "nav-bar active";
    }    
}
document.getElementsByClassName('toggle-menu')[0].addEventListener('click',toggleMenu);

for (var i=0; i < tabs.length; i++) {
       tabs[i].addEventListener('click', toggleMenu); 
 }

