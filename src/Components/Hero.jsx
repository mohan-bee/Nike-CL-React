import AmazonLogo from '/images/amazon.png'
import FlipkartLogo from '/images/flipkart.png'
import ShoeImg from '/images/shoe_image.png'
import './Hero.css'
const Hero = () =>{
    return(
        <>
        <div className="hero">
            <div className="content">
                <h1>
                YOUR FEET DESERVE THE BEST
                </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="buttons">
                    <button className="shop-btn primary">Shop Now</button>
                    <button className="cat-btn secondary">Category</button>
                </div>
                <div className="avail">
                    <p>Also Available on </p> <br />
                    <div className="images">
                        <img src={AmazonLogo} alt="AmazonLogo" />
                        <img src={FlipkartLogo} alt="FlipkartLogo" />
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img src={ShoeImg} alt="Stylish Red Nike Shoe" />
            </div>
        </div>
        </>
    )
}

export default Hero