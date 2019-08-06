import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

const ProjectPreview = ({ slug }) => {
    <div className="project-preview">
        <Link to={`/${slug}/`}> 
            <Img fluid = {imageData} alt={title} />
            <h2>
                <Link to={`/${slug}/`}>{title}</Link>
            </h2>
            <p>{description}</p>
        </Link>
    </div>
}
