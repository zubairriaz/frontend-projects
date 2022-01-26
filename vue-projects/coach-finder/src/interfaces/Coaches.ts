export interface CoachState {
    coaches: Coach[] | [];
  }
  export interface Coach{
      name?:string,
      id?: string,
      firstName:string,
      lastName: string,
      areas:string[],
      hourlyRate:number,
      description?: string
  
  }


  