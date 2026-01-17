export interface MenuItem {
    label: string
    link?: string
    items?: MenuItem[]
    newTab?: boolean
    query?: string
}
