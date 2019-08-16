;(function($){
    // <= IE8 Popup Start
    if(!-[1,]){
        var IeSupportHtml = "<div id='IeSupportPopup'><div class='IeSupportPopupBackground'></div><div class='IeSupportPopupWrap'><div class='IeSupportPopupImage'></div></div></div>";
        document.getElementById('root').insertAdjacentHTML('afterend', IeSupportHtml);
    }
// <= IE8 Popup End
})(jQuery);