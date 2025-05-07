import { Button } from "./ui/button";

export default function NewsLetter(){
    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Style Community</h3>
                    <p className="text-lg text-white/80 mb-8">Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input type="email" placeholder="Your email address" className="h-12 rounded-full bg-white/20 border-white/30 text-white focus:outline-1 outline-white/50 placeholder:text-white/60 focus:border-white focus:ring-white px-6" />
                    <Button className="flex justify-center items-center h-12 rounded-full bg-white text-violet-900 hover:bg-white/90 px-6">Subscribe</Button>
                </div>
            </div>
        </section>
    )
}