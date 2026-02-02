export interface MenuItem {
    label: string
    link?: string
    items?: MenuItem[]
    newTab?: boolean
    query?: string // Works as an identification for from server menu changes
}
