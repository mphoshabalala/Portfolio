import '@fortawesome/fontawesome-free/css/all.min.css';

const Projects = () => {


    return ( 
        <div className="projects" id="projects-id">
            <h1>My Projects</h1>
            <div className="my-projects">
                <div  className="project-card " id="project-1" >
                    <div className="project-content">
                        <h2 className="dr-elecro"> DR. Elecro</h2>
                        <p>DR. Elecro is a Full stack E-commerce web application that is designed to offer a wide range of electronic items for repairs and have a repairing service for booking</p>
                        <a href="https://github.com/mphoshabalala/EcommerceRepo" target="_blank">Get code on Github <i  class="fa-solid fa-circle-arrow-right" ></i></a>
                    </div>
                </div>
                <div  className="project-card " id="project-2" >
                    <div className="project-content">
                    <h2>U-Connect</h2>
                    <p>U-Connect is a full stack web application that provide a posting plaform for students and tutors to find each other and work</p>
                    <a href="">Get code on Github <i  class="fa-solid fa-circle-arrow-right" ></i></a>
                    </div>
                </div>


            </div>
        </div>
     );
}
 
export default Projects;