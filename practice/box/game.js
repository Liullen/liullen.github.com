var arr = document.getElementsByTagName('li');
var step_counts = 0;
function clean() {
    document.getElementById('log').innerHTML = '';
}

function log(text) {
    document.getElementById('log').innerHTML += text + '\n';
}

function getEmptyBlock() {
    return document.getElementsByClassName('empty')[0];
}

function getEmptyBlockX() {
    var x = document.getElementsByClassName('empty')[0].getAttribute('x');
    return parseInt(x);
}

function getEmptyBlockY() {
    var y = document.getElementsByClassName('empty')[0].getAttribute('y');
    return parseInt(y);
}

function getTargetBlock(x, y) {
    var target = {};
    for (var i = 0; i < arr.length; i++) {
        var li_x = arr[i].getAttribute('x');
        var li_y = arr[i].getAttribute('y');
        if (x === parseInt(li_x) && y === parseInt(li_y)) {
            target = arr[i];
        }
    }
    return target;
}

function checkDirect(empty_x, empty_y, direct) {
    if (empty_y === 3 && direct === 'up') {
        return false;
    } else if (empty_y === 1 && direct === 'down') {
        return false;
    } else if (empty_x === 1 && direct === 'right') {
        return false;
    } else if (empty_x === 3 && direct === 'left') {
        return false;
    }
    return true;
}

function switch_block(b1, b2) {
    var temp = b1.innerHTML;
    b1.innerHTML = b2.innerHTML;
    b2.innerHTML = temp;

    var temp_class = b1.className;
    b1.className = b2.className;
    b2.className = temp_class;
}

function getDirection(obj) {
    var x = parseInt(obj.getAttribute('x'));
    var y = parseInt(obj.getAttribute('y'));
    var e_x = getEmptyBlockX();
    var e_y = getEmptyBlockY();

    if (e_x + 1 === x && e_y + 0 === y) {
        return 'left';
    } else if (e_x - 1 === x && e_y + 0 === y) {
        return 'right';
    } else if(e_x + 0 === x && e_y + 1 === y) {
        return 'down';
    } else if(e_x + 0 === x && e_y - 0 === y) {
        return 'up';
    }
}

function checkAns() {
    if (arr[0].innerHTML === '1' &&
        arr[1].innerHTML === '2' &&
        arr[2].innerHTML === '3' &&
        arr[3].innerHTML === '4' &&
        arr[4].innerHTML === '5' &&
        arr[5].innerHTML === '6' &&
        arr[6].innerHTML === '7' &&
        arr[7].innerHTML === '8' &&
        arr[8].innerHTML === '&nbsp;') {
        alert('win');
    }
}

function fire(direct) {
    ++step_counts;
    //var direct = this.innerHTML;
    //var direct = '';
    
    log(step_counts + ' ' + direct);
    var empty_x = getEmptyBlockX();
    var empty_y = getEmptyBlockY();
    var empty_block = getEmptyBlock();

    if (!checkDirect(empty_x, empty_y, direct))
        return;
    

    var li = {};
    if (direct === 'up') {
        li = getTargetBlock(empty_x, empty_y + 1);
    } else if (direct === 'left') {
        li = getTargetBlock(empty_x + 1, empty_y);
    } else if (direct === 'down') {
        li = getTargetBlock(empty_x, empty_y - 1);
    } else if (direct === 'right') {
        li = getTargetBlock(empty_x - 1, empty_y);
    }
    switch_block(empty_block, li);

    empty_x = getEmptyBlockX();
    empty_y = getEmptyBlockY();
    checkAns();
};

document.getElementById('clean').onclick = clean;


window.onkeydown  = function (event) {
    var id = event.which;
    console.log(id);
    if (id == '37') {fire('left');}
    else if (id == '38') {fire('up');}
    else if (id == '39') {fire('right');}
    else if (id == '40') {fire('down');}
};