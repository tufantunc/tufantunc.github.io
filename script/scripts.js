function showMenuFunc() {
  var mobileMenu = document.getElementById('showmenu');
  var sidebar = document.getElementById('sidebar');
  var className = "show";
  mobileMenu.addEventListener("click", function(e){
    e.preventDefault();

    var sidebarShown = new RegExp('(^| )' + className + '( |$)', 'gi').test(sidebar.className);
    if(sidebarShown) {
      sidebar.className = "";
    } else {
      sidebar.className = "show";
    }

  });
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(showMenuFunc);
