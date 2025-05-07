import { Link } from "react-router-dom";
import HeroImage from '../../assets/images/poster-placeholder.png'

export default function CategoryCard () {
    return (
        <Link className="block">
            <div className="group relative overflow-hidden aspect-[6/5] bg-amber-700 rounded-xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                <div className="group w-full">
                    <img className="object-cover rounded-xl" src={HeroImage} alt="" />
                </div>

                <div className="flex justify-center items-center absolute inset-0 z-50">
                    <h3 className="text-lg font-medium text-white">Dress</h3>
                </div>

            </div>
            {/* <div className="relative group max-w-fit h-40 rounded-xl border border-amber-600">
                <div className="absolute w-full h-full inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-50 border" />

                <div className="absolute inset-0 z-30 rounded-xl bg-amber-950">
                    <img className="object-cover rounded-xl transition-transform group-hover:scale-105" src={HeroImage} alt="" />
                </div>

                <div className="absolute inset-0 z-40 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-black">Dress</h3>
                </div>
            </div> */}
        </Link>
    )
}