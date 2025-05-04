import { Button } from "../ui/button";
import defaultImage from '../../assets/images/poster-placeholder.png'

export default function CollectionCard({collection}){
    return (
        <div>
            <div className="relative w-100 aspect-[5/5] p-4 rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
                <div className="absolute w-full h-full inset-0">
                    <img className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl" src={false ? defaultImage : defaultImage} alt="" />
                </div>


                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white ">{collection.name}</h3>
                    <p className="text-md text-white/80 mb-4">{collection.description}</p>

                    <div>
                        <Button className="w-fit text-md bg-white text-black border border-gray-200 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors px-3 py-1.5">Explore Collection</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}