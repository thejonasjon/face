import { CarTaxiFront, ChevronRight, Heart, Menu, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import SearchItem from "./searchItem";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function NavBar (){
    const [isMenuOpen, setIsenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
            <div className="relative">
                <div className="container mx-auto md:px-6 border-b border-gray-200 sm:border-none flex items-center justify-between h-16 md:h-20 px-4">
                    <div className="brand">
                        <Link className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight" to="/" >
                            <div className="relative h-8 w-8 md:h-10 md:w-10">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></div>
                                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold text-lg">
                                        F
                                    </span>
                                </div>
                            </div>
                            F A C E
                        </Link>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            {["Women", "Men", "Accessories", "Beauty", "Collections"].map((link, index) => (
                                <li key={index} className="text-sm font-medium hover:text-violet-600 transition-colors ease-in-out duration-200"><Link className="text-red" to={`/${link.toLowerCase()}`}>{link}</Link></li>
                            ))}
                        </ul>
                    </nav>


                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 md:gap-4">
                            <SearchItem />
                            <Link to="/watchlist" className="p-2 rounded-full whitespace-nowrap hover:bg-gray-200 transition-all ease-in-out duration-500">
                                <Heart strokeWidth={2} size={14} />
                            </Link>

                            <Link to="/orders" className="p-2 rounded-full whitespace-nowrap hover:bg-gray-200 transition-all ease-in-out duration-500">
                                <ShoppingBag strokeWidth={2} size={14} />
                            </Link>

                            <Link to="/signin" className="hidden md:block">
                                <Button className="text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 rounded-full h-9 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90">
                                    Sign In
                                </Button>
                            </Link>
                        </div>

                        <div className="flex md:hidden">
                            {isMenuOpen ? (
                                    <button onClick={() => setIsenuOpen(false)}>
                                        <X size={20} strokeWidth={1.2} />
                                    </button>
                                ) : (
                                    <button onClick={() => setIsenuOpen(true)}>
                                        <Menu size={20} strokeWidth={1.2}/>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <AnimatePresence>
                {isMenuOpen && (
                    <motion.div className="w-full absolute bg-black/10 left-0 top-16 md:hidden"
                        initial={{opacity: 0, x: -300}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -300}}
                        transition={{duration: 0.3}}
                        onClick={() => setIsenuOpen(false)}
                    >
                        <div className="w-60 bg-white ">
                            <nav className=" flex-1 border-y border-gray-300 p-4">
                                {[
                                    {heading: "Shop By Category", list:["Woman", "Man", "Beauty", "Collections"]}, {heading: "Featured", list: ["New Arrivals", "Best Sellers", "Trending Now", "Sale"]}, {heading: "Account", list: ["Sign In", "Register", "Orders", "Watchlist"] }
                                    ].map((block, index) => (
                                        <div key={index} className="space-y-2 py-4">
                                            <h3 className="text-sm font-medium text-gray-500 uppercase">{block.heading}</h3>
                                            <ul className="">
                                                {block.list.map((navLink, index) => (
                                                    <li key={index}>
                                                        <Link to={navLink} className="flex items-center justify-between py-1 text-base font-medium hover:text-violet-600 transition-colors">
                                                            {navLink}
                                                            <ChevronRight className="h-4 w-4" />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                }
                            </nav>

                            <div className="border-b border-gray-300 p-4">
                                <Button className="w-full text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors hover:bg-accent hover:text-accent-foreground py-2 rounded-md h-9 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90">
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </header>
    )
}