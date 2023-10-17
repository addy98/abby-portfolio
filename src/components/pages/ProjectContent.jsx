import PageSection from "./PageSection";
import { ThemeContext } from "../../ThemeContext";

export default function ProjectContent({ darkMode, page }) {
    return (
        <div className="project-content">
            <div className={'my-120-130 '+(darkMode ? 'bg-black text-white' : 'bg-white text-black')} darkMode={darkMode}>
                <ThemeContext.Provider value={darkMode}>
                    <PageSection section={page.sections[0]} />
                    <PageSection section={page.sections[1]} page={page}/>
                    <PageSection section={page.sections[2]} />
                    {page.sections[3] !== undefined &&
                        <PageSection section={page.sections[3]} />
                    }
                    {page.sections[4] !== undefined &&
                        <PageSection section={page.sections[4]} />
                    }
                    {page.sections[5] !== undefined &&
                        <PageSection section={page.sections[5]} />
                    }
                    {page.sections[6] !== undefined &&
                        <PageSection section={page.sections[6]} />
                    }
                </ThemeContext.Provider>
            </div>
        </div>
        
    )
}