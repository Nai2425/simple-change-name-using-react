const Navbar = () => {
    return ( 
        <>
        <nav className="navbar">
            <div className="logo">
            <h1>Simple Change Name</h1>
            </div>
            <div className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/Create">Create Blog</a></li>
                <li><a href="/about">About</a></li>
            </div>
        </nav>
        </>
     );

}
 
export default Navbar;