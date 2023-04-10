import { renderDefaultProjects, renderProject } from "./renderProject";
import { prueba1, prueba2, oven, sauce } from "./createTodo";

export const projectArrays = [];
export const generalTodo = [];
export const cooking = [];
export const done = [];

projectArrays.push(generalTodo, cooking, done);




renderDefaultProjects(generalTodo, 'General');
renderDefaultProjects(cooking, 'Cooking classes');
renderDefaultProjects(done, 'Done');

