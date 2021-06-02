export class todolist {
  id: number;
  title: String | undefined;
  completed: boolean;
  editing: boolean;

  constructor() {
    this.id = 0;
    this.title = '';
    this.completed = false;
    this.editing = false;
  }
}
