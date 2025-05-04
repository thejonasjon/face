import { Filter, Link, Sparkles, TrendingUp, Flame, Zap, ArrowRight } from "lucide-react";
import cn from "../../utils/cn";
import { Button } from "../ui/button";
import { useState } from "react";
import ProductCard from "./productCard";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { text: "All", icon: null },
    { text: "Trending", icon: <TrendingUp className="h-4 w-4" /> },
    { text: "New Arrival", icon: <Sparkles className="h-4 w-4" /> },
    { text: "Popular", icon: <Flame className="h-4 w-4" /> },
    { text: "Dresses", icon: <TrendingUp className="h-4 w-4" /> },
    { text: "Tops", icon: null },
    { text: "Bottoms", icon: null },
    { text: "Outerwear", icon: null },
    { text: "Accessories", icon: null },
    { text: "Shoes", icon: null },
  ];

  const trendingProducts = [
    {
      id: 1,
      name: "Gradient Mesh Bodycon Dress",
      price: 89.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "Dresses",
      badge: "New",
      rating: 4.8,
      reviews: 124,
      colors: ["#FF5E5E", "#5E8BFF", "#FFD15E"],
    },
    {
      id: 2,
      name: "Oversized Structured Blazer",
      price: 129.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "Outerwear",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 89,
      colors: ["#000000", "#FFFFFF", "#8B572A"],
    },
    {
      id: 3,
      name: "High-Rise Wide Leg Pants",
      price: 79.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "Bottoms",
      badge: "Limited",
      rating: 4.7,
      reviews: 56,
      colors: ["#000000", "#223344", "#556677"],
    },
    {
      id: 4,
      name: "Asymmetric Cut Blouse",
      price: 69.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "Tops",
      badge: "Trending",
      rating: 4.6,
      reviews: 42,
      colors: ["#FFFFFF", "#FFD15E", "#FF5E5E"],
    },
    {
      id: 5,
      name: "Sculptural Heel Sandals",
      price: 119.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "Shoes",
      badge: "Exclusive",
      rating: 4.9,
      reviews: 37,
      colors: ["#000000", "#C09E6B", "#FFFFFF"],
    },
    {
      id: 6,
      name: "Statement Collar Necklace",
      price: 59.99,
      image: "/placeholder.svg?height=600&width=400",
      category: "Accessories",
      badge: "Handcrafted",
      rating: 4.8,
      reviews: 28,
      colors: ["#FFD700", "#C0C0C0", "#B87333"],
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Discover</h3>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2 text-sm rounded-full border border-gray-100 hover:bg-gray-50 px-2 py-1">
              <Filter className="h-4 w-4"/>
              Filter
            </Button>

            <button
                size="sm"
                className="flex items-center gap-2 text-sm rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90 px-2 py-1"
            >
            <Zap className="h-4 w-4" />
                Quick Shop
            </button>
          </div>
        </div>

        <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0 pb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center text-sm text-black rounded-full border border-gray-100 whitespace-nowrap px-4 py-1.5 cursor-pointer",
                activeCategory === index
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90"
                  : "hover:text-violet-600 hover:border-violet-600"
              )}
                onClick={() => {
                    setActiveCategory(index);
                }}
            >
              {category.icon && <span className="mr-2">{category.icon}</span>}
              {category.text}
            </button>
          ))}
        </div>
      </div>

      <div className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {
                trendingProducts.map((product, index) => (
                    <ProductCard key={product.id} productData={product} />
                ))
            }
            </div>
        </div>

        <div className="flex justify-center mt-12 text-center">
              <button
                className="flex items-center rounded-full px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90"
                size="lg"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
      </div>
    </section>
  );
}
