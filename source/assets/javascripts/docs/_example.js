var lsexample = (function() {
  'use strict';

  function init() {
    activeMenu();
    disabledClient();
    addLoose();
    doGetItem();
    doClear();
    setCookie();
  }

  function activeMenu() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".ls-menu a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('ls-active');
            $(this).parents('.ls-submenu').find('a').trigger('click');
        }
    });
  }

  function disabledClient(){
    $('#disabledClient').on('click',function(){
      $('#feedbackDisabled').show();
    });
  }

  function addLoose(){
    $('#addMessage .ls-btn-primary').on('click',function(){
      $('.ls-alert').hide();
      var inputLoose = $('#inputLoose').val();
      doSetItem();
      $('#addMessage').hide();
      $('.areaLoose').html(inputLoose);
      $('#feedbackLoose').show();
    });
  }

  function doSetItem(){
    var myPost = document.querySelector('#inputLoose').value;
    localStorage.setItem('texto', myPost);
  }

  function doGetItem() {
    var key = localStorage.getItem('texto');
    $('.areaLoose').html(key);
  }

  function doClear() {
    $('[data-target="#removeMessage"]').on('click',function(){
      $('.areaLoose').html('0');
      localStorage.setItem('texto', '0');
    })
  }

  function setCookie(){
    var url = window.location.hostname
    var setCookie = $.cookie('cookie_tour', true);
    var setPath = ($.cookie.defaults.path = url);

    if( setCookie = true && setPath === url){
      $('#ls-feedback-curtain').removeClass('ls-active');
    }
  }

  return {
    init:init
  };

}());

$(window).load(function() {
  lsexample.init();
});
