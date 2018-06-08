const Calender = (($) => {
  const NAME = 'calender'
  const DATA_KEY = 'calender'
  const CURRENTDATE = new Date()
  const CURRENTYEAR = CURRENTDATE.getFullYear()
  const CURRENTMONTH = CURRENTDATE.getMonth() + 1
  const CURRENTDAY = CURRENTDATE.getDate()
  const Default = {
    minTdHeight: 60,
    swithBtn: true
  }
  const Selector  = {
    CURRENTTIME: '.current-time',
    PREVBTN: '.prev-btn',
    NEXTBTN: '.next-btn',
    WEEK: '.week-warp',
    DATE:'.date-warp',
    EVENTMARK: 'mark',
    EVENTWARP: 'event-warp',
    SWITCH: '.switch'
  }
  const CONFIG = {
    WEEK: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    TYPE: ['init', 'switch']

  }
  const Template = (id, options = {}) => {
    let templates = {
      TITLE: `
        <div class="title-warp">
          <div class="current-time-warp">
            <i class="icon-calender"></i>
            <span class="${Calender._getNameFromClass(Selector.CURRENTTIME)}"></span>
          </div>
          <div class="switch">
            <span class="opt-btn ${Calender._getNameFromClass(Selector.PREVBTN)}"><i class="icon-prev"></i></span>
            <span class="opt-btn ${Calender._getNameFromClass(Selector.NEXTBTN)}"><i class="icon-next"></i></span>
          </div>
        </div>
      `,
      WEEK: `
        <ul class="week-warp"></ul>
      `,
      DATE: `
        <table class="date-warp"></table>
      `
    }
    return templates[id];
  }
  class Calender {
    constructor (root, config) {
      this.options = this._getConfig(config)
      this.prepareData()
      this.init()
      this.renderEvent()
    }
    prepareData () {
      this.$el = $('.' + NAME)
      this.year = CURRENTYEAR
      this.month = CURRENTMONTH
      this.currentDay = CURRENTDAY
      this.currentEventData = []
    }
    static get Default () {
      return Default
    }
    init() {
      this.setTitle()
      this.setWeek()
      this.setDate()
      $(document)
        .on('click', Selector.PREVBTN, () => {
          this.switchDate(-1)
        })
        .on('click', Selector.NEXTBTN, () => {
          this.switchDate(1)
        })
    }
    update (type = CONFIG.TYPE[0]) {
      this.setTitle(type)
      this.setDate(type)
      this.renderEvent()
    }
    setTableBox () {
      let $el = this.$el,
        $tr = '',
        $td = '',
        $div = '',
        $table = $(Template('DATE'));
        $el.append($table);
      for (var i = 0; i <= 5; i++) {
        $tr = $('<tr>')
        for (var k = 0; k <= 6; k++) {
          $td = $('<td>')
          $td.css('height',this.options.minTdHeight)
          $table.append($tr);
          $tr.append($td)
        }
      }
    }
    setTitle (type = CONFIG.TYPE[0]) {
      switch (type) {
        case CONFIG.TYPE[0]:
          let $el = this.$el,
            $time = Template('TITLE');
            $el.append($time)
            if (!this.options.swithBtn) $(Selector.SWITCH).hide()
          break;
      }
      let time = this.format(this.year, this.month);
      $(Selector.CURRENTTIME).text(time);
    }
    setWeek (type) {
      let $li = '',
        $el = this.$el,
        $ul = $(Template('WEEK'));
      CONFIG.WEEK.forEach((item, key) => {
        $li += `<li>${item}</li>`
      })
      $el.append($ul.append($li))
    }
    setDate(type = CONFIG.TYPE[0]) {
      switch (type) {
        case CONFIG.TYPE[0]:
          this.setTableBox()
        break;
      }
      switch (this.month) {
        case 2:
          let Leap = this.isLeap(this.year);
          Leap ? this.setDay(29): this.setDay(28)
          break;
        case 4:
          this.setDay(30);
          break;
        case 6:
          this.setDay(30);
          break;
        case 9:
          this.setDay(30);
          break;
        case 11:
          this.setDay(30);
          break;
        default:
          this.setDay(31);
      }
    }
    setDay(num) {
      let initDate = new Date();
      initDate.setFullYear(this.year)
      initDate.setMonth(this.month - 1)
      initDate.setDate(1)
      let firstDAYKey = initDate.getDay()? initDate.getDay() - 1: 6;
      let $td = $('td'),
        date = '',
        currentDate = '',
        isSooner = null;
      this.clear();
      for (var i = 0; i < num; i++) {
        $td[firstDAYKey + i].innerHTML = i + 1;
        date = `${this.year}-${this.month}-${i + 1}`
        currentDate = `${CURRENTYEAR}-${CURRENTMONTH}-${CURRENTDAY}`
        $td[firstDAYKey + i].setAttribute('date', date)
        isSooner = this.compareDate(date)
        if (!isSooner) {
          $td[firstDAYKey + i].className = 'past-time'
        }
      }
    }
    clear () {
      let _this = this
      $(Selector.DATE).find('td').each(function() {
        if ($(this).children()) $(this).children().remove();
        $(this).text('');
        $(this).attr('date','')
        $(this).removeClass('past-time')
        _this.currentEventData = [];
      });
    }
    isLeap(year) {
      let result = (year % 400 == 0)||(year % 100 != 0 && year % 4 == 0)? true: false;
      return result;
    }
    format (year, month, type) {
      let result;
      if (!type) {
        result = `${year}年${month}月`
      }
      return result
    }
    renderEvent() {
      let _this = this,
        $eventWarp = '',
        $span = '',
        $td = $(Selector.DATE).find('td'),
        itemTime = '',
        link = '',
        isNewWindow = null,
        eventDate = _this.options.eventListData,
        currentTime = `${this.year}-${this.month}`;
      if (!eventDate) return;
      Array.isArray(eventDate) && eventDate.forEach((item, key) => {
        item.date = this.checkItemDate(item);
        if (item.date) {
          itemTime = item.date.split('-')[0] + '-' + item.date.split('-')[1]
        }
        if (currentTime === itemTime) {
          this.currentEventData.push(item)
        }
      })
      $td.each(function (key, item) {
        $eventWarp = `<div class=${Selector.EVENTWARP}></div>`
        $(this).append($eventWarp);

        _this.currentEventData.length && _this.currentEventData.forEach((i, k) => {
          if ($(this).attr('date') === i.date) {
            link = i.url ? i.url: 'javascript:;'
            isNewWindow = i.isNewWindow  ? '_blank' : '_self'
            $span = `<a class=${Selector.EVENTMARK} href=${link} target=${isNewWindow}>${i.title}</a>`
            $(this).children().append($span)
          }
        })
      })
    }
    checkItemDate (item) {
      let result = null,
        year = item['date'].split('-')[0],
        month = item['date'].split('-')[1],
        day = item['date'].split('-')[2];
        if (year && month && day) {
          month = month.replace(/\b(0+)/gi,"")
          day = day.replace(/\b(0+)/gi,"")
          result = `${year}-${month}-${day}`
        }
        return result;
    }
    switchDate (index) {
      let month = Number(this.month),
        year = Number(this.year);
      switch(index) {
        case -1:
          if (month == 1) {
            month = 12;
            year = year - 1
          } else {
            month--;
          }
          break;
        case 1:
          if (month == 12) {
            month = 1;
            year++;
          } else {
            month++;
          }
          break;
      }
      this.month = month;
      this.year = year;
      this.update(CONFIG.TYPE[1]);
    }
    compareDate (listDate) {
      let result = false,
        dateTime = new Date(),
        currentTime = new Date();
        dateTime.setFullYear(listDate.split('-')[0])
        dateTime.setMonth(listDate.split('-')[1])
        dateTime.setDate(listDate.split('-')[2])
        dateTime = Date.parse(dateTime)
        currentTime.setFullYear(CURRENTYEAR)
        currentTime.setMonth(CURRENTMONTH)
        currentTime.setDate(CURRENTDAY)
        currentTime = Date.parse(currentTime)
        if (dateTime >= currentTime) {
          result = true
        }
      return result;
    }
    _getConfig (config) {
      config = $.extend({}, Default, config)
      return config
    }
    static _jQueryInterface (config) {
      let funcResult
      let defaultResult = this.each((i, el) => {
        let data = $(el).data(DATA_KEY)
        let _config = $.extend(
          {},
          Calender.Default,
          $(el).data(),
          typeof config === 'object' && config
        )

        if (!data) {
          data = new Calender(el, _config)
          $(el).data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error(`No method named "${config}"`)
          }
          funcResult = data[config]()
        }
      })

      return funcResult === undefined ? defaultResult : funcResult
    }
    static _getNameFromClass (className) {
      className = className.replace(/\./g, '')
      return className
    }
  }

  $.fn[NAME] = Calender._jQueryInterface
  return Calender
})(jQuery)
export default Calender
