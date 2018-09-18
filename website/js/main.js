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
	//$('#circle-1'),
	//$('#circle-2')
];

var backgrounds = [
	$('<div class="background background-0"></div>'),
	//$('<div class="background background-1"></div>'),
	//$('<div class="background background-2"></div>')
];

for (var i = 0; i < circles.length; ++i)
{
	var blurredContent = $('<div id="blurredContent-' + i + '" class="blurredContent"></div>');
	circles[i].append(blurredContent);
	blurredContent.append(backgrounds[i]);
}

sizeContent();
positionBlur();

function sizeContent() {
	for (var i = 0; i < circles.length; ++i)
	{
		view = viewport();
		$('#blurredContent- ' + i).css({
			'width': view['width'],
			'height': view['height']
		});
	}
}

function positionBlur() {
	for (var i = 0; i < circles.length; ++i)
	{
		var position = circles[i].position();
		$('#blurredContent-' + i).css({
			'left': -position.left,
			'top': -position.top
		});
	}
}

$(window).on('resize', function() {
	sizeContent();
	positionBlur();
});
