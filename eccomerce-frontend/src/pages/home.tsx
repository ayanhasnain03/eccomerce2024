import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addToCartHandler=()=>{}
  return (
   <div className="home">
    <section></section>

    <h1>Latest Products
    <Link to="/search" className="findmore">
      More
    </Link>
    </h1>
    <main>
      <ProductCard productId="asasas" name="Vivobook" price={99999} stock={20} handler={addToCartHandler} photo="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/l/t/-original-imagtucmkuwggepy.jpeg?q=70"/>
    </main>
   </div>
  )
}

export default Home