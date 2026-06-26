export interface Product {
  id: number
  title: string
  description: string
  image: string
  colorClass: 'primary' | 'secondary' | 'tertiary' | 'play-orange'
  icon: string
}

export interface NavLink {
  label: string
  href: string
}
