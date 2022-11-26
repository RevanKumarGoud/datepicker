export class users {
    id: number ;
    Name: string;
    Mail: string;
    Date : string;
    static filter: any;
  static id: string;

constructor(id: number,name: string,date: string,mail:string){
this.id =id;
this.Name = name;
this.Date = date;
this.Mail =  mail;
}
}