export type navItemType = {
  id: number
  name: "Home" | "Shop" | "Our Story" | "Blog" | "Contact Us"
  to: string | undefined
  expandable: boolean
}

export const navItems: navItemType[] = [
  {
    id: 1,
    name: "Home",
    to: "/",
    expandable: false
  },
  {
    id: 2,
    name: "Shop",
    to: "/shop",
    expandable: true
  },
  {
    id: 3,
    name: "Our Story",
    to: "/our-story",
    expandable: false
  },
  {
    id: 4,
    name: "Blog",
    to: "/blog",
    expandable: false
  },
  {
    id: 5,
    name: "Contact Us",
    to: "/contact-us",
    expandable: false
  }
]
