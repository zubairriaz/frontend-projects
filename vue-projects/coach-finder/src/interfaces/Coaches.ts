export type CoachState = {
    coaches: Array<Coach>;
    messages: Array<Message>;
  }
  export type Coach = {
      name?:string,
      id?: string,
      firstName:string,
      lastName: string,
      areas:string[],
      hourlyRate:number,
      description?: string
  
  }

  export type Message={
      email: string,
      message:string,
      coachId: string
  }


 export type Items = {
    [key: string]: boolean | string;
  }
  
  export type FormItemValue = {
      val : string | string[] | number,
      isValid: boolean
  }
  export type FormItems = {
    [key: string]: FormItemValue;
    
  }
  