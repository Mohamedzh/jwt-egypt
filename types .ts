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
  image: string
  job: string
  story: string
  facebook: string
  instagram: string
  twitter: string
}

export interface VacancyType {
  title: string
  department: string
  description: string
}
