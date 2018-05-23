(function ($) {
  $.fn.calender = function(options) {
    const selectTime = checkSelectTime(options.selectTime);
      eventListData = options.eventListData;
      $el = $('.calender')[0],
      $block = $('.calender'),
      selectDate = new Date(selectTime),
      selectMonth = selectDate.getMonth() + 1,
      selectDay = new Date().getDate(),
      prevLink = options.prevLink ? options.prevLink : 'javascript:;';
      nextLink = options.nextLink ? options.prevLink : 'javascript:;';

    // check selectTime
    function checkSelectTime (time) {
      return time;
      console.log('selectTime', time);
    }
    //绑定点击事件
    function bindEvent(e){
      let pre = document.getElementsByClassName('pre')[0],
        next = document.getElementsByClassName('next')[0];
      // pre.addEventListener('click', setDate);
      // next.addEventListener('click', setDate);
      if (pre) pre.onclick = setDate;
      if (next) next.setDate;
    }

    //点击事件对应日期
    function setDate(event){
      console.log('setDate' , event);
      let prespan = document.getElementsByClassName('pre')[0].getElementsByTagName('span')[0],
        nextspan = document.getElementsByClassName('next')[0].getElementsByTagName('span')[0],
        yearspan = document.getElementsByClassName('now')[0].getElementsByTagName('span')[0],
        nowspan = document.getElementsByClassName('now')[0].getElementsByTagName('span')[1],
        preValue = prespan.innerText,
        nextValue = nextspan.innerText,
        yearValue = yearspan.innerText,
        nowValue = nowspan.innerText;
      $el.innerHTML = '';
      let turnDate = new Date(),
        obj = {};
      obj.dateObj = turnDate;
      if (event.target.className == 'next'){
          let month = parseInt(nextValue),
            year = parseInt(yearValue);
          obj.month = month;
          if (nowValue == 12){
            obj.month = 1;
            obj.year = year + 1;
            addDate(obj);
          } else {
            obj.month = month;
            obj.year = year;
            addDate(obj);
          }
      } else {
          let month = parseInt(preValue),
            year = parseInt(yearValue);
          obj.month = month;
          if (nowValue == 1){
            obj.month = 12;
            obj.year = year - 1;
            addDate(obj);
          } else {
            obj.month = month;
            obj.year = year;
            addDate(obj);
          }
      }
    }

    //添加对应日期的函数
    function createDay (li, index, dayNum, nowMonth) {
      for (var i = 0; i < dayNum; i++){
        li[i + index].innerHTML = i + 1;
        if ((i + 1) === selectDay && nowMonth === selectMonth) {
          li[i + index].className = 'current-time';
        } else if ((i + 1) > selectDay && nowMonth === selectMonth) {
          li[i + index].className = 'future-time';
        } else if (nowMonth > selectMonth) {
          li[i + index].className = 'future-time';
        }
        //设置td的当前时间
        var time = `${i+1}`
        li[i + index].setAttribute('day',time);
      }
    }

    //闰年判断函数
    function isLeapYear (year) {
      if (year % 4 === 0 && year % 100 !== 0){
        return true;
      } else {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      }
    }

    //动态生成日期表格，添加日期
    function addDate (nowDate) {
      //生成上一月 下一月 当前年月
      let title = document.createElement('div'),
        strDate = `<div class = 'current-time-warp'>
                      <i class='icon-calender'></i>
                      <span class="currentTime">${nowDate.year}年${nowDate.month}月</span>
                    </div>
                    <div class="switch-warp">
                      <a class="prev-btn" href="${prevLink}" target="_blank"><i class="icon-prev"></i></a>
                      <a class="next-btn" href="${nextLink}" target="_blank"><i class="icon-next"></i></a>
                    </div>
                    `,
        switchBtn =  document.createElement('div');
      title.className = 'title';
      title.innerHTML = strDate;
      $el.appendChild(title);


      //生成星期提示
      let week = document.createElement('div'),
        weekArr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
      week.className = 'week';

      for (var i = 0; i < 7; i++) {
        var wLi = document.createElement('li');
        wLi.innerHTML = weekArr[i];
        week.appendChild(wLi);
      }

      $el.appendChild(week);

      //生成日期表格
      let datebox = document.createElement('table');
      datebox.className = 'datebox';
      for (var i = 0; i < 6; i++) {
        var dUl = document.createElement('tr');
        for (var j = 0; j < 7; j++){
          var dLi = document.createElement('td');
          dUl.appendChild(dLi);
        }
        datebox.appendChild(dUl);
      }
      $el.appendChild(datebox);
      let dayNum;
      //根据传入年月获取对应的天数
      if (nowDate.month === 4 || nowDate.month === 6 || nowDate.month === 9 || nowDate.month === 11) {
          dayNum = 30;
      } else if (nowDate.month ===2 && isLeapYear(nowDate.year)) {//调用判断闰年函数
          dayNum = 29;
      } else if (nowDate.month === 2) {
          dayNum = 28;
      } else {
          dayNum = 31;
      }
      let dLiCollection = datebox.getElementsByTagName('td'),
        nowDay = nowDate.dateObj.getDate(),
        nowMonth = nowDate.month;
      //初始化年月日
      nowDate.dateObj.setFullYear(nowDate.year);
      nowDate.dateObj.setMonth(nowDate.month - 1);
      nowDate.dateObj.setDate(1);
      //从上面初始化年月里判断当月第一天，然后调用添加日期函数添加到对应周几下面
      console.log('day',nowDate.dateObj);
      switch(nowDate.dateObj.getDay()){
        case 0:
          createDay(dLiCollection, 6, dayNum, nowMonth);
          break;
        case 1:
          createDay(dLiCollection, 0, dayNum, nowMonth);
          break;
        case 2:
          createDay(dLiCollection, 1, dayNum, nowMonth);
          break;
        case 3:
          createDay(dLiCollection, 2, dayNum, nowMonth);
          break;
        case 4:
          createDay(dLiCollection, 3, dayNum, nowMonth);
          break;
        case 5:
          createDay(dLiCollection, 4, dayNum, nowMonth);
          break;
        case 6:
          createDay(dLiCollection, 5, dayNum, nowMonth);
          break;
      }
      bindEvent();
    }

    //组装函数
    function init () {
      // let nowDate = new Date();
      let dataDate = {
        'dateObj': selectDate,
        'year': selectDate.getFullYear(),
        'month': selectMonth
      };
      // dataDate.dateObj = nowDate;
      // dataDate.year = nowDate.getFullYear();
      // dataDate.month = nowDate.getMonth() + 1;
      addDate(dataDate);
      renderEvents();
      renderHoverEvent();
      HoverEventList();
    }

    //日程渲染
    function renderEvents () {
      let filterListData = checkevents(),
        $td = $block.find('.datebox td');
      if (filterListData.length) {
        $td.each(function (k, i) {
          let $node_li = '',
              $hover_node_li = '',
              $hover_container = '',
              $node_ul = '',
              index = null,
              count = 0;
          filterListData.forEach(function (item, key) {
            if ($(i).html() === item.day) {
              let title = item.title ? item.title: '&nbsp;',
                  icon = item.icon ? item.icon : '',
                  className = item.className ? item.className: '',
                  url = item.url ? item.url: 'javascript:;'
                  index = i;
                  count += 1;
              if (count < 6) {
                  $node_li += `<li class="${className}"><a href="${url}"><span class="icon icon-${icon}"></span><span class="undis">${title}</span></a></li>`;
              }
              $hover_node_li += `<li class="${className}"><a href="${url}"><span class="icon icon-${icon}"></span><span class="undis">${title}</span></a></li>`;
            }
          })
          if (count >= 6) {
            $node_li += `<li class="omit"></li>`
          }
          $node_ul = $node_li ? `<ul>${$node_li}</ul>`: null;
          $hover_container = $hover_node_li ? `<div class="right—container undis"><ul>${$hover_node_li}</ul></div>`: null;
          if ($node_li) {
            $(this).addClass('has-events')
          }
          $(this).append($node_ul);
          $(this).append($hover_container);
      })
      }
    }
    // 事件数据检测
    function checkevents () {
      let checkList = eventListData && Array.isArray(eventListData),
        rgExp = /^((0?[1-9])|((1|2)[0-9])|30|31)$/,
        filterListData = [];
      if (checkList) {
        eventListData.forEach((item, key) => {
          if (rgExp.test(item.day)) {
            filterListData.push(item);
          } else {
            alert('您输入的数据格式有误：'+ JSON.stringify(item));
          }
        })
      }
      return filterListData;
    }
    // hover显示全部日程
    function renderHoverEvent () {
      let hoverTimeout = null;
      $block.find('td').on('mouseenter', function () {
        if ($(this).hasClass('has-events')) {
          hoverTimeout = setTimeout(() => {
            $(this).children('.right—container').show();
            $(this).siblings().children('.right—container').hide();
          }, 300)
        }
      }).on('mouseleave', function () {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          $('.right—container').hide();
        }, 300)
      })
    }

    function HoverEventList (e) {
      let hoverTimeout = null;
      $block.find('.right—container').hover(function () {
        hoverTimeout = setTimeout(() => {
          $(this).parents('td').siblings().children('.right—container').hide();
          $(this).show();
        },300)
      }, function () {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
          $('.right—container').hide();
        }, 300)
      })
    }
    init();
  };
})(jQuery);
