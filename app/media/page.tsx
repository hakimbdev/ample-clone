import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Media() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Media</h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest news, events, and insights from MIH.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="mb-12">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="news">News & Updates</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="news">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="gallery">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryItems.map((item) => (
                  <div key={item.id} className="relative h-64 rounded-lg overflow-hidden">
                    {item.type === "image" ? (
                      <Image
                        src={item.image || "/placeholder.svg?height=300&width=400"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform hover:scale-110"
                      />
                    ) : (
                      <video
                        src={item.videoUrl}
                        title={item.title}
                        controls
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                      />
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest news, projects, and investment opportunities from MIH.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

interface NewsItem {
  id: number
  title: string
  date: string
  excerpt: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "MIH Launches New Residential Project in Lekki",
    date: "April 15, 2023",
    excerpt:
      "MIH has launched a new residential project in Abuja. The project, MIH Heights, offers luxury apartments with modern amenities.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "MIH Wins Real Estate Investment Company of the Year Award",
    date: "March 10, 2023",
    excerpt:
      "MIH has been recognized as the Real Estate Investment Company of the Year at the prestigious Real Estate Excellence Awards.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "MIH Completes Commercial Project Ahead of Schedule",
    date: "February 22, 2023",
    excerpt:
      "MIH has completed its commercial project, MIH Towers, ahead of schedule, delivering exceptional quality and value to investors.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "MIH Partners with Leading Financial Institution",
    date: "January 15, 2023",
    excerpt:
      "MIH has partnered with a leading financial institution to provide flexible financing options for investors in its real estate projects.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "MIH Expands Operations to Abuja",
    date: "December 5, 2022",
    excerpt:
      "MIH has expanded its operations to Abuja, Nigeria's capital city, with plans to launch new projects in the coming months.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "MIH Introduces Innovative Investment Platform",
    date: "November 18, 2022",
    excerpt:
      "MIH has introduced an innovative investment platform that makes it easier for investors to participate in real estate projects.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{item.date}</p>
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.excerpt}</p>
        <Link
          href={`/media/news/${item.id}`}
          className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

interface BlogPost {
  id: number
  title: string
  author: string
  date: string
  excerpt: string
  image: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Real Estate Investment in Nigeria",
    author: "John Adeyemi",
    date: "April 20, 2023",
    excerpt: "Explore the future trends and opportunities in Nigeria's real estate investment landscape.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Investment",
  },
  {
    id: 2,
    title: "How to Build a Profitable Real Estate Portfolio",
    author: "Sarah Okafor",
    date: "March 15, 2023",
    excerpt: "Learn the strategies and tips for building a profitable real estate investment portfolio.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Investment",
  },
  {
    id: 3,
    title: "Understanding ROI in Real Estate Investment",
    author: "Michael Eze",
    date: "February 28, 2023",
    excerpt: "A comprehensive guide to understanding Return on Investment (ROI) in real estate.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Finance",
  },
  {
    id: 4,
    title: "The Impact of Technology on Real Estate",
    author: "Amina Ibrahim",
    date: "January 20, 2023",
    excerpt: "Discover how technology is transforming the real estate industry and investment landscape.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Technology",
  },
  {
    id: 5,
    title: "Real Estate vs. Stocks: Which is the Better Investment?",
    author: "John Adeyemi",
    date: "December 10, 2022",
    excerpt: "A comparative analysis of real estate and stocks as investment options.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Investment",
  },
  {
    id: 6,
    title: "The Benefits of Investing in Commercial Real Estate",
    author: "Sarah Okafor",
    date: "November 5, 2022",
    excerpt: "Explore the advantages and potential returns of investing in commercial real estate.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Commercial",
  },
]

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          href={`/media/blog/${post.id}`}
          className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

interface GalleryItem {
  id: number
  title: string
  image?: string
  videoUrl?: string
  type: "image" | "video"
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "WhatsApp Video 2025-06-13",
    videoUrl: "https://res.cloudinary.com/dc5qncppu/video/upload/v1749818151/WhatsApp_Video_2025-06-13_at_10.24.28_67f63629_ghjnzp.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "WhatsApp Image 2025-06-12 (1)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818145/WhatsApp_Image_2025-06-12_at_11.34.58_5c6cbdbc_u8acjl.jpg",
    type: "image",
  },
  {
    id: 3,
    title: "WhatsApp Image 2025-06-12 (2)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818145/WhatsApp_Image_2025-06-12_at_11.34.59_7195e651_m6jaqs.jpg",
    type: "image",
  },
  {
    id: 4,
    title: "WhatsApp Image 2025-05-20 (1)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818144/WhatsApp_Image_2025-05-20_at_21.37.11_de1ab0b9_bogmx3.jpg",
    type: "image",
  },
  {
    id: 5,
    title: "WhatsApp Image 2025-05-20 (2)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818144/WhatsApp_Image_2025-05-20_at_21.37.11_de1ab0b9_bogmx3.jpg",
    type: "image",
  },
  {
    id: 6,
    title: "WhatsApp Image 2025-05-19 (1)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818144/WhatsApp_Image_2025-05-19_at_19.27.11_25cdaeaa_gtdkmc.jpg",
    type: "image",
  },
  {
    id: 7,
    title: "WhatsApp Image 2025-05-19 (2)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818144/WhatsApp_Image_2025-05-19_at_19.27.10_03d2b5d2_pi4igi.jpg",
    type: "image",
  },
  {
    id: 8,
    title: "WhatsApp Image 2025-05-19 (3)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818144/WhatsApp_Image_2025-05-19_at_19.27.08_f504da4c_htktye.jpg",
    type: "image",
  },
  {
    id: 9,
    title: "WhatsApp Image 2025-05-19 (4)",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749818143/WhatsApp_Image_2025-05-19_at_19.27.08_7f5b0bf7_t2zh0i.jpg",
    type: "image",
  },
]
