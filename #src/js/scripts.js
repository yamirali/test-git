@@include('testWebP.js')

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
