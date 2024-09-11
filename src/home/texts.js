// Utility function to load all images from the projims folder
const importAll = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((key) => {
        // Strip the file path and extension to create a usable key
        const imageName = key.replace('./', '').replace(/\.[^/.]+$/, '');
        images[imageName] = requireContext(key);
    });
    return images;
};

// Import all images from the projims folder
const images = importAll(require.context('./projims', false, /\.(png|jpe?g|svg)$/));

const texts = {
    mileCalc: {
        title: "MileCalc",
        body: "A personal web development project designed to automate weekly run planning.",
        link: "https://milecalc.harrylons.com",
        github: "https://github.com/harry-lons/MileCalc",
        imgs: [images['mc-2'],images['mc-1']]
    },
    betterGraphs: {
        title: "BetterGraphs",
        body: "",
        link: "",
        github: "",
    },
    hardHack: {
        title: "UCSD HardHack 2024",
        body: "I competed in a team of 3 at the \"UCSD HardHack\" (Hardware Hackathon) 2024, where we engineered a small wayfinding device powered by Arduino microcontroller and LCD display to direct the user home in the dark. We solved some challenging problems along the way to achieving first place in track C, outperforming 7 competitor teams",
        link: "https://docs.google.com/document/d/1S8pRMNw4NopTEcnJ9fmm_FyapqLK-i67Nd-qQjScwKQ/edit",
        github: "https://github.com/harry-lons/HardHack2024?tab=readme-ov-file",
        imgs: [images['hh-1'],images['hh-2'],images['hh-3']]
    },
    projE: {
        title: "Project Euler",
        body: "Project Euler is a site presenting a set of mathematical programming problems. It is permitted to share the solutions to the first 100 problems, and no more. I've solved a few of the first 100, and stored my solutions in a GitHub repo.",
        link: "https://projecteuler.net",
        github: "https://github.com/harry-lons/PROJECT-EULER",
    },
    TR: {
        title: "Triton Robotics",
        body: "I am a member of Triton Robotics, a competitive robotics team based at UCSD which competes in the annual RoboMaster North America (RMNA) challenge. In my role as an autonomy team member, I am working on the targeting and decision-making algorithms for the robots.",
        link: "https://tritonrobotics.ucsd.edu/",
        github: "https://github.com/Triton-Robotics",
    },
    Syn2fp: {
        title: "Synthesis 2 Final Project",
        body: "As a final project for my sophomore-year writing class, we wrote a proposal for a website which increases political accessibility in historically disenfranchised/disadvantaged communities. I created a demo React site to display what such a website could look like",
        github: "https://github.com/harry-lons/SYN-2-Project-3",
        imgs: [images['syn2-1'], images['syn2-2']]
    }
}

export default texts;