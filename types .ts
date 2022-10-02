// import { Image } from './types '
import { ReactElement } from 'react'

export interface WomenListType {
  name: string
  dep: string
  quote: string
  imageSrc: string
  imageAlt: string
  color?: string
}

// export type Asset = {
//   _ref: string
//   _type: string
// }

// export type Image = {
//   asset: Asset
//   _type: string
// }

// export type Image = {
//   url: string
// }

// export type Name = {
//   _ref: string
//   _type: string
// }

export type InspStories = {
  name: any
  story: string
  _id: string
}

export type InternShip = {
  name: any
  story: string
  image: string
}

export interface VacancyType {
  id: String
  title: String
  department: String
  location: String
  closeDate: string
  details: String
  type: String
}

export type ThemeColor = {
  color_code: string
}
export interface ThemeType {
  careerSectionColor: ThemeColor
  firstColor: ThemeColor
  secondColor: ThemeColor
  internSectionColor: ThemeColor
  quotesSectionColor: ThemeColor
  storiesSectionColor: ThemeColor
  videoSectionColor: ThemeColor
}
