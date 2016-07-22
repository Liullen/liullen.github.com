window.onload = function() {
	//adding the event listerner for Mozilla
	if (window.addEventListener) {
		document.addEventListener('DOMMouseScroll', scroll, false);
	}

	document.onmousewheel = scroll;
	document.addEventListener('DOMMouseScroll', scroll, false);

	var leftBtn = document.getElementsByClassName('btn')[0];
	var rightBtn = document.getElementsByClassName('btn')[1];

	leftBtn.addEventListener('click', moveLeft, false);
	rightBtn.addEventListener('click', moveRight, false);


	window.onkeydown  = function (event) {
    var id = event.which;
    console.log(id);
    if (id == '37') {moveLeft();} //left
    else if (id == '38') {moveLeft();} //up
    else if (id == '39') {moveRight();} // right
    else if (id == '40') {moveRight();} // down
};
}

var keyframecount = 0;

function moveLeft() {
	if (keyframecount > 0)
		keyframecount--;
	animate();
}
function moveRight() {
	keyframecount++;
	animate();	
}

function scroll(event) {
	var delta = 0;
	if (!event) {
		event = window.event;
	}
	// normalize the delta
	if (event.wheelDelta) {
		// IE and Opera
		delta = event.wheelDelta / 120;
		doKeyFrameCount(delta);
	} else if (event.detail) {
		// W3C
		delta = -event.detail / 4; // 1:30
		doKeyFrameCount(delta);
	}

	animate();
}


function doKeyFrameCount(delta) {
	if (delta > 0 && keyframecount > 0) {
		keyframecount--;	
	}
	else if (delta < 0) {
		keyframecount++;	
	}
	
}

var pageNum = document.getElementsByClassName('page')[0];
function animate() {
	pageNum.innerHTML = keyframecount;
	doCount();
	switch (keyframecount) {
	case 0:
		
		break;
	case 1:
		
		break;
	case 2:
		
		break;
	}
}

var counter = document.getElementById('counter');
function doCount() {
	var from = 10;

	if (keyframecount <= 10 && keyframecount >= 0) {
		counter.style.opacity = 1;
		counter.style.top = 0;
		counter.innerHTML = (from - keyframecount);
	} else if (keyframecount > 10) {
		counter.style.opacity = 0;
		counter.style.top = '-2000px';
	}

}