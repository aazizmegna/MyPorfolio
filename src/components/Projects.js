import ProjectItem from "./ProjectItems";
import selteskiloimg from "../assets/img/sellteskilos.PNG";
import lung from "../assets/img/lung.JPG";

const Projects = (props) => {
  return (
    <div className="title">
      <h2>Projects I am proud of</h2>
      <ProjectItem
        title2="Latest Project"
        title3="Sell tes Kilos"
        description="Sell Tes kilos is an application that connects two people in order to offer or to ask some services. Those two people are: a traveler going from one country or city to another, and a customer who would like to send a package in a country or city. I am the initiator of the project. The main programming language in the development of this project is JavaScript. You can find below the link of the GitHub repository and the list of technologies used."
        link="/"
        tech1="React 18"
        tech2=" HTML5"
        tech3=" CSS3"
        tech4="Bootstrap"
        tech5="Style component"
        image={selteskiloimg}
      />
      <ProjectItem
        style="reverse"
        title3="Lung disease detection using deep learning"
        description="This is my master's thesis project. In this project, I developed a system to automatically detect lung cancer, covid 19 or pneumonia potentially present in an individual lung. To build our model, I used the deep learning technique of convolutional neural networks (CNN) which is the most efficient in image processing. The prediction system applies to computed tomography (CT) images. After that, I deployed the model and created a web application using React that will allow users to upload images and get predicted results."
        link="/"
        tech1="React 16"
        tech2=" HTML5"
        tech3=" CSS3"
        tech4="Python"
        tech5="Keras"
        image={lung}
      />
    </div>
  );
};
export default Projects;
