"use client";
import useCursorGradient from "@/utils/useCursorGradient";

export default function Projects() {
    const { position, visible } = useCursorGradient();

    return (
      <main>
          <div 
            className={`${visible && 'cursor-gradient'}`}
            style={{top: position.y, left: position.x}}
          >
          </div>
      </main>
      
    )
}
