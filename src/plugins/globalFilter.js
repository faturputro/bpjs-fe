import dayjs from 'dayjs'

const filter = {
  install(Vue) {
    Vue.filter('formatDate', (str, format) => {
      if (dayjs(str).isBefore(dayjs().add(1, 'D'))) {
        return dayjs(str).format(format)
      }
      return dayjs(str).format(format || 'DDD MMMM HH:mm A')
    })
    Vue.filter('formatMins', (str, format) => dayjs(str).format(format || 'DDD MMMM HH:mm A'))
  },
}

export default filter;
