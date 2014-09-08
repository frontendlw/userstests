var lsexample = (function() {
  'use strict';

  function init() {
    activeMenu();
    disabledClient();
    addLoose();
    doGetItem();
    doClear();
  }

  function activeMenu() {
    var $itemActive = $( '[href="' + window.location.pathname + '"]', '.ls-menu' );
    $itemActive.parents('.ls-submenu').children('a').trigger('click');
    $itemActive.parent('li').addClass('ls-active');
  }

  function disabledClient(){
    $('#disabledClient').on('click',function(){
      $('#feedbackDisabled').show();
    });
  }

  function addLoose(){
    $('#addLoose').on('click',function(){
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




  return {
    init:init
  };

}());

$(window).load(function() {
  lsexample.init();
});
