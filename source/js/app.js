(function () {
  let header = document.querySelector('.header'),
      navToogle = document.querySelector('.nav-toggle');

  if (!header || !navToogle) return;

  header.classList.add("header--closed");

  navToogle.addEventListener("click", function (evt) {
    evt.preventDefault();
    header.classList.toggle("header--closed");
    header.classList.toggle("header--opened");
  });
})();
