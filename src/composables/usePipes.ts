export const pricePipe = computed(() => {
  return (price: number | undefined) => {
    if (!price)
      return '--'
    return `￥${price}`
  }
})

export const tagLabelPipe = computed(() => {
  return (tag?: 'Update' | 'New') => {
    if (tag === 'Update')
      return '升级'
    if (tag === 'New')
      return '上新特惠'
    return ''
  }
})

export const levelPipe = computed(() => {
  return (level?: 'Junior' | 'Middle' | 'Senior') => {
    if (level === 'Junior')
      return '初级'
    if (level === 'Middle')
      return '中级'
    if (level === 'Senior')
      return '高级'
    return ''
  }
})
