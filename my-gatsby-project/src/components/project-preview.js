import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const ProjectPreview = ({ slug }) => {
    <div className="project-preview">
        <Link to={`/${slug}/`}> 
            <Img
        </Link>
    </div>
}
