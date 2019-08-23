$('.btn_mobile').on('click', function () {
  $('#menu').show('drop', 300, function () {
      $('#panel').addClass('blur');
  });
  $('#panel').addClass('menuOpen');
});

$('#mMenuClose').on('click', function () {
  $('#menu').hide('drop', 300, function () {
      $('#panel').removeClass('menuOpen')
  });
  $('#panel').removeClass('blur');
});
