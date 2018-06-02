$(document).ready(function () {
 

  $(window).ready(function(){
    /* немного другой эффект появления, и задержка в 2 секунды */
    setTimeout ("$('.page-image__pic2').show( );",2000);
  });

  $("#nav-toggle").click(function(){
    $(this).toggleClass('active');
    $(".nav").toggleClass("active"); return false;
  });
  
  //popups
  //popup-review
  const reviews = document.querySelector(".reviews-list");
  const openBttn = document.querySelectorAll(".popup-btn-review");
  const reviewPopup = document.querySelector(".popup-wrap-review");

  for (i=0; i<openBttn.length; i++) {
    openBttn[i].addEventListener('click', function(e) {
      reviewPopup.style.display="flex";
    });
  };

  const closePopup = document.querySelector(".popup-close");
  closePopup.addEventListener('click', function(e) {
    e.preventDefault();
    reviewPopup.style.display="none";
  }) 
  //popup-form
  const openButton = document.querySelector(".openOverlay");
  const template = document.querySelector("#overlayTemplate").innerHTML;
  const overlay = createOverlay(template);

  openButton.addEventListener("click", function() {
    overlay.open();
    overlay.setContent("Спасибо, данные сохранены");
  });

  function createOverlay(template) {
    let fragment = document.createElement('div');

    fragment.innerHTML = template;

    const overlayElement = fragment.querySelector(".overlay");
    const contentElement = fragment.querySelector(".content");
    const closeElement = fragment.querySelector(".close");
    
    fragment = null;

    overlayElement.addEventListener("click", e => {
      if (e.target === overlayElement) {
        closeElement.click();
      }
    });
    closeElement.addEventListener("click", () => {
      document.body.removeChild(overlayElement);
    });

    return {
      open() {
        document.body.appendChild(overlayElement);
      },
      close() {
        closeElement.click();
      },
      setContent(content) {
        contentElement.innerHTML = content;
      }
    };
  }

  //OnePage Scroll
  $(".wrapper").onepage_scroll({
    sectionContainer: ".section", // контейнер, к которому будет применяться скролл
    easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
    animationTime: 1000, // время анимации
    pagination: false, // скрыть или отобразить пагинатор
    // updateURL: true // обновлять URL или нет
  });

  //Слайдер с бургерами
  
  var prev = document.querySelector('arrow-burgers-left');
  var next = document.querySelector('arrow-burgers-right');
  var slideIndex = 1;
  showSlides(slideIndex);


  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }


  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("burgers__item");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    
    slides[slideIndex-1].style.display = "flex"; 
  }

  //Аккордеон для Команды
  const teamItem = document.querySelectorAll('.accordion-team-item');

  for (let i=0; i<teamItem.length; i++) {
    teamItem[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (teamItem[i].classList.contains('accordion-team-item__active')){
        teamItem[i].classList.remove('accordion-team-item__active');
      } else {
        for (let i=0; i<teamItem.length; i++) {
          if (teamItem[i].classList.contains('accordion-team-item__active')){
            teamItem[i].classList.remove('accordion-team-item__active');
          }
        }       
      teamItem[i].classList.add('accordion-team-item__active');
      };
    });
  };

  //Аккордион для меню
  const menuItem = document.querySelectorAll('.menu-acco__item');

  for (let i=0; i<teamItem.length; i++) {
    menuItem[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (menuItem[i].classList.contains('menu-acco__item--active')){
        menuItem[i].classList.remove('menu-acco__item--active');
      } else {
          for (let i=0; i<menuItem.length; i++) {
            if (menuItem[i].classList.contains('menu-acco__item--active')){
              menuItem[i].classList.remove('menu-acco__item--active');
            }
          }       
      menuItem[i].classList.add('menu-acco__item--active');
      };
    });
  };
  
  // Phone mask

  var inp = document.getElementById("phone_mask");

  var old = 0;

  inp.onclick = function () {
    inp.value = "+";
    old = 0;
  }

  inp.onkeydown = function () {
    var curLen = inp.value.length;

    if (curLen < old) {
      old--;
      return;
    }

    if (curLen == 2)
      inp.value = inp.value + "(";

    if (curLen == 6)
      inp.value = inp.value + ")-";

    if (curLen == 11)
      inp.value = inp.value + "-";

    if (curLen == 14)
      inp.value = inp.value + "-";

    if (curLen > 16)
      inp.value = inp.value.substring(0, inp.value.length - 1);

    // old++;
  }



  // // Карта
  ymaps.ready(init);

  var placemarks = [
      {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
          'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
          '</div>'
        ]
      },
      {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
          'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
          '</div>'
        ]
      },
      {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
          'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
          '</div>'
        ]
      }
  ],
  geoObjects= [];

  function init() {
    var map = new ymaps.Map('map-image', {
      center: [59.94, 30.32],
      zoom: 12,
      controls: ['zoomControl'],
      behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
      geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent.join('')
      },
      {
        iconLayout: 'default#image',
        iconImageHref: './img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
      });
    }

    var clusterer = new ymaps.Clusterer({
      clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
  }
  
  
});



