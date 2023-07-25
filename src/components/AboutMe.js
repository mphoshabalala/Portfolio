import meImage from '../resources/ME.png'
const AboutMe = () => {
    return ( 
        <div className="about-me" id='about-me-id'>
            <h1>About Me</h1>
            <div className="about-me-content">
            <img src={meImage} alt="" />
            <div className="my-story">
                <p>
                Hi there! I'm Mpho Shabalala, a passionate web developer with a strong background in creating dynamic and user-friendly websites. With about 4 years of exposure to the world of software, I've honed my skills in both front-end and back-end development.
                    <br /><br />
                    I specialize in crafting modern and responsive websites using the most powerful web technologies. My skill set includes proficiency in HTML, CSS, and JavaScript, and the ability to use frameworks such as ReactJS and Tailwind CSS with a strong emphasis on creating clean and semantic code. Additionally, I have a solid understanding of backend languages, including Java, NodeJS, and C++. I also have experience in working with database development in MySQL.
                    <br /><br />
                    What sets me apart is my unwavering passion for web and software development and my dedication to delivering high-quality solutions. I approach every project with creativity, attention to detail, and a user-centric mindset. I strive to create seamless user experiences by blending intuitive design with efficient functionality.
                    </p>
            </div>
            </div>
        </div>
     );
}
 
export default AboutMe;