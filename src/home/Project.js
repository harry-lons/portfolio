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
                {props.title}
            </AccordionSummary>
            <AccordionDetails>
                {props.link && (
                    <p>
                        Link: <a href={props.link}>{props.link}</a>
                    </p>
                )}
                {props.text}

            </AccordionDetails>
        </Accordion>
    );
}

export default Project;
