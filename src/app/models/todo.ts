export class Todo {
  id: number;
  description: string = '';
  status: boolean = false;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
