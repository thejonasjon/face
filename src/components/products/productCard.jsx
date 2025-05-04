import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImage from '../../assets/images/poster-placeholder.png'


export default function ProductCard({productData}){
    return (
        <div className="w-full p-2 group">
            <Link>
                <div className="relative aspect-[2/2.5] overflow-hidden rounded-2xl bg-gray-100">
                    <div className="relative h-full">
                        <div className="w-full h-full absolute top-0 left-0">
                            <img src={HeroImage}
                            className="object-cover transition-transform duration-500 group-hover:scale-105" alt="#" />
                        </div>

                        <div className="h-full relative flex flex-col justify-between">
                            <div className="absolute top-4 left-4">
                                <span className="rounded-full px-3 py-1 text-xs font-medium bg-violet-600 text-white">{productData.badge}</span>
                            </div>

                            <div className="absolute w-full h-full top-0 left-0 flex justify-between items-end opacity-0 hover:bg-gradient-to-t from-black/40 hover:opacity-100 transition-opacity duration-300 p-4 z-10">
                                <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                                    <span><Star className="h-3 w-3 fill-amber-500 text-amber-500" /></span><span>{productData.rating}</span><span className="text-gray-500">({productData.reviews})</span>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex justify-center items-center h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"><Heart className="h-4 w-4" /><span className="sr-only">Add to wishlist</span></button>
                                    <button className="flex justify-center items-center h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"><ShoppingBag className="h-4 w-4" /><span className="sr-only">Add to wishlist</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-200 mt-4 space-y-2 text-black">
                        <div className="flex items-center justify-between">
                            <h3 className="text-black font-medium text-lg group-hover:text-violet-600 transition-colors">{productData.name}</h3>
                            <span className="font-semibold">${productData.price}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-1">
                                {productData.colors
                                .slice(0, 3).map((color, i) =>(
                                    <div key={i} className="h-4 w-4 rounded-full border border-gray-200" style={{backgroundColor: color}}>
                                    </div>
                                ))
                                }
                            </div>

                            <div>
                                <span className="text-sm text-gray-500">{productData.category}</span>
                            </div>
                        </div>
                    </div>
            </Link>
        </div>
    )
}