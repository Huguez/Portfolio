
export interface JobI {
   companyName: string,
   startDate:   string,
   endDate:     string,
   position:    string,
   location:    string,
   modeWork:    ModeWorkT,
   description: string,
   id:          string,
}

export type ModeWorkT  = 'hybrid' | 'remote' | 'on-site' | 'freelance' | ""

export interface IExperienceForm {
   companyName: string;
   startDate: string;
   endDate: string;
   position: string;
   modeWork: ModeWorkT;
   description: string
   location:    string,
}