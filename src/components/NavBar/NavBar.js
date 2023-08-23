import CartWidget from "../CartWidget/CartWidget"
import logo from '../../assets/logo.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    
    return(
        <nav className="navbar bg-info" bg="dark" data-bs-theme="dark">
            <Link to='/'>
                <img src={logo} alt="logo tienda" width="100px" className="ms-5"></img>
            </Link>
            <div>
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="dark" size="lg"><NavLink to={`/category/gases`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gases</NavLink></Button>
                <Button variant="dark" size="lg"><NavLink to={`/category/compresores`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Compresores</NavLink></Button>
                <Button variant="dark" size="lg"><NavLink to={`/category/aires`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Aires</NavLink></Button>
                <Button variant="dark" size="lg"><NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink></Button>
            </ButtonGroup>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar