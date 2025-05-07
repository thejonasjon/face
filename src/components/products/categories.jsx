import { ArrowBigRight, ArrowRight, Link } from "lucide-react";
import { Button } from "../ui/button";
import CategoryCard from "./categoryCard";

export default function Categories(){
    const categories = [
        {women: ["Dresses", "Tops", "Bottoms", "Outerwear"]},
        {men: ["Shirts", "Pants", "Suites", "Outerwear"]},
        {Accessories: ["Jewelry", "Bags", "Shoes", "Hats"]}
    ]
    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Shop by Category</h3>
                        <Button className="flex items-center gap-3 text-violet-600 hover:text-violet-700">View all Categories <ArrowRight className="ml-1 h-4 w-4" /></Button>
                    </div>
                </div>

                <div>
                    <div className="w-full">
                        <div className="w-full flex justify-center gap-4 max-w-md mb-8 bg-gray-100 p-1 rounded-full">
                            <button className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">Women</button>
                            <button className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">Women</button>
                            <button className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white">Women</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>

                </div>
            </div>
        </section>
    )
}