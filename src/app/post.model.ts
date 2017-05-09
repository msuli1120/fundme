import { Idea } from './idea.model';

export class Post {
  ideas: Idea[];
  constructor(public title: string, public description: string, public manager: string, public fund: number, public current: number, public time: string) { }
}
