
(function(){
    $('.qa__item').on('click', function(e) {
        e.preventDefault();
        $('.qa li.active').removeClass('active');
        $(this).parent().addClass('active');
    });
})();


 /////////////
 //   MAP   //
 /////////////


ymaps.ready(function () {
 var myMap = new ymaps.Map('map', {
     center: [43.110067, 131.874974],
     zoom: 17,
     offset: [100, 100],
     controls: []
 });

 var myPlacemark = new ymaps.Placemark([43.110067, 131.874974], {
     balloonContentBody: [
         '<address>',
         '<strong>Профессиональный аудиторский центр</strong>',
         '<br/>',
         'Адрес: г.Владивосток, ул.Станюковича, д.3, к.2 «Сердце океана»',
         '<br/>',
         'Тел/факс: 8 (423) 279-02-18, 279-02-19, 260-72-88, 260-72-89',
         '</address>'
     ].join('')
 }, {
     preset: 'islands#dotIcon',
     iconColor: '#1CB083'

 });

 myMap.geoObjects.add(myPlacemark);
 myMap.behaviors.disable('scrollZoom');
});


////////////////////////
//  PLACEHOLDERS FIX  //
////////////////////////

(function(){

    if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
    } else if ($.fn.placeholder.input) {
    	$('textarea').placeholder();
    } else {
    	$('input, textarea').placeholder();
    }

})();