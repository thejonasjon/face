import { Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchItem(){
    const [showSearch, setShowSearch] = useState(false);
    const [clearSearch, setClearSearch] = useState("");
    const searchref = useRef("")

    const populars = ["Summer dresses", "Linen shirts", "Sandals", "Sustainable", "Workwear"];


    return (
        <div>
            <button onClick={() => {setShowSearch(!showSearch)}} className="p-2 rounded-full whitespace-nowrap hover:bg-gray-200 transition-all ease-in-out duration-500">
                <Search strokeWidth={2} size={14} />
            </button>
            <AnimatePresence>
                { showSearch && (
                    <motion.div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.3}}
                    >
                        <div className="container mx-auto px-4 md:px-6 py-4">
                            {/* <X className="absolute right-4 text-gray-500 h-5 w-5"/> */}
                            <div className="relative left-0">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <button onClick={() => setClearSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition-all ease-in-out duration-400">
                                    <X className="text-gray-500 h-4 w-4"/>
                                </button>
                                <input ref={searchref} value={clearSearch} onChange={(e) => setClearSearch(e.target.value)} type="text" placeholder="Search for products, brands and more..." className="flex w-full border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-10 h-12 rounded-full border-gray-200 focus:border-violet-600 focus:ring-violet-600"/>
                            </div>

                            <div className="flex items-center flex-wrap gap-2 mt-4">
                                <span className="text-sm font-medium text-gray-500">Popular:</span>
                                {
                                    populars.map((popular, index) => (
                                        <span key={index} className="inline-flex items-center border border-gray-300 text-xs font-normal focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-full px-3 py-1 hover:bg-violet-50 hover:text-violet-600 cursor-pointer transition-colors">{popular}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}