function show() {
	var html = '<div class="card">' +
					'<div class="pattern ' + this.pattern + '">' + 
					'<div class="point">' + this.value + '</div></div>' + 
				'</div>';

	return html;
};

function Card(p, v) {
	this.pattern = p;
	this.value = v;
	this.show = show;
};

var cards = [];
var flowers = ['club', 'heart', 'diamond', 'spade'];


for (var fl = 0; fl < flowers.length; fl++) {
	for (var p = 1; p <= 13; p++) {
		cards.push(new Card(flowers[fl], p));
	}
}

cards.shuffle = function () {
	var counter = this.length - 1;
	while (counter > 0) {
		var index = Math.floor(Math.random() * counter);
		
		// swap
		var temp = this[counter];
	    this[counter] = this[index];
	    this[index] = temp;

		counter--;
	}
}

function clean() {
	var content = document.getElementById('content');
	content.innerHTML = '';
}

cards.draw = function() {
	var html = '';
	for (var i=0; i<this.length; i++) {
		html += (show.call(this[i]));
	}
	document.getElementById('content').innerHTML = html;
}


function cover() {
	var cardElems = document.getElementsByClassName('point');
	for (var i = 0; i < cardElems.length; i++) {
		cardElems[i].style = 'color: rgba(0,0,0,0);';
	}
}
