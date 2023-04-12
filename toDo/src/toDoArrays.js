import { renderDefaultProjects, renderProject } from "./renderProject";

export const projectArrays = [];
export const generalTodo = [];
export const cooking = [];
export const done = [];

projectArrays.push(generalTodo, cooking, done);

renderDefaultProjects(generalTodo, 'generalTodo');
renderDefaultProjects(cooking, 'cooking');

