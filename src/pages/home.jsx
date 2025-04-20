import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function Home(){
    return (
        <main>
            <NavBar />
            <section className="pt-16 md:pt-20">
                <div className="relative h-[85vh] md:h-[90vh] overflow-hidden">
                    <h4 className="text-8xl">Hello</h4>
                </div>
            </section>
            <Footer />
        </main>
    )
}