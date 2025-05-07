import Footer from "../components/footer";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import NewsLetter from "../components/newsletter";
import Categories from "../components/products/categories";
import Collections from "../components/products/collections";
import ProductCard from "../components/products/productCard";
import Products from "../components/products/products";

export default function Home(){
    return (
        <main>
            <NavBar />
            <Hero />
            <Products />
            <Collections ></Collections>
            <Categories />
            <NewsLetter />
            <Footer />
        </main>
    )
}