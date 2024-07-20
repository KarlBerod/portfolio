import '../styles/ProjectPage.css';
import data from '../data.json';
import { useState } from 'react';

export default function ProjectPage({index}){
    const projectData= data[index];
    const pictures = window.innerWidth < 700 ? projectData.phonePictures : projectData.pictures;
    const [counter, setCounter]= useState(0);
    const length=pictures.length;
    const skills=data[index].skills;
    const github=data[index].github;

    const addCounter = () =>{
        if (counter === length-1){
            setCounter(0);
        }
        else{
            setCounter(counter+1);
        }
    }

    const substractCounter = () => {
        if(counter === 0){
            setCounter(length-1);
        }
        else{
            setCounter(counter-1);
        }
    }

    return(
        <section className='project-page'>
            <div className='project-left slider' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + pictures[counter]})` }}>
                <div className='arrows'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={substractCounter} viewBox="0 0 448 512" className='slider-left-arrow'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={addCounter} viewBox="0 0 448 512" className='slider-right-arrow'><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
                <div className={`${length === 1 ? 'hidden' : ''} pagination`}>
                    {counter+1}/{length}
                </div>
            </div>
            <div className='project-right'>
                <h1>{projectData.title}</h1>
                <p>{projectData.description}</p>
                <h2>Compétences développées: </h2>
                {skills.map((skill, skillindex) =>(
                    <p className={`${skillindex} projectPageSkill`}>{skill}</p>
                ))}
                <h2 className='githubLink'>Lien vers le repo Github du projet: <a href={github} target='_blank' rel='noreferrer'><i class="fa-brands fa-github fa-xl"></i></a></h2>
            </div>
        </section>
    );
}