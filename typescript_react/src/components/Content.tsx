import React from "react";

import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map(part => {
        switch (part.name) {
          case "Fundamentals":
            return (
              <div>
                <p>{part.name}</p>
                <p>{part.description}</p>
                <p>Exercises: {part.exerciseCount}</p>
              </div>
            )
          case "Using props to pass data":
            return (
              <div>
                <p>{part.name}</p>
                <p>Exercises: {part.exerciseCount}</p>
                <p>Group projects: {part.groupProjectCount}</p>
              </div>
            )
          case "Deeper type usage":
            return (
              <div>
                <p>{part.name}</p>
                <p>{part.description}</p>
                <p>Submission link: <a href={part.exerciseSubmissionLink}>{part.exerciseSubmissionLink}</a></p>
                <p>Exercises: {part.exerciseCount}</p>
              </div>
            )
          default:
            return assertNever(part);
        }
      })}
    </>
  )
}

export default Content;
