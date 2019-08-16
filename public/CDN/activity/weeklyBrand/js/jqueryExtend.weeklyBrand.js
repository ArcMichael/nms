;(function($){
    $.fn.extend({
        weeklyBrand:function( params ){
            var defaults = {}
            var options = $.extend( defaults, params );
            return this.each(function(){
                var _weeklyBrand = function(){};
                _weeklyBrand.prototype = {
                    params:function( _options ){
                        this.P = _options; // prototype
                        this.Images = this.P.preLoad;
                        this.ImagesLoad = {};
                        return this
                    },
                    isIE:function(){
                        if(!-[1,]){ return true }
                        return false
                    },
                    compatibleImageLoad:function( image ){

                        var postAction = function(){};
                        function imageLoadPost(){
                            postAction()
                        }
                        var Images = new Image();
                        Images.src = image;
                        Images.onload = function(){ imageLoadPost() }
                        Images.onerror = function(){ imageLoadPost() }

                        return { done:function(f){ postAction = f || postAction } }
                    },
                    compatible:function(){
                        var HTML = '<div id="weeklyBrand"><div class="pick_compatible_bg"></div><div class="pick_compatible_main"><a class="pick_compatible_link" href="#"><img src="'+ this.P.compatibleContent + '" /></a><div class="pick_compatible_close"><img src="'+ this.P.compatibleClose  +'" /></div> </div></div>';
                        $('body').append( HTML );
                        this.compatibleBind();
                        return this
                    },
                    compatibleBind:function(){
                        var that = this;
                        $('.pick_compatible_link').click(function(){
                            window.location.href = that.P.link + "|" + that.getTime();
                        })
                        $('.pick_compatible_close').click(function(){
                            $('#weeklyBrand').hide()
                        })
                    },
                    getTime:function(){
                        var myDate = new Date();
                        var Hours = (myDate.getHours() < 10) ? "0"+myDate.getHours() : myDate.getHours().toString();
                        var Minutes = (myDate.getMinutes() < 10) ? "0"+myDate.getMinutes() : myDate.getMinutes().toString();
                        return Hours + Minutes;
                    },
                    bind:function(){

                        var that = this;

                        $('#weeklyBrand .pink_content').click(function(){
                            window.location.href = that.P.link + "|" + that.getTime();
                        })
                        $('#weeklyBrand .pink_close').click(function(){
                            $('#weeklyBrand').hide()
                        })
                    },
                    render:function(){
                        var HTML = '<div id="weeklyBrand"><div class="pick_main"><div class="pink_background" style="background-image: url('+ this.ImagesLoad.background +')"></div><div class="pink_onside" style="background-image: url('+ this.ImagesLoad.onside +')"></div><div class="pink_inside" style="background-image: url('+ this.ImagesLoad.inside +')"></div><a href="javascript:;" class="pink_content" style="background-image: url('+ this.ImagesLoad.content +')"></a><div class="pink_close_wrap"><div class="pink_close" style="background-image: url('+ this.ImagesLoad.close +')"></div></div><div class="pink_theme_wrap"><div class="pink_theme" style="background-image: url('+ this.ImagesLoad.theme +')"></div></div></div><div class="circleWrap"><div class="circlemain" id="weeklyCircle"></div></div><div class="bg"></div></div>'
                        $('body').append( HTML );
                        this.bind()
                        return this
                    },
                    preLoadImages:function( images ){
                        var proList = [];

                        for(var i in images){
                            proList.push(images[i].url)
                            this.ImagesLoad[ images[i].content ] = images[i].url;
                        }

                        var newImages = [], loadedImages = 0, postAction = function(){}, arrayImages = ( typeof proList != "object" ) ? [ proList ] : proList ;
                        function imageLoadPost(){
                            loadedImages ++;
                            if( loadedImages == arrayImages.length ){ postAction() }
                        }
                        for( var i = 0; i < arrayImages.length; i++ ){
                            newImages[i] = new Image();
                            newImages[i].src = arrayImages[i];
                            newImages[i].onload = function(){ imageLoadPost() }
                            newImages[i].onerror = function(){ imageLoadPost() }
                        }
                        return { done:function(f){ postAction = f || postAction } }
                    },
                    play:function(){
                        setTimeout(function () {
                            var bar = new ProgressBar.Circle(weeklyCircle, { strokeWidth: 50,easing: 'easeOutCirc',duration: 800,color: '#ddd',svgStyle: null });
                            bar.animate(1.0, function(){
                                $('.circleWrap').animate({
                                    'width':'10px', 'opacity':0, "height":'10px', 'margin-top':'-5px', 'margin-left':'-5px'
                                },{
                                    easing: 'easeOutCirc', duration: 30, complete:function(){
                                        $('.pink_content')
                                            .animate({"width":"640px", "height":"640px", 'opacity':1, 'margin-top':'-320px', 'margin-left':'-320px'}, 400)
                                            .animate({"width":"580px", "height":"580px", 'opacity':1, 'margin-top':'-290px', 'margin-left':'-290px'}, 160)
                                            .animate({"width":"620px", "height":"620px", 'opacity':1, 'margin-top':'-310px', 'margin-left':'-310px'}, 120)
                                            .animate({"width":"600px", "height":"600px", 'opacity':1, 'margin-top':'-300px', 'margin-left':'-300px'}, 200)

                                        $('.pink_close')
                                            .delay(400)
                                            .animate({"width":"66px", "height":"66px", 'margin-top':'-33px', 'margin-left':'-33px', 'opacity':1}, 200)

                                        $('.pink_theme')
                                            .delay(400)
                                            .animate({"width":"132px", "height":"132px", 'margin-top':'-66px', 'margin-left':'-66px', 'opacity':1}, 200)
                                            .animate({"width":"120px", "height":"120px", 'margin-top':'-60px', 'margin-left':'-60px', 'opacity':1}, 200)
                                            .addClass('rotate')

                                        $('.pink_inside')
                                            .delay(400)
                                            .animate({"width":"600px", "height":"600px", 'margin-top':'-300px', 'margin-left':'-300px', 'opacity':1}, 200)
                                            .addClass('cw');

                                        $('.pink_onside')
                                            .delay(680)
                                            .animate({"width":"660px", "height":"660px", 'margin-top':'-330px', 'margin-left':'-330px', 'opacity':1}, 100)
                                            .animate({"width":"600px", "height":"600px", 'margin-top':'-300px', 'margin-left':'-300px', 'opacity':1}, 90)
                                            .addClass('ccw');

                                        $('.pink_background')
                                            .delay(400)
                                            .animate({"width":"660px", "height":"660px", 'margin-top':'-330px', 'margin-left':'-330px', 'opacity':1}, 90)
                                            .animate({"width":"600px", "height":"600px", 'margin-top':'-300px', 'margin-left':'-300px', 'opacity':1}, 400)

                                    }
                                })
                            })
                        }, 1500)
                    },
                    init:function(){
                        if( this.isIE() ){ console.log('IE8'); this.compatible(this.P.compatibleContent).done( this.compatible() ) } else{ this.preLoadImages( this.Images).done( this.render().play() ) }
                    }
                }
                options.element = this;
                new _weeklyBrand().params( options ).init();
            })
        }
    })
})(jQuery);