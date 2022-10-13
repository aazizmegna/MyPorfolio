import AboutItem from "./AboutItem";

import Abdel from "../assets/img/Abdel.jpg";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="gradient"></div>
      <div className="AboutTitle">
        <h2>About Abdel Aziz KAMO MEGNA</h2>
        <AboutItem
          title3="About me"
          description="Graduated with a master's degree in artificial intelligence and data science, I have significant knowledge and experience in the fields of artificial intelligence and software development. I am a talented, ambitious and hardworking person. I am able to handle multiple daily tasks competently and work well under pressure. One of my main strengths is communication, it allows me to build strong relationships with people in order to achieve the best results."
          tech="Javascript"
          tech1="React 18"
          tech2=" HTML5"
          tech3=" CSS3"
          tech4="Ionic"
          tech5="Angular"
          tech6="Python"
          image={Abdel}
        />
      </div>
      <div className="gradient"></div>
    </div>
  );
};
export default About;
