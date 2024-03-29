import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    
    const letClass = async() =>{
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        }

    useEffect(() => {
        letClass();
    }, [])
    return (
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                idx={15}/>
            </h1>
            <p>
                Please feel free to reach out if you are interested in learning more about any of the projects that
                I am working on or if we are passionate about similar things!
            </p>
            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required/>
                        </li>  
                        <li>
                            <input type='Subject' name='text' placeholder='subject' required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>   
                        <li>
                            <input type='submit' className='flat-button' value='SEND'/>
                        </li>                                 
                    </ul>
                </form>
            </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact