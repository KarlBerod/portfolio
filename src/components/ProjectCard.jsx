import '../styles/ProjectCard.css';

export default function ProjectCard({logo, skill1="null", skill2="null", skill3="null", skill4="null", skill5="null"}){
    const skills = [skill1, skill2, skill3, skill4, skill5];

    return(
        <div className='project-card' >
            <div className='card-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='card-skills'>
                {skills.map((skill, index) => 
                    (skill !== "null") && <img src={skill} alt={`skill ${index + 1}`}/>
                )}
            </div>
        </div>
    )
}