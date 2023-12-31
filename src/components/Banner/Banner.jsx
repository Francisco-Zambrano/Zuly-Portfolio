import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import starship from './assets/starship.svg'
import linkedin from './assets/Linkedin.svg'
import instagram from './assets/Instagram.svg'
import tiktok from './assets/Tiktok.svg'
import './Styles.css'
 
const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(400 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Community Manager", "Social Media", "Photographer" ];
    const period = 1000;
  
    useEffect(() => {
      let interval = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(interval) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(200);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
    

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">

                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Zuly `}</h1>
                    <h1 className="wrap">: { text }</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
                    <button className="btn-img"><img src={instagram} alt="instagram"/></button>
                    <button className="btn-img"><img src={linkedin} alt="linkedin"/></button>
                    <button className="btn-img"><img src={tiktok} alt="tiktok"/></button>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img className="banner-img" src={starship} alt="starship"/>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Banner