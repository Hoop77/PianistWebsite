function viewport() 
{
    var e = window, a = 'inner';

    if (!('innerWidth' in window )) 
    {
        a = 'client';
        e = document.documentElement || document.body;
    }

    var result =  
    {
        width   : e[ a + 'Width' ], 
        height  : e[ a + 'Height' ] 
    };

    return result;
}

var circles = [
	$('#circle-0'),
	$('#circle-1'),
	$('#circle-2')
];

var backgrounds = [
	$('<div class="background background-0"></div>'),
	$('<div class="background background-1"></div>'),
	$('<div class="background background-2"></div>')
];

for (var i = 0; i < circles.length; ++i)
{
	var blur = $('<div id="blur-' + i + '" class="background-blur"></div>');
	circles[i].append(blur);
	blur.append(backgrounds[i]);
}

function sizeBlur() {
	for (var i = 0; i < circles.length; ++i)
	{
		view = viewport();
		$('#blur- ' + i).css({
			'width': view['width'],
			'height': view['height']
		});
	}
}

function positionBlur() {
	for (var i = 0; i < circles.length; ++i)
	{
		var position = circles[i].position();
		$('#blur-' + i).css({
			'left': -position.left,
			'top': -position.top
		});
	}
}

function fadeIn(el) {
	$(el).css({'opacity': 1});
	show(el);
}

function fadeOut(el) {
	$(el).css({'opacity': 0});
	hide(el);
}

function show(el) {
	$(el).removeClass('hidden');
}

function hide(el) {
	$(el).addClass('hidden');
}

function turnOn(el) {
	$(el).removeClass('off');
}

function turnOff(el) {
	$(el).addClass('off');
}

$(window).on('load', function()
{
	sizeBlur();
	positionBlur();

	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({ 
		offset: '1000px'
	})
	.on('enter', function() { 
		fadeOut('#circle-0');
		fadeOut('#background-0');
		fadeIn('#circle-1');
		show('#background-1');
		turnOn('#circle-1-hbar');
	})
	.on('leave', function() {
		fadeIn('#circle-0');
		fadeIn('#background-0');
		fadeOut('#circle-1');
		hide('#background-1');
		turnOff('#circle-1-hbar');
	})
	.addTo(controller);

	new ScrollMagic.Scene({ 
		offset: '3000px'
	})
	.on('enter', function() { 
		fadeOut('#circle-1');
		fadeOut('#background-1');
		fadeIn('#circle-2');
		show('#background-2');
		turnOff('#circle-1-hbar');
	})
	.on('leave', function() {
		fadeIn('#circle-1');
		fadeIn('#background-1');
		fadeOut('#circle-2');
		hide('#background-2');
		turnOn('#circle-1-hbar');
	})
	.addTo(controller);
});

$(window).on('resize', function() {
	sizeBlur();
	positionBlur();
});

