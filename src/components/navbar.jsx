import { CarTaxiFront, Heart, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import SearchItem from "./searchItem";

export default function NavBar (){

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
            <div className="container mx-auto md:px-6 flex items-center justify-between h-16 md:h-20 px-4">
                <div className="brand">
                    <Link className="text-xl md:text-2xl font-bold tracking-tight" to="/" >FACE</Link>
                </div>

                <nav>
                    <ul className="flex items-center gap-4">
                        {["Women", "Men", "Accessories", "Beauty", "Collections"].map((link, index) => (
                            <li key={index} className="text-sm font-medium hover:text-violet-600 transition-colors ease-in-out duration-200"><Link className="text-red" to={`/${link.toLowerCase()}`}>{link}</Link></li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                <SearchItem />
                <Heart strokeWidth={1.5} size={14} />
                    <ShoppingBag strokeWidth={1.5} size={14} />

                    <Button className="text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 rounded-full h-9 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-90">
                        Sign In
                    </Button>
                </div>
            </div>
        </header>
    )
}