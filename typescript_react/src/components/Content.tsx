import React from "react";

interface ContentProps {
  name: string,
  exercises: number,
}

const Content: React.FC<ContentProps> = ({ name, exercises }) => {

  return (
    <p>{name} {exercises}</p>
  )
}

export default Content;
