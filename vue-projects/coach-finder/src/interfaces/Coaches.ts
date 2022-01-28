export type CoachState = {
    coaches: Array<Coach>;
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


 export type Items = {
    [key: string]: boolean | string;
  }
  
  type FormItemValue = {
      val : string | string[] | number,
      isValid: boolean
  }
  export type FormItems = {
    [key: string]: FormItemValue;
    
  }
  