@@include('testWebP.js')
@@include('menu_icon.js')

document.getElementById("re").addEventListener("click", () => {
    window.open("../../newsItemPage.html","_self")
})
var x = document.getElementById('dropdown-content');
function myFunction() {
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

for(var menuItem = 0; menuItem < menuIcons.length; menuItem++) {
    var elem = document.getElementById(menuIcons[menuItem].id)
    elem.style.backgroundImage = `url(${menuIcons[menuItem].idle})`
    if(document.getElementById(menuIcons[menuItem].parentId).classList.contains("menu__item_active")) {
        elem.style.backgroundImage = `url(${menuIcons[menuItem].active})`

        // document.getElementById(menuIcons[menuItem].parentId).addEventListener("mouseenter",()=>{
        //     elem.style.backgroundImage = `url(${menuIcons[menuItem].idle})`
        // })
    }
    
}