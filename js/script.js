$(function () {
	var links = $('.sidebar-links > div');

  links.on('click', function () {
		links.removeClass('selected');
		$(this).addClass('selected');
	});
});