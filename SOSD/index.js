window.addEventListener('load', function() {

    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var contents_focus = document.querySelector('.contents-focus');
    var focusWidth = contents_focus.offsetWidth;
    // 2. 动态生成圆圈
    var ul = contents_focus.querySelector('ul');
    var ol = contents_focus.querySelector('.circle');
    //console.log(lis.length);
    for (var i = 0; i < 3; i++) {
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号
        li.setAttribute('index', i);
        ol.appendChild(li);
        //  小圆圈的排他思想 直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            // num = circle = index;
            console.log(focusWidth);
            console.log(index);

            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    // 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;

            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });

            circle++;

            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });

    // 左侧按钮
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });

            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function() {
        arrow_r.click();
    }, 2000);

})