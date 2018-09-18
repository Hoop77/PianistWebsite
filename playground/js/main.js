$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to('#keys', 0.5, {left: "-33.33333%"});    

    var pinKeysScene = new ScrollMagic.Scene({
        triggerElement: "#keys",
        triggerHook: 0
    })
    .setPin("#keys")
    .addTo(controller);

    var moveKeysScene = new ScrollMagic.Scene({
        triggerElement: "#keys",
        triggerHook: 0,
        duration: "100%"
    })
    .setTween(tween)
    .addTo(controller);
});