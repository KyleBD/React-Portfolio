import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'

const About = () => {
    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                </h1>
                <p>I am currently at the University of Toronto, where I'm pursuing a Bachelor's degree in Computer Engineering. 
                    Expected to graduate in 2027 including Co-op, my academic journey has been complemented by practical experiences 
                    that have allowed me to develop a strong skill set in both technical and soft skills.</p>
                <p>My technical skills encompass a wide range of programming languages, including C++, Python, SQL, and JavaScript. 
                    I'm equally well-versed in soft skills such as Agile Software Development, effective communication, organization,
                     and leadership, which I believe are essential for any successful software developer.</p>
                <p>In the summer of 2023, I worked as an Automation and Cloud Infrastructure Summer Student at Enmax in Calgary, AB.
                     During this period, I leveraged Python to automate tasks, streamline processes, and ensure Azure license compliance. 
                     Collaborating with cross-functional teams, I developed projects for a 2500+ employee energy company, embracing Agile
                     principles to efficiently deliver results.</p>
            </div>
        </div>
    )
}

export default About