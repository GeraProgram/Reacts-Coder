import Carrito from "../Carrito/Carrito"


function NavBar () {
    return (
        <>
        <nav  >
            <ul>
                <li>Home</li>
                <li>Tienda</li>
                <li>Quienes Somos</li>
                <li>Contactanos</li>
            </ul>
            <input type="text" placeholder="Busqueda" />

            <Carrito/>
        </nav>
        </>
    )
}

export default NavBar