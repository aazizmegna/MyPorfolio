import ProjectItem from "./ProjectItems";
import qdisco from "../assets/img/1.jpg";
import Ischolars from "../assets/img/2.jpg";
import iwe from "../assets/img/3.jpg";

const Projects = (props) => {
  return (
    <div className="title">
      <h2>Projects I am proud of</h2>
      <ProjectItem
        title2="Latest Project"
        title3="QDisco"
        description="Qdisco is a CRM task mining application that leverages machine learning and software development
        technologies to analyze customer interactions and provide valuable insights to businesses. The project
        aims to make it easier for businesses to understand their customer needs, enhance customer
        satisfaction and retention, and ultimately drive business growth.
        "
        link="/"
        tech1="Javascript |"
        tech2="Vue.js |"
        tech3="NodeJs |"
        tech4="HTML5 | CSS3 |"
        tech5="Bootstrap"
        tech6="Git |"
        tech7="GitHub |"
        tech8=" Jira |"
        tech9="Python |"
        tech10="Machine learning |"
        tech11="RethinkDB"
        image={qdisco}
      />

      <ProjectItem
        style="reverse"
        title3="IWE"
        description="The IWé App is a platform that allows users to book appointments at beauty salons. The app also
        provides recommendations based on the user's experience history. The project was delivered on time
        and within budget. The frontend was developed using the latest web technologies, making it fast,
        responsive, and mobile-friendly. The integration with the backend APIs was seamless, ensuring a
        smooth user experience. The impact of the project was significant. The IWé App was well-received by
        users, and it helped them alot. The app received positive feedback from users, and it was featured in
        several online publications.
        "
        link="https://xn--iw-cja.com/"
        tech1="Typescript |"
        tech2="Ionic | Angular"
        tech3="NodeJs |"
        tech4="HTML5 | CSS3 |"
        tech5="Bootstrap"
        tech6="Git |"
        tech7="Bitbucket |"
        tech8=" Jira |"
        tech9="Aws |"
        tech10="OAuth |"
        tech11="MongoDB"
        image={iwe}
      />
      <ProjectItem
        title3="Iscolars"
        description="Ischolars is a web and mobile application designed to help students prepare for their exams. It provides
        an interactive learning experience by offering customized study plans, quizzes, flashcards, and past
        exams. The app also enables students to track their progress and get recommendations on what to
        study next.
        "
        link="https://apps.apple.com/tr/app/ischolars/id166866273"
        tech1="Typescript |"
        tech2="Ionic | Angular"
        tech3="NodeJs |"
        tech4="HTML5 | CSS3 |"
        tech5="Bootstrap"
        tech6="Git |"
        tech7="Bitbucket |"
        tech8=" Jira |"
        tech9="Aws |"
        tech10="OAuth |"
        tech11="MongoDB"
        image={Ischolars}
      />
    </div>
  );
};
export default Projects;
