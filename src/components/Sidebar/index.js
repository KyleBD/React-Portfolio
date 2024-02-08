import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo1.png'

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'> 
        <img src={LogoS} alt="logo" />  
        <img src={LogoSubtitle} alt="Kyle" />      
    
    </Link>
</div>
    )

export default Sidebar