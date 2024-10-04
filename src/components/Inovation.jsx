import './Inovation.css'
import aluminiumLBackwards from '../img/LbackwardsImage.png';


export function Inovation () {
    return (
        <>
        <div className='inovationSection'>
            <div className='inovationContentSection'>
                <div className='textContent'>
                    <span className='inovationSpan'>Innovation</span>
                    <h2 className='pureTitle'>Pure Invention</h2>
                    <p className='inovationPara'>Innovation questions everything you know. We removed the floppy drive, and people said we were wrong. We weren't. We removed the CD drive, and again people said we were wrong. We weren't. We never are. Apple Plug isn't just a pristine product. It's an essential part of showing others who you are.</p>
                </div>
            <img src={aluminiumLBackwards} alt="aluminum photo" />
            </div>
        </div>
        </>
    )
}