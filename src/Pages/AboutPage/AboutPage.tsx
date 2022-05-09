/* eslint-disable react/no-unescaped-entities */
import './aboutPage.scss';
import about from '../../images/about.png';

const AboutPage = () => (
  <div className="about__img-container">
    <h1
      className="about__title"
    >
      Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV
    </h1>
    <img className="about__img" src={about} alt="about" />

  </div>
);

export default AboutPage;
