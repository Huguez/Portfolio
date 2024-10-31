
export interface JobI {
   companyName: string,
   startDate:   string,
   endDate:     string,
   position:    string,
   location:    string,
   modeWork:    ModeWorkT,
   description: string,
   createdAt:   string,
   updatedAt:   string,
   id:          string,
}

export type ModeWorkT  = 'hybrid' | 'remote' | 'on-site' | 'freelance'
