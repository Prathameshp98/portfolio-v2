"use client";
import useCursorGradient from "@/hooks/useCursorGradient";
import FetchHandler from "@/hooks/FetchHandler";
import { ProjectsGrid } from "@/components/molecules";

const Projects = () => {
    const { position, visible } = useCursorGradient();
    const { data, error } = FetchHandler();
    const arrowIcon = {
      left: data?.icon[0].icons[2].svg,
      rightUp: data?.icon[0].icons[0].svg
    }

    return (
      <main>
          <div 
            className={`${visible && 'cursor-gradient'}`}
            style={{top: position.y, left: position.x}}
          >
          </div>       
          <ProjectsGrid 
            projectData={data?.project}
            error={error}
            arrowIcon={arrowIcon}
          />
      </main>
      
    )
}

export default Projects;
