export class Post {
  id: number;
  title: string;
  userId: number;
  body: string;

  public getType() {
    return 'hello type ' + this.title;
  }
}
