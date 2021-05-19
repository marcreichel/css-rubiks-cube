(function() {
    let scale = 0;
    let supportPassive = false;
    try {
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function () { supportPassive = true; }
        }));
    } catch (e) {}

    const wheelOpt = supportPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.addEventListener('DOMMouseScroll', handler, false);
    window.addEventListener(wheelEvent, handler, wheelOpt);
    document.addEventListener('gesturechange', pinchHandler, false);

    function pinchHandler(event) {
        event.preventDefault();

        if (event.scale < 1.0) {
            scale -= event.scale;
        } else if (event.scale > 1.0) {
            scale += event.scale * .1;
        }

        render();
    }

    function handler(event) {
        event.preventDefault();
        scale -= event.deltaY * 0.1;
        render();
    }

    function render() {
        scale = Math.max(scale, 0);

        const factor = 4 + scale;
        const cornerFactor = 4 + scale * .4;
        const edgeFactor = 4 + scale * .6;
        const rotation = scale;

        document.querySelector('.cube.middle.white').style.transform = 'translateY(' + factor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 2 + 'deg)';
        document.querySelector('.cube.middle.red').style.transform = 'translateZ(' + factor + 'em) rotate3d(1, 1, 1, ' + rotation * 5 + 'deg)';
        document.querySelector('.cube.middle.green').style.transform = 'translateX(' + factor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 3 + 'deg)';
        document.querySelector('.cube.middle.orange').style.transform = 'translateZ(' + factor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 7 + 'deg)';
        document.querySelector('.cube.middle.blue').style.transform = 'translateX(' + factor + 'em) rotate3d(1, 1, 1, ' + rotation + 'deg)';
        document.querySelector('.cube.middle.yellow').style.transform = 'translateY(' + factor + 'em) rotate3d(1, 1, 1, ' + rotation * 4 + 'deg)';
        document.querySelector('.cube.corner.corner-white-red-green').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 8 + 'deg)';
        document.querySelector('.cube.corner.corner-white-green-orange').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 10 + 'deg)';
        document.querySelector('.cube.corner.corner-white-orange-blue').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 3 + 'deg)';
        document.querySelector('.cube.corner.corner-white-blue-red').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor * -1 + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 20 + 'deg)';
        document.querySelector('.cube.corner.corner-yellow-red-green').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 9 + 'deg)';
        document.querySelector('.cube.corner.corner-yellow-green-orange').style.transform = 'translateX(' + cornerFactor * -1 + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 5 + 'deg)';
        document.querySelector('.cube.corner.corner-yellow-orange-blue').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 10 + 'deg)';
        document.querySelector('.cube.corner.corner-yellow-blue-red').style.transform = 'translateX(' + cornerFactor + 'em) translateY(' + cornerFactor + 'em) translateZ(' + cornerFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 2 + 'deg)';
        document.querySelector('.cube.edge.edge-white-red').style.transform = 'translateY(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 18 + 'deg)';
        document.querySelector('.cube.edge.edge-white-green').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateY(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 12 + 'deg)';
        document.querySelector('.cube.edge.edge-white-blue').style.transform = 'translateX(' + edgeFactor + 'em) translateY(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 2 + 'deg)';
        document.querySelector('.cube.edge.edge-white-orange').style.transform = 'translateY(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation + 'deg)';
        document.querySelector('.cube.edge.edge-red-green').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 7 + 'deg)';
        document.querySelector('.cube.edge.edge-green-orange').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 11 + 'deg)';
        document.querySelector('.cube.edge.edge-orange-blue').style.transform = 'translateX(' + edgeFactor + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 3 + 'deg)';
        document.querySelector('.cube.edge.edge-blue-red').style.transform = 'translateX(' + edgeFactor + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 10 + 'deg)';
        document.querySelector('.cube.edge.edge-yellow-red').style.transform = 'translateY(' + edgeFactor + 'em) translateZ(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 24 + 'deg)';
        document.querySelector('.cube.edge.edge-yellow-green').style.transform = 'translateX(' + edgeFactor * -1 + 'em) translateY(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 4 + 'deg)';
        document.querySelector('.cube.edge.edge-yellow-orange').style.transform = 'translateY(' + edgeFactor + 'em) translateZ(' + edgeFactor * -1 + 'em) rotate3d(1, 1, 1, ' + rotation * 12 + 'deg)';
        document.querySelector('.cube.edge.edge-yellow-blue').style.transform = 'translateX(' + edgeFactor + 'em) translateY(' + edgeFactor + 'em) rotate3d(1, 1, 1, ' + rotation * 6 + 'deg)';
    }

    /*

    // TODO: interactive rotation

    let dragging = false;
    let posX = null;
    let posY = null;
    let distanceX = 0;
    let distanceY = 0;

    document.addEventListener('mousedown', function(event) {
        event.preventDefault();
        dragging = true;
        posX = event.pageX;
        posY = event.pageY;
    });

    document.addEventListener('mousemove', function(event) {
        if (dragging) {
            distanceX += event.pageX - posX;
            distanceY += event.pageY - posY;
            document.body.style.transform = 'rotateY(' + distanceX * .5 + 'deg) rotateZ(' + distanceY * -.5 + 'deg)';
            posX = event.pageX;
            posY = event.pageY;
        }
    });

    document.addEventListener('mouseup', function(event) {
        if (dragging) {
            event.preventDefault();
            dragging = false;
            posX = null;
            posY = null;
        }
    });*/
})();
