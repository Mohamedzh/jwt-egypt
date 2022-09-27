import { ReactElement } from "react"

export interface WomenListType {
    name: string
    dep: string
    quote: string
    imageSrc: string
    imageAlt: string
    color?: string
}

export type Image = {
    img: string
    alt: string
}
export type Contact = {
    name: string
    url: string
    icon: (props) => ReactElement<SVGAElement>
}

export type InspStories = {
    image: Image
    name: string
    job: string
    jobDisc: string
    contact: Contact[]

}

export interface VacancyType {
    title: string
    department: string
    description: string
}



