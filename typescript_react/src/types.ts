export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartWithDescription {
  description: string;
}

export interface CoursePartOne extends CoursePartBase, CoursePartWithDescription {
  name: "Fundamentals";
}

export interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

export interface CoursePartThree extends CoursePartBase, CoursePartWithDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;
