var url = 'http://phpstack-93963-566910.cloudwaysapps.com/chrome/';
//var url = 'http://bitk.locak/chrome/';

function loadContent()
{
	$.ajaxSetup(
	{
	    headers: 
	    {
	    	'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	    }
    });

	$.ajax(
	{
		url: url,
		type: 'post',
		success: function(data)
		{
			$('.main-container').html(data.html);
		}
	});
}

$(document).on('submit', '#loginForm', function()
{
	var data = $('#loginForm').serialize();	

	$.ajaxSetup(
	{
	    headers: 
	    {
	    	'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	    }
    });

	$.ajax(
	{
		url: url + 'login',
		type: 'post',
		data:data,
		success: function(data)
		{
			alert(data.html);
			$('.main-container').html(data.html);
		}
	});

	return false;

});


$(document).ready(function()
{
	loadContent();

});

function equal_heights($) {

	$('.stack-links .single-link .title').matchHeight({
		byRow: false,
	    property: 'height'
	});

	// Dashboard Tiles
	$('.dash-stack-tile').matchHeight({
		byRow: false,
	    property: 'height'
	});

	/*
	$('.dash-stack-tile > .stack-content > .title').matchHeight({
		byRow: false,
	    property: 'height'
	});
	*/

	//Dashboard People
	$('.stack-panel-people .people-box').matchHeight({
		byRow: false,
	    property: 'height'
	});

	//People Page
	$('.people-page .people-box').matchHeight({
		byRow: false,
	    property: 'height'
	});

}

function dashboard_controls($) {

	// Dashboard Layout Controls
	$('.layout-control > .btn-control').on('click', function() {
		$('.layout-control > .btn-control').removeClass('active');
		$(this).addClass('active');
	});

}
