import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm 
                <img src={LogoTitle} alt="developer" />
                Kyle
                <br />
                Aspiring Software Engineer
                </h1>
            </div>
        </div>
    )
}

export default Home