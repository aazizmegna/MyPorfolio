const ProjectItem = (props) => {
  return (
    <div className="projectsbg">
      <div id="projects">
        <article className={props.style}>
          {/**className="reverse" */}
          <div className="text">
            <h4>{props.title2}</h4>
            <h3>{props.title3}</h3>
            <p className="blackbox">{props.description}</p>
            <a href={props.link} target="_blank">
              <small>Link to the project</small>
            </a>
            <h4>Technologies used include:</h4>
            <ul>
              <li>{props.tech1}</li>
              <li>{props.tech2}</li>
              <li>{props.tech3}</li>
              <li>{props.tech4}</li>
              <li>{props.tech5}</li>
            </ul>
          </div>
          <img src={props.image} alt="" />
        </article>
      </div>
    </div>
  );
};

export default ProjectItem;
