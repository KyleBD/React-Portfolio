import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-enimate')
    const nameArray = ['y', 'l', 'e']
    const jobArray = ['c', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g', ' ', 's', 't', 'u', 'd', 'e', 'n', 't', '.']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Computer Engineer Student @ University of Toronto</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home