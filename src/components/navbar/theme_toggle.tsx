// button to toggle between light and dark mode

import { useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
    const [light, setLight] = useState(true)

    let theme ;

    if (light){
        theme = {
            '--bg': 'var(--light-bg)',
            '--ink': 'var(--light-ink)',
            '--color': 'var(--light-color)',
            '--code-bg': 'var(--dark-color)',
            '--color-color': 'var(--light-ink)',
            "--card-bg" : "var(--light-card)", 
        };
    }else {
        theme = {
            '--bg': 'var(--dark-bg)',
            '--ink': 'var(--dark-ink)',
            '--color': 'var(--dark-color)',
            '--code-bg': 'var(--light-color)',
            '--color-color': 'var(--dark-ink)',
            "--card-bg" : "var(--dark-card)", 
        };    
    }
    
    const setVariables = (vars : any) => Object.entries(vars).forEach(v => document.documentElement.style.setProperty(v[0], v[1] as string));
    setVariables(theme);

    const changeTheme = () => {
        console.log("clicked")
        setLight(!light)
    }

    return (
        <div id="theme-toggle">

            <motion.div 
            onClick={()=>changeTheme()}
            style={{ transform : light ? "translateX(20px)" : "translateX(-20px)"}}
            transition={{duration : 1, ease : "linear"}}
            />

            <i className="fa-solid fa-sun" />
            <i className="fa-solid fa-moon" />

        </div>
    )
}

export default ThemeToggle