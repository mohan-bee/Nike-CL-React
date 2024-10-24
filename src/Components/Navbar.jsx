import Logo from '/images/brand_logo.png'
import './Navbar.css'
const Navbar = () =>{
    return(
        <>
       <div className="navbar">
       <img src={Logo} alt="" />
        <ul className='list-items'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button className='login-btn primary'>Login</button>
       </div>
        </>
    )
}

export default Navbar