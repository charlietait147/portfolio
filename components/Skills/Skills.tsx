"use client"

import "./Skills.scss";
import  CIcon from "@coreui/icons-react";
import {cibNextJs, cibSassAlt, cibReact, cibPostman, cibMysql, cibGit, cibHtml5, cibTypescript, cibJava, cibMongodb, cibTrello, cibGithub, cibWordpress, cibJavascript} from "@coreui/icons";

function Skills() {
    return ( 
        <section id="skills" className="skills">
            <div className="skills__title-container">
                <h3 className="skills__title">Skills</h3>
            </div>
            <div className="skills__icons-container">
                <CIcon icon={cibHtml5} className="skills__icon" />
                <CIcon icon={cibSassAlt} className="skills__icon" />
                <CIcon icon={cibTypescript} className="skills__icon" />
                <CIcon icon={cibReact} className="skills__icon" />
                <CIcon icon={cibNextJs} className="skills__icon" />
                <CIcon icon={cibMysql} className="skills__icon" />
                <CIcon icon={cibGit} className="skills__icon" />
                <CIcon icon={cibGithub} className="skills__icon" />
                <CIcon icon={cibPostman} className="skills__icon" />
                <CIcon icon={cibJava} className="skills__icon" />
                <CIcon icon={cibMongodb} className="skills__icon" />
                <CIcon icon={cibWordpress} className="skills__icon" />
               
            </div>

        </section>
     );
}

export default Skills;