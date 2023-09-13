    var keyLetters = {
        70 : 'а',
        188 : 'б',
        68 : 'в',
        85 : 'г',
        76 : 'д',
        84 : 'е',
        222 : 'є',
        186 : 'ж',
        80 : 'з',
        66 : 'и',
        83 : 'і',
        221 : 'ї',
        81 : 'й',
        82 : 'к',
        75 : 'л',
        86 : 'м',
        89 : 'н',
        74 : 'о',
        71 : 'п',
        72 : 'р',
        67 : 'с',
        78 : 'т',
        69 : 'у',
        65 : 'ф',
        219 : 'х',
        87 : 'ц',
        88 : 'ч',
        73 : 'ш',
        79 : 'щ',
        77 : 'ь',
        190 : 'ю',
        90 : 'я',
        32 : '',
    };

$('html').on('keydown', function(e){
    if(e.keyCode >= 8 && e.keyCode <= 27) {
        return;
    }

    if(keyLetters.hasOwnProperty(e.keyCode)){
        var src = location.href+'/images/'+e.keyCode+'.png',
            letter = keyLetters[e.keyCode];
        $('body').append('<img src="'+src+'" alt="'+letter+'" title="'+letter+'" class="symbol" />');
    }
    else{
        $('body').append(e.originalEvent.key);
    }
});