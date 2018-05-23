var calender = document.getElementsByClassName('calender')[0];
//全局的方便比较
var selectTime = '2018-06',
    $nowDate = new Date(selectTime),
    $nowMonth = $nowDate.getMonth() + 1,
    $nowDay = new Date().getDate();
//绑定点击事件
function bindEvent(e){
    var pre = document.getElementsByClassName('pre')[0];
    var next = document.getElementsByClassName('next')[0];
    // pre.addEventListener('click', setDate);
    // next.addEventListener('click', setDate);
    if (pre) {
      pre.onclick = setDate;
    }
    if (next) {
      next.setDate;
    }
}

//点击事件对应日期
function setDate(event){
    console.log('event',event);
    var prespan = document.getElementsByClassName('pre')[0].getElementsByTagName('span')[0];
    var nextspan = document.getElementsByClassName('next')[0].getElementsByTagName('span')[0];
    var yearspan = document.getElementsByClassName('now')[0].getElementsByTagName('span')[0];
    var nowspan = document.getElementsByClassName('now')[0].getElementsByTagName('span')[1];
    var preValue = prespan.innerText;
    var nextValue = nextspan.innerText;
    var yearValue = yearspan.innerText;
    var nowValue = nowspan.innerText;

    calender.innerHTML = '';
    var turnDate = new Date();
    var obj = {};
    obj.dateObj = turnDate;
    console.log('111')
    if(event.target.className == 'next'){
        var month = parseInt(nextValue);
        var year = parseInt(yearValue);
        obj.month = month;
        if(nowValue == 12){
            obj.month = 1;
            obj.year = year + 1;
            addDate(obj);
            // nextspan.innerHTML = 2;
        }else{
            obj.month = month;
            obj.year = year;
            addDate(obj);
            // nextspan.innerHTML = month + 1;
        }
    } else {
        var month = parseInt(preValue);
        var year = parseInt(yearValue);
        obj.month = month;
        if(nowValue == 1){
            obj.month = 12;
            obj.year = year - 1;
            addDate(obj);
            // prespan.innerHTML = 11;
        }else{
            obj.month = month;
            obj.year = year;
            console.log('add',obj);
            addDate(obj);
            // prespan.innerHTML = month - 1;
        }
    }
}

//添加对应日期的函数
function createDay (li, index, dayNum, nowMonth) {
    for(var i = 0; i < dayNum; i++){
        li[i + index].innerHTML = i + 1;
        if((i + 1) === $nowDay && nowMonth === $nowMonth){
            li[i + index].className = 'current-time';
        }else if((i + 1) > $nowDay && nowMonth === $nowMonth){
            li[i + index].className = 'future-time';
        }else if(nowMonth > $nowMonth){
            li[i + index].className = 'future-time';
        }
        //设置td的当前时间
        var time = `${i+1}`
        li[i + index].setAttribute('day',time);
    }

}

//闰年判断函数
function isLeapYear (year) {
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }else{
        if(year % 400 === 0){
            return true;
        }else{
            return false;
        }
    }
}

//动态生成日期表格，添加日期
function addDate (nowDate) {
    //生成上一月 下一月 当前年月
    var title = document.createElement('div');
    title.className = 'title';
    var strDate = `<div class = 'current-time-warp'>
      <i class='icon-calender'></i>
      <span class="currentTime">${nowDate.year}年${nowDate.month}月</span>
    </div>`;
    // var strDate = '<div class="pre"><span>' + ( (nowDate.month - 1) === 0 ? 12 : nowDate.month - 1 ) + '</span>月</div>\
    //                <div class="now"><span>' + nowDate.year + '</span>年<span>' + nowDate.month + '</span>月</div>\
    //                <div class="next"><span>' + ( (nowDate.month + 1) === 13 ? 1 : nowDate.month + 1 ) + '月</span></div>'

    title.innerHTML = strDate;
    calender.appendChild(title);

    //生成星期提示
    var week = document.createElement('div');
    week.className = 'week';
    var weekArr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

    for (var i = 0; i < 7; i++) {
        var wLi = document.createElement('li');
        wLi.innerHTML = weekArr[i];
        // if (i === 5 || i === 6){
        //     wLi.className = 'red';
        // }
        week.appendChild(wLi);
    }

    calender.appendChild(week);

    //生成日期表格
    var datebox = document.createElement('table');
    datebox.className = 'datebox';
    for(var i = 0; i < 6; i++) {
        var dUl = document.createElement('tr');

        for(var j = 0; j < 7; j++){
            var dLi = document.createElement('td');
            dUl.appendChild(dLi);
        }
        datebox.appendChild(dUl);
    }

    calender.appendChild(datebox);

    var dayNum;

    //根据传入年月获取对应的天数
    if(nowDate.month === 4 || nowDate.month === 6 || nowDate.month === 9 || nowDate.month === 11){
        dayNum = 30;
    }else if(nowDate.month ===2 && isLeapYear(nowDate.year)){//调用判断闰年函数
        dayNum = 29;
    }else if(nowDate.month === 2){
        dayNum = 28;
    }else{
        dayNum = 31;
    }

    var dLiCollection = datebox.getElementsByTagName('td');
    var nowDay = nowDate.dateObj.getDate();
    var nowMonth = nowDate.month;

    //初始化年月日
    nowDate.dateObj.setFullYear(nowDate.year);
    nowDate.dateObj.setMonth(nowDate.month - 1);
    nowDate.dateObj.setDate(1);
    console.log('setDaate',nowDate.dateObj.setDate(1));

    //从上面初始化年月里判断当月第一天，然后调用添加日期函数添加到对应周几下面

    switch(nowDate.dateObj.getDay()){
        case 0 :
                createDay(dLiCollection, 6, dayNum, nowMonth);
            break;
        case 1 :
                createDay(dLiCollection, 0, dayNum, nowMonth);
            break;
        case 2 :
                createDay(dLiCollection, 1, dayNum, nowMonth);
            break;
        case 3 :
                createDay(dLiCollection, 2, dayNum, nowMonth);
            break;
        case 4 :
                createDay(dLiCollection, 3, dayNum, nowMonth);
            break;
        case 5 :
                createDay(dLiCollection, 4, dayNum, nowMonth);
            break;
        case 6 :
                createDay(dLiCollection, 5, dayNum, nowMonth);
            break;
    }

    bindEvent();
}

//组装函数
function init () {
    var nowDate = new Date();
        dataDate = {};
    dataDate.dateObj = nowDate;
    dataDate.year = nowDate.getFullYear();
    dataDate.month = nowDate.getMonth() + 1;
    addDate(dataDate);
}
init();
{
  let $block = $('.calender'),
      hoverTimeout= null;
  $block.find('td').on('mouseenter', function () {
    if ($(this).hasClass('has-events')) {
      hoverTimeout = setTimeout(() => {
        $(this).find('.right—container').css({'display': 'block'})
      }, 200)
    }
  }).on('mouseleave', function () {
      hoverTimeout = setTimeout(() => {
        $(this).find('.right—container').css({'display': 'none'})
      }, 200)
  })
}


