import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Project(props) {

    return (
        <Accordion sx={{
            backgroundColor: '#151313', color: 'white', width: '100%',
            '&:not(:last-child)': {
                borderBottom: '1px solid #D8A25E' // Separating line color
            },
            boxShadow: '0px 4px 8px #000'
        }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon
                    sx={{ color: 'white' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="project-title">
                    {props.title}
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {props.link && (
                    <p>
                        Relevant Link: <a href={props.link} style={{ color: '#66b2b2' }} target="_blank" rel="noreferrer">{props.link}</a>
                    </p>
                )}
                {props.github && (
                    <p>
                        GitHub Repo: <a href={props.github} style={{ color: '#66b2b2' }} target="_blank" rel="noreferrer">{props.github}</a>
                    </p>
                )}
                {props.body}
                {props.imgs && (
                    <div>
                        <p>Images: </p>
                        {
                            props.imgs.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={`Image ${index}`} style={{ width: '90%', height: 'auto', maxWidth: '100%' }} />
                                </div>
                            ))
                        }
                    </div>
                )}


            </AccordionDetails>
        </Accordion>
    );
}

export default Project;
