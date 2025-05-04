import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import HeroImage from '../assets/images/poster-placeholder.png'

export default function Hero(){
    return (
        <section className="pt-16 md:pt-20">
            <div className="relative h-[85vh] md:h-[90vh] overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-indigo-900/80 mix-blend-multiply z-10" />
                        <img
                            src={`${HeroImage}`}
                            alt="Hero Banner"
                            className="object-cover w-full h-full"
                        />

                        {/* Animated image overlay */}
                        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-10 z-20"></div>

                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-30"></div>
                </div>
                {/* Content */}
                <div className="absolute inset-0 z-40 flex">
                    <div className="container h-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
                        {/* Left Content  */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl space-y-6 text-center md:text-left mb-8 md:mb-0">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"> <span className="block mb-2">Redefine</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-300 to-indigo-300 animate-gradient-x" >Your Style</span></h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-xl">Discover curated pieces that express your unique personality and elevate your presence.</p>

                            <div className="flex flex-wrap gap-2 justify-center md:justify-start md:gap-4">
                                <Button className="bg-white text-violet-900 hover:bg-white/90 rounded-full px-8 py-2 text-base group relative overflow-hidden">Shop New Arrivals</Button>
                                <Button className="text-white border-[1px] border-white/50 hover:border-white/60 hover:bg-white/20 rounded-full px-8 py-2 text-base">Explore Collections</Button>
                            </div>
                            <div className="hidden md:flex flex-wrap items-center justify-center gap-2 md:justify-start pt-4">
                                <p className="text-white/70 text-sm">Trending:</p>

                                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                                    {["Summer Essentials", "Minimalist", "Sustainable", "Occasion Wear"
                                    ].map((trend, index) => (
                                        <span key={index} className="text-xs rounded-full border border-white/30 text-white/90 hover:bg-white/20 cursor-pointer px-2 py-0.5">{trend}</span>
                                    ))
                                    }
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full aspect-[4/5] max-w-md relative hidden md:block">
                            <div className="relative  rounded-2xl overflow-hidden border border-white/20 shadow-2xl">

                                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent z-10"></div>
                                <img
                                src={`${HeroImage}?height=800&width=600`}
                                alt="Featured Product"
                                className="object-cover"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <div>
                                        <span className="text-[10px] font-medium bg-violet-600 text-white rounded-full mb-3 px-2 py-1">Featured</span>
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-2">Signature Collection</h4>
                                        <p className="text-white/80 mb-4 line-clamp-2">Elevate your wardrobe with our exclusive designer pieces.</p>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center gap-2">
                                            <span className="text-white font-semibold text-lg">From $89.99</span>
                                            <Link to="/" className="rounded-full bg-white text-violet-900 hover:bg-white/90 px-2.5 py-1">View Details</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-orange-500 text-white p-3 rounded-full shadow-lg animate-pulse-slow">
                                <span className="font-bold">30% OFF</span>
                            </div>
                            <div className="flex gap-2 mt-4 justify-center">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className={`relative h-16 w-16 rounded-lg overflow-hidden border ${i === 1 ? "border-white" : "border-white/30 hover:border-white/60"} cursor-pointer transition-all`}
                                >
                                    <img
                                    src={`${HeroImage}?height=64&width=64`}
                                    alt={`Product thumbnail ${i}`}
                                    className="object-cover"
                                    />
                                </div>
                            ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-15 left-1/2 z-100 animate-bounce">
                        <div className="h-12 w-6 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
                            <div className="h-2 w-2 bg-white rounded-full animate-pulse-slow"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md z-50">
                        <div className="container mx-auto px-4 md:px-6 py-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[{stat: "500+", category: "Trusted Brands"}, {stat: "100K+", category: "Happy Customers"}, {stat: "10,000+", category: "Products"}, {stat: "25+", category: "Countries"}
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <span className="text-white/90 font-bold text-xl md:text-2xl">{item.stat}</span>
                                        <span className="text-white/70 text-sm">{item.category}</span>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}