import CollectionCard from "./collectionCard";
import { motion } from "framer-motion";

export default function Collections(){

    const collections = [
        {
            id: "summer",
            name: "Summer Essentials",
            description: "Vibrant pieces for the warmer days",
            image: "/placeholder.svg?height=600&width=800",
            color: "from-orange-400 to-pink-500",
        },
        {
            id: "minimal",
            name: "Minimalist Edit",
            description: "Clean lines and timeless silhouettes",
            image: "/placeholder.svg?height=600&width=800",
            color: "from-slate-700 to-slate-900",
        },
        {
            id: "statement",
            name: "Statement Pieces",
            description: "Bold designs that stand out",
            image: "/placeholder.svg?height=600&width=800",
            color: "from-purple-500 to-indigo-600",
        },
  ]


    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Curated Collections</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our thoughtfully curated collections designed to elevate your wardrobe.</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {collections.map((collection, index) => (
                            <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl"
                            >
                            <CollectionCard collection={collection} />

                        </motion.div>
                      ))}
                    </div>
                </div>
            </div>

        </section>
    )
}