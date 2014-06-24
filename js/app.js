

/////////////////////////
//  BROWSER DETECTION  //
/////////////////////////

var BrowserDetect = 
{
    init: function () 
    {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) ||       this.searchVersion(navigator.appVersion) || "Unknown";
    },

    searchString: function (data) 
    {
        for (var i=0 ; i < data.length ; i++)   
        {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) != -1)
            {
                return data[i].identity;
            }
        }
    },

    searchVersion: function (dataString) 
    {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },

    dataBrowser: 
    [
        { string: navigator.userAgent, subString: "Chrome",  identity: "Chrome" },
        { string: navigator.userAgent, subString: "MSIE",    identity: "Explorer" },
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.userAgent, subString: "Safari",  identity: "Safari" },
        { string: navigator.userAgent, subString: "Opera",   identity: "Opera" }
    ]

};

BrowserDetect.init();


(function(){
    $('.qa__item').on('click', function(e) {
        e.preventDefault();
        $('.qa li.active').removeClass('active');
        $(this).parent().addClass('active');
    });

    if (BrowserDetect.browser == 'Firefox') {
        $('#audlogo').remove();
        $('html').addClass('no-svg');
    }
})();


 /////////////
 //   MAP   //
 /////////////

(function(){

    if (document.getElementById('map')) {

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

    }

})();


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