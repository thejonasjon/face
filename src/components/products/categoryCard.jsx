import { Link } from "react-router-dom";

export default function CategoryCard () {
    return (
        <div>
            <Link className="group relative overflow-hidden rounded-xl">
                <div className="relative h-60 w-full">
                    <img className="object-cover transition-transform group-hover:scale-105" src="#" alt="" />
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white">Dress</h3>
                </div>
            </Link>
        </div>
    )
}