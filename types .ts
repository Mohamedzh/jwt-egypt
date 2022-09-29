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
  title: string
  department: string
  description: string
}
