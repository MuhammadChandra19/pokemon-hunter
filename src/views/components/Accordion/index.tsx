import React, { useRef, useEffect } from 'react'
import './style.scss'

interface AccordionProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = (props) => {
  const accordion = useRef<HTMLDivElement>()
  const panel = useRef<HTMLDivElement>()

  const clickEvent = () => {
    accordion.current.classList.toggle("active");
    if (panel.current.style.display === "block") {
      panel.current.style.display = "none";
    }
    else {
      panel.current.style.display = "block";
    }
  }

  useEffect(() => {
    accordion.current.addEventListener("click", clickEvent)
  }, [])

  return (
    <div>
      <div className="accordion" ref={accordion}>
        {
          props.title
        }
      </div>
      <div className="panel" ref={panel} style={{ display: "none" }}>
        {
          props.children
        }
      </div>
    </div>
  )

}