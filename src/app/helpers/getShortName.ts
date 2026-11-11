
export const getShortName = (fullname: string): string => {
   const auxName = fullname.split(" ")
   
   if (auxName.length > 2 ) {
      return auxName[0] + " " + auxName[2]
   }

   return fullname
}