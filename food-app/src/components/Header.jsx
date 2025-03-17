

function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src="logo.jpg" alt=""/>
                <h1>Reactfood</h1>
            </div>

            <div>
                <button className="text-button">Cart</button>
            </div>
        </header>
    );
}

export default Header;