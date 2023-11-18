import React, {useState} from "react";


/***********************
  Menu Component
 ***********************/

  const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
  
  
  /***********************
    Nav Component
   ***********************/
  
  const Nav = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              <strong>Udbhav</strong>
            </p>
            <a href="##"
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };
  
  
  
  /***********************
    Header Component
   ***********************/
  
  const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">I do</span>
            <span className="line">App developement</span>
            <span className="line">
              <span className="color">&</span> competitive code.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  
  /***********************
    About Component
   ***********************/
  
  const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Who's this guy?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Udbhav.</h4>
              <p>
                I am a full stack web developer and Android app developer based in the beautiful east coast of India,
                Visakhapatnam.
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better. I also write technical blogs 
                <a href="https://medium.com/@luckyudbhav"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Twitter profile">
                  {' '}
                  <i className="fa-brands fa-medium fa-bounce"></i>
                </a>.
              </p>
            </div>
            <div className="title">
              <h3>What does he do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a programmer.</h4>
              <p>
                For the front-end I usually work with Javascript, either standalone or including
                popular frameworks like ReactJS. I also make the web pretty by using Sass,
                CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
              </p>
              <p>
                For the back-end I also work with Javascript. But, of course, 
                whenever the project requires PHP, I do PHP as well and I also work with python (Flask).
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">competitive programmer</h4>
              <p>
                I have learnt competitive programming by using websites like LeetCode, HackerRank, CodeChef.
                I have a maintained a good profile in these websites.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  };
  
  
  /***********************
    Project Component
   ***********************/
  
  const Project = props => {
    const tech = {
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      node: 'fab fa-node',
      html: 'fa-brands fa-html5',
      python: 'fa-brands fa-python',
      unity: 'fa-brands fa-unity',
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  /***********************
    Projects Component
   ***********************/
  
  const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
          </div>
          <div className="projects-wrapper">
            <Project
              title="HealthTap."
              img={'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22572_16533781526443229.jpg'}
              tech="python js css html"
              link="https://github.com/Udbhav-regadamilli/HealthTap"
              repo="https://github.com/Udbhav-regadamilli/HealthTap"
            >
              <small>
                Built using Javascript, HTML, python, css.
              </small>
              <p>
                This is the website that I made which predict the health condition based on the symptoms
                and also suggest medicitions for it.
              </p>
            </Project>
            <Project
              title="Sentimental Analysis."
              img={'https://www.voxco.com/wp-content/uploads/2021/09/Sentiment-Analysis1.jpg'}
              tech="python html"
              link="https://github.com/Udbhav-regadamilli/Sentimental_analysis"
              repo="https://github.com/Udbhav-regadamilli/Sentimental_analysis"
            >
              <small>
                Built using Python, Jupyter Notebook, HTML.
              </small>
              <p>
                This project mainly focus on Machine learning which predicts the type of Sentiment does the statement contains.
              </p>
            </Project>
            <Project
              title="Chat Application."
              img={'https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg'}
              tech="html js node css"
              link="https://github.com/Udbhav-regadamilli/ChatApp-in-Nodejs"
              repo="https://github.com/Udbhav-regadamilli/ChatApp-in-Nodejs"
            >
              <small>Built using Node, Express, HTML, CSS.</small>
              <p>
                A website where every connected user can group chat in it.
              </p>
            </Project>
            <Project
              title="Fruit Catcher."
              img={'https://img-c.udemycdn.com/course/750x422/1867378_2550_3.jpg'}
              tech="C# unity"
              link="https://github.com/Udbhav-regadamilli/Fruit-Catcher/tree/master"
              repo="https://github.com/Udbhav-regadamilli/Fruit-Catcher/tree/master"
            >
              <small>Built using C#, unity.</small>
              <p>
                It is a 2D game developed in unity using C#.
              </p>
            </Project>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  /***********************
    Contact Component
   ***********************/
  
  const Contact = props => {

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowModal(true);
      setTimeout(() => {setShowModal(false)}, 3000);
    };

    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {''}
                <span className="mail">
                  <i className="fas fa-at at" />
                  luckyudbhav@gmail
                  <i className="fas fa-circle dot" />
                  com
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form name="contact" id="contact-form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact"/>

            <div>
              <input placeholder="Name" name="name" type="text" required/>
            </div>
            <div>
              <input placeholder="Email" name="email" type="email" required/>
            </div>
            <div>
              <textarea placeholder="Message" type="text" name="message" required/>
            </div>
            <div>
              <button className="button" id="submit" type="Submit" onClick={handleSubmit}>submit</button>
            </div>
          </form>
        </div>
        {showModal && <Modal message="Form submitted successfully!" />}
      </section>
    );
  };
  
  const Modal = ({message}) => (
    <div className="modal">
      <p>{message}</p>
      <div className="load"></div>
    </div>
  );
  
  /***********************
    Footer Component
   ***********************/
  
  const Footer = props => {
    return (
      <footer className="footer">
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Udbhav.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  
  
  
  
  /***********************
    Social Links Component
   ***********************/
  
  const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href="https://twitter.com/Udbhav35582403"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://github.com/Udbhav-regadamilli"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/luckyudbhav"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Hacker Rank Profile"
        >
          {' '}
          <i className="fab fa-hackerrank"></i>
        </a>
        <a
          href="mailto:luckyudbhav@gmail.com?subject=Feedback%20about%20react%20application."
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Mail ID"
        >
          {' '}
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    );
  };
  
  
  
  /***********************
    Main Component
   ***********************/
  
  class App extends React.Component {
    state = {
      menuState: false
    };
  
    toggleMenu = () => {
      this.setState(state => ({
        menuState: !state.menuState
          ? 'active'
          : state.menuState === 'deactive'
            ? 'active'
            : 'deactive'
      }));
    };
  
    render() {
      return (
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          crossOrigin="anonymous"/>

          <React.Fragment>
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
          </React.Fragment>
        </div>
      );
    }
  
    componentDidMount() {
      const navbar = document.querySelector('#navbar');
      const header = document.querySelector('#welcome-section');
      const forest = document.querySelector('.forest');
      const silhouette = document.querySelector('.silhouette');
      let forestInitPos = -300;
  
      window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (scrollPos <= window.innerHeight) {
          silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
          forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
        }
  
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        else header.style.visibility = 'hidden';
  
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      };
  
      (function navSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        for (let i in internalLinks) {
          if (internalLinks.hasOwnProperty(i)) {
            internalLinks[i].addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(internalLinks[i].hash).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            });
          }
        }
      })();
    }
  }

  export default App;
  