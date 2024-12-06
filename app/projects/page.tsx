"use client";
import useCursorGradient from "@/utils/useCursorGradient";
import { Table } from "@/components/molecules";

const Projects = () => {
    const { position, visible } = useCursorGradient();

    return (
      <main>
          <div 
            className={`${visible && 'cursor-gradient'}`}
            style={{top: position.y, left: position.x}}
          >
          </div>       
          <Table />
      </main>
      
    )
}

export default Projects;
