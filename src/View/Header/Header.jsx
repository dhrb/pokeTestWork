import './../../assets/styles/header.scss';
import logo from './../../assets/img/logo.svg'

function Header() {
    
    return(
        <div className='header'>
            <div className='headerWrap'>
                <div className='logotype'>
                    <a href='/'>
                        <img 
                        src={logo} 
                        alt="logo"
                        className='logoImg'
                    />
                    </a>
                </div>
                <div className='menu'>
                    <ul className='menuList'>
                        <li className='menuItem'><a href='/pokemons'>Pokemons</a></li>
                        <li className='menuItem'>Gallery</li>
                        <li className='menuItem'>About</li>
                        <li className='menuItem'>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;