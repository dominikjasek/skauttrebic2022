export interface HomepageImage {
    url: string
    text: string | null
    backgroundColor?: string
    textColor?: string
}

export interface HomepageImageSliderProps {
    images: HomepageImage[]
}
