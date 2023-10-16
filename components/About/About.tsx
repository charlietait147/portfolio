import "./About.scss";
function About() {
  return (
    <section id="about" className="about">
      <div className="about__title-container">
        <h3 className="about__title">About Me</h3>
      </div>
      <p className="about__description">
        {/* Coming from an educational background in criminology and cyber-security, */}
        As an undergraduate in criminology with a master's degree in cybersecurity,
        I have acquired a strong knowledge base in computing and a talent for
        problem solving. I also have a passion for technology as a whole, with a
        particular interest in security technology and cyber-crime. I am excited
        to have the opportunity to take my skills into software engineering.
      </p>
    </section>
  );
}

export default About;
