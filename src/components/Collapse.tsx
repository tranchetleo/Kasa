import React, { useState } from "react";
import "./Collapse.css";

interface CollapseProps {
  title: string;
  description: string;
}

export default function Collapse({ title, description }: CollapseProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {title}
        <span className={`arrow ${open ? " open" : " closed"}`}>
          <img src="https://img.icons8.com/?size=100&id=kHqsQPiFpGjM&format=png&color=FFFFFF" alt="dropdown arrow" />
        </span>
      </button>
      <div
        className={`collapse-content${open ? " open" : " closed"}`}
      >
        <div className="collapse-description">{description}</div>
      </div>
    </div>
  );
}
