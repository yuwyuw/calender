const _that = this;

$(document).ready(function() {
  var date = new Date(),
      d = date.getDate(),
      m = date.getMonth(),
      y = date.getFullYear();
  if($('.calendar').length > 0) {
    // 加载日历jquert
    $('.calendar').fullCalendar({
      events: [
        {
          title: '微信',
          start: '2018-05-13',
          url: 'http://baidu.com',
        },
        {
          title: 'eee',
          start: '2018-05-13',
          url: 'http://baidu.com',
        },
        {
          title: 'CNSMS',
          start: '2018-05-13',
          url: 'http://baidu.com'
        },
        {
          title: '报表',
          start: new Date(y, m, 1)
        },
        {
          title: 'OA',
          start: new Date(y, m, 1)
        },
        {
          title: '微信',
          start: new Date(y, m, 1)
        },
        {
          title: 'CNSMS',
          start: new Date(y, m, 5)
        },
      ],
      header: {
        left: 'title',
        center: '',
        right: 'prev,next,today'
      },
      lang: 'zh-cn',
      defaultDate: '<!--{$currentDay}-->', // 默认日期
      buttonIcons: false,
      buttonText: {
        today:'返回当月',
        month: '月',
        week: '周',
        day: '日',
      },
      editable: false, //不允许拖拽
      monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayNamesShort:['周日', '周一', '周二', '周三','周四', '周五', '周六'],
    })
    // 点击日历头部月份选择时，重新渲染日程样式
    $('.fc-header-right .fc-button').click(function(){
      _that.eventsMark();
    });
  }
})
// 日程样式渲染
_that.eventsMark = (()=> {
  let marklist = [
    {'type': 'wechat', 'text': '微信'},
    {'type': 'list', 'text': '报表'},
    {'type': 'gdo', 'text': 'GDO'},
    {'type': 'buy', 'text': '采购'},
    {'type': 'sms', 'text': 'CNSMS'},
    {'type': 'oa', 'text': 'OA'},
    {'type': 'crm', 'text': 'CRM'},
    {'type': 'wms', 'text': 'WMS'},
    {'type': 'about', 'text': '网站相关'},
    {'type': 'other', 'text': '其他'},
  ],
  $block = $('.fc-content');
  $block.find('.fc-event-title').each(function (key, item) {
    let filterList =  marklist.filter((v,i) => v.text === $(this).text());
    if (filterList.length) {
      let eventClass = `title-${filterList[0]['type']}`;
      $(this).addClass(eventClass);
    }
  })
})

//DOM节点变化
$(window).on('DOMSubtreeModified', function () {
  _that.eventsMark();
})


