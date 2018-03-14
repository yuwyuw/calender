//引入jquery
window.$ = window.jQuery = require('jquery')
jQuery.browser={};(function(){jQuery.browser.msie=false; jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)./)){ jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
//计算rem
{
  function RemRelativeFontSize(designWidth) {
    this.designWidth = designWidth || 750;
    this.html = document.documentElement;
    this.setHtmlFontSize();
    var that = this;
    window.addEventListener('resize', function () {
      that.setHtmlFontSize();
    })
  }
  RemRelativeFontSize.prototype = {
    setHtmlFontSize: function () {
      this.html.style.fontSize = $(window).width() / this.designWidth * 100 + 'px';
    }
  };
  var setFontSize = new RemRelativeFontSize();
}
