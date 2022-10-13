const AboutItem = (props) => {
  return (
    <div>
      <div className="projectsbg">
        <div id="projects">
          <article className={props.style}>
            {/**className="reverse" */}
            <div className="text">
              <h3>{props.title3}</h3>
              <p className="blackbox">{props.description}</p>
              <h4>My favorite technologies include:</h4>
              <ul>
                <li>{props.tech}</li>
                <li>{props.tech1}</li>
                <li>{props.tech2}</li>
                <li>{props.tech3}</li>
                <li>{props.tech4}</li>
                <li>{props.tech5}</li>
                <li>{props.tech6}</li>
              </ul>
            </div>
            <img src={props.image} alt="" />
          </article>
        </div>
      </div>
    </div>
  );
};
export default AboutItem;
