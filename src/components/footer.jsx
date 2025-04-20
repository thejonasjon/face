import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="brand">
                        <Link className="flex items-center gap-2 text-xl md:text-2xl font-semibold tracking-tight mb-4" to="/" >
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

                        <div className=" mb-4">
                            <p className="text-gray-400">Redefining fashion with curated collections that express your unique style.</p>
                        </div>

                        <div>
                            <ul className="flex flex-wrap space-x-4">
                                {[{platform: "LinkedIn", profileLink: "#"}, {platform: "Twitter", profileLink: "#"}, {platform: "Instagram", profileLink: "#"}, {platform: "Facebook", profileLink: "#"}
                                ].map((social, index) => (
                                    <li key={index}><a href={social.profileLink} className="text-gray-400 hover:text-white transition-colors">{social.platform}</a></li>
                                ))

                                }
                            </ul>
                        </div>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-4">Shop</h3>
                    <ul className="space-y-2">
                        {["Women", "Men", "Accessories", "Beauty", "New Arrivals", "Sale"
                        ].map((item) => (
                            <li key={item}><Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{item}</Link></li>
                        ))
                        }
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        {["About Us", "Careers", "Store Locations", "Our Responsibility", "Contact Us"
                        ].map((item, index) => (
                            <li key={index}><Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{item}</Link></li>
                        ))
                        }
                    </ul>
                    </div>

                    <div>
                    <h3 className="font-semibold mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                        {["Help Center", "Track Order", "Returns & Refunds", "Shipping Info", "Size Guide"
                        ].map((item, index) => (
                            <li key={index}><Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{item}</Link></li>
                        ))
                        }
                    </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} F A C E. All rights reserved.</p>

                    <div>
                        <ul className="flex justify-center items-center flex-wrap space-x-6 mt-4 md:mt-0">
                            {["Privacy Policy", "Terms of Service", "Accessibility"
                            ].map((link, index) => (
                                <li key={index}><Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white text-sm transition-colors">{link}</Link></li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}