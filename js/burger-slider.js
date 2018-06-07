//Слайдер с бургерами
  
$(function(){

    var moveSlide = function (container,slideNum) {
      var 
        items = container.find('.burgers__item'),
        activeSlide = items.filter('.active'),
        regItem = items.eq(slideNum),
        regIndex = reqItem.index(),
        list = container.find('.burgers__list'),
        duration = 500;
      
      if (reqItem.length) {
        list.animate({
          'left' : -reqIndex * 100 + '%'
        }, duration, function(){
          activeSlide.removeClass('active');
          reqItem.addClass('active');
        });
      }   
    }

    $('.slider-btn').on('click', function(e){

      e.preventDefault();
      
      var $this = $(this),
        container = $this.closest('.burgers__container');
        items = $('.burgers__item', container),
        activeItem = items.filter('.active'),
        existedItem, edgeItem, reqItem;

      if ($this.hasClass('.arrow-burgers-right')) {
        existedItem = activeItem.next();
        edgeItem = items.first();
      }
      if ($this.hasClass('.arrow-burgers-left')) {
        existedItem = activeItem.prev();
        edgeItem = items.last();  

      } 
      
      reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

      moveSlide(container, reqItem);
    });
  });
