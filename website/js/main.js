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

$(window).on('load', function()
{
	sizeBlur();
	positionBlur();

	var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({ 
		triggerElement: 'body', 
		triggerHook: 'onLeave',
		offset: '1000px'
	})
	.setClassToggle('#circle-0', "hide")
	.addTo(controller);

	new ScrollMagic.Scene({ 
		triggerElement: 'body', 
		triggerHook: 'onLeave',
		offset: '1000px'
	})
	.setClassToggle('#background-0', 'hide')
	.addTo(controller);

	new ScrollMagic.Scene({ 
		triggerElement: 'body', 
		triggerHook: 'onLeave',
		offset: '1000px',
		duration: '2000px'
	})
	.setClassToggle('#circle-1', 'show')
	.addTo(controller);

	new ScrollMagic.Scene({ 
		triggerElement: 'body', 
		triggerHook: 'onLeave',
		offset: '1000px',
		duration: '2000px'
	})
	.setClassToggle('#circle-1-hbar', 'show')
	.addTo(controller);

	new ScrollMagic.Scene({ 
		triggerElement: 'body', 
		triggerHook: 'onLeave',
		offset: '3000px'
	})
	.setClassToggle('#background-1', 'hide')
	.addTo(controller);

	new ScrollMagic.Scene({ 
		triggerElement: 'body', 
		triggerHook: 'onLeave',
		offset: '3000px'
	})
	.setClassToggle('#circle-2', 'show')
	.addTo(controller);
});

$(window).on('resize', function() {
	sizeBlur();
	positionBlur();
});

