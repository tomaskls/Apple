import './Plug.css'
import aluminiumPhoto from '../img/aluminium.webp'
import logo from '../img/logo.svg'

export function Plug () {
    return (
        <>
        <section className="plugSection">
            <img className='logo' src={logo} alt="apple icon" />
            <p className='lightestPara'>Our lightest product ever.</p>
            <img className='aluminum' src={aluminiumPhoto} alt="aluminium sticks" />
        </section>
        </>
    )
}
