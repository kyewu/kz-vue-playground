export interface SwiperItemType {
  image: string
  title?: string
  subTitle?: string
  desc?: string
}

export interface CardItemType {
  image: string
  title?: string
  desc?: string
  url?: string
  level?: 'Junior' | 'Middle' | 'Senior'
  learnerCount?: number
  oPrice?: number
  price?: number
  tag?: 'Update' | 'New'
  line?: LineType
}

export interface LineType {
  typeCount?: number
  stepsCount?: number
  collectionCount?: number
}

export interface MenuItemType {
  link?: RouteLocationRaw
  name?: string
  iconClass?: string
}
