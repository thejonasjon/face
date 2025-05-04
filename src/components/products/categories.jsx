import { ArrowBigRight, ArrowRight, Link } from "lucide-react";
import { Button } from "../ui/button";

export default function Categories(){
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
{/* Stop here */}
                </div>
            </div>
        </section>
    )
}