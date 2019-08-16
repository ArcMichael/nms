;(function(window,$){
    $.fn.extend({
        setOmniture:function( params ){
            var defaults = {};
            var options = $.extend( defaults, params );
            return this.each(function(){
                var _setOmniture = function(){};
                _setOmniture.prototype = {
                    params:function( _options ){
                        this.P = _options;
                        this.D = {};
                        return this
                    },
                    supplement:function(){
                        if( this.P.element && this.P.element.href.match(/\?/) ){
                            // 已经加过 omniture
                            return
                        }
                        if( this.P.element && this.P.element.href && this.P.element.dataset && this.P.element.dataset.omniture &&  this.P.element.dataset.omniture.match(/\?/) ){
                            this.D.OM = this.P.element.dataset.omniture;
                            this.D.LINK = this.P.element.href
                        }
                        this.bind();
                        return this
                    },
                    bind:function(){
                        if( this.D.OM && this.D.LINK ){
                            this.P.element.href = this.D.LINK + this.D.OM
                        }
                    },
                    init:function(){
                        this.supplement();
                        return this
                    }
                }
                options.element = this;
                new _setOmniture().params( options ).init();
            })
        },
    })

})(window,jQuery);

;(function($){
    $('[data-omniture]').each(function(){
        $(this).setOmniture()
    })
})(jQuery);