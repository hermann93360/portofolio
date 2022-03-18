export class Answer{

  public keyword!: string[];
  public content!: string;
  public image?: string;


  constructor(keyword: string[], content: string, image?: string) {
    this.keyword = keyword;
    this.content = content;
    this.image = image;
  }

}
