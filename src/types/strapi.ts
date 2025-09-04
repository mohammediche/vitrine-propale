type Author = {
    documentId: string
    id: number
    name: string
    email: string
  }
  
  type Category = {
    name: string
  }
  
  export type Article = {
    id: number
    title: string
    content: []
    paid_content: []
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    author?: Author
    category?: Category
    isPremium: boolean
    isPaid: boolean
    excerpt: string
    bgColor: string


  }
  export type Job = {
    id: number
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
    content: []
    slug: string
    category: string
    location: string
  }
  