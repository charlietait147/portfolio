import "./Hero.scss";
function Hero() {
    return ( 
        <section className = "hero">
            <div className="hero__wrapper">
                    <p className="hero__welcome">Hi Everyone!</p>
                    <h1 className="hero__tagline">I'm Charlie <span className = "hero__tagline hero__tagline--bold">Tait</span></h1>
                    <p className="hero__description">I'm a <span className = "hero__description hero__description--bold">full stack developer</span>, undergraduate of criminology and master's graduate of cybersecurity, excited to write excellent quality code to increase performance and productivity. </p>
            </div>
        </section>
     );
}

export default Hero;