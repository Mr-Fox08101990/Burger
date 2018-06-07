$(document).ready(function () {
 

  $(window).ready(function(){
    /* немного другой эффект появления, и задержка в 2 секунды */
    setTimeout ("$('.page-image__pic2').show( );",2000);
  });

  $("#nav-toggle").click(function(){
    $(this).toggleClass('active');
    $(".nav").toggleClass("active"); return false;
  });
  
  // Состав бургера

  $('.composition__link').on('click', e => {
    e.preventDefault();
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
});

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
  var map = new ymaps.Map('ya-map', {
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
      iconImageHref: '../img/map-marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57],
    });
  }

  var clusterer = new ymaps.Clusterer({
    clusterIconContentLayout: null
  });

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
};
  

//OnePage Scroll
  // $(".wrapper").onepage_scroll({
  //   sectionContainer: ".section", // контейнер, к которому будет применяться скролл
  //   easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
  //   animationTime: 1000, // время анимации
  //   pagination: false, // скрыть или отобразить пагинатор
  //   // updateURL: true // обновлять URL или нет
  // });

  // const sections = $(".section");
  // const display = $(".maincontent");
  // let inScroll = false;

  // const mobileDetect = new MobileDetect(window.navigator.userAgent);
  // const isMobile = mobileDetect.mobile();

  // const performTransition = sectionEq => {
  //   const position = `${sectionEq * -100}%`;
  
  //   if (inScroll) return;
  
  //   inScroll = true;
  
  //   sections
  //     .eq(sectionEq)
  //     .addClass("active")
  //     .siblings()
  //     .removeClass("active");
  
  //   display.css({
  //     transform: `translate(0, ${position})`,
  //     "-webkit-transform": `translate(0, ${position})`
  //   });
  
  //   setTimeout(() => {
  //     inScroll = false;
  //   }, 1300); // продолжительность анимации + 300ms - потому что закончится инерция
  // };

  // const scrollToSection = direction => {
  //   const activeSection = sections.filter(".active");
  //   const nextSection = activeSection.next();
  //   const prevSection = activeSection.prev();
  
  //   if (direction === "up" && prevSection.length) {
  //     performTransition(prevSection.index());
  //   }
  
  //   if (direction === "down" && nextSection.length) {
  //     performTransition(nextSection.index());
  //   }
  // };

  // $(document).on({
  //   wheel: e => {
  //     const deltaY = e.originalEvent.deltaY;
  //     const direction = deltaY > 0 
  //       ? "down" 
  //       : "up";
  
  //     scrollToSection(direction);
  //   },
  //   keydown: e => {
  //     switch (e.keyCode) {
  //       case 40:
  //         scrollToSection("down");
  //         break;
  
  //       case 38:
  //         scrollToSection("up");
  //         break;
  //     }
  //   },
  //   touchmove: e => e.preventDefault()
  
  //   // touchstart touchend touchmove 
  // });

  // if (isMobile) {
  //   $(document).swipe({
  //     swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  //       /**
  //        * плагин возвращает фактическое...
  //        * ...
  //        */
  //       const scrollDirection = direction === 'down' ? 'up' : 'down';
        
  //       scrollToSection(scrollDirection);
  //     }
  //   });
  // }

  //Слайдер с бургерами
  
  // $(function(){

  //   var moveSlide = function (container,slideNum) {
  //     var 
  //       items = container.find('.burgers__item'),
  //       activeSlide = items.filter('.active'),
  //       regItem = items.eq(slideNum),
  //       regIndex = reqItem.index(),
  //       list = container.find('.burgers__list'),
  //       duration = 500;
      
  //     if (reqItem.length) {
  //       list.animate({
  //         'left' : -reqIndex * 100 + '%'
  //       }, duration, function(){
  //         activeSlide.removeClass('active');
  //         reqItem.addClass('active');
  //       });
  //     }   
  //   }

  //   $('.slider-btn').on('click', function(e){

  //     e.preventDefault();
      
  //     var $this = $(this),
  //       container = $this.closest('.burgers__container');
  //       items = $('.burgers__item', container),
  //       activeItem = items.filter('.active'),
  //       existedItem, edgeItem, reqItem;

  //     if ($this.hasClass('.arrow-burgers-right')) {
  //       existedItem = activeItem.next();
  //       edgeItem = items.first();
  //     }
  //     if ($this.hasClass('.arrow-burgers-left')) {
  //       existedItem = activeItem.prev();
  //       edgeItem = items.last();  

  //     } 
      
  //     reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

  //     moveSlide(container, reqItem);
  //   });
  // });

