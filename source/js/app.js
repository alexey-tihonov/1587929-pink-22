/* header */
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

/* map */
(function () {
  let coordinate = [59.938635, 30.323118];

  let initMap = function (coordinate) {
    ymaps.ready(function () {
      let map = new ymaps.Map('map', {
        center: coordinate,
        zoom: 16,
        controls: []
      });

      let placemark = new ymaps.Placemark(coordinate);
      map.geoObjects.add(placemark);

      let zoomControl = new ymaps.control.ZoomControl({
        options: {
          position: {
            left: 10,
            bottom: 50
          }
        }
      });

      map.behaviors.disable('scrollZoom');
      map.controls.add(zoomControl);
    });
  };


  try {
    initMap(coordinate);
  } catch(e) {
    console.log(e);
  }
})();
