
export const formatDate = ( _date: string ): string => {
      const [ year, month, ..._ ] = _date.slice( 0, 10 ).split( "-" )

      switch( month ){
         case "01":
            return `January ${ year }`
         case "02":
            return `February ${ year }`
         case "03":
            return `Mars ${ year }`
         case "04":
            return `April ${ year }`
         case "05":
            return `May ${ year }`
         case "06":
            return `June ${ year }`
         case "07":
            return `July ${ year }`
         case "08":
            return `August ${ year }`
         case "09":
            return `September ${ year }`
         case "10":
            return `October ${ year }`
         case "11":
            return `November ${ year }`
         case "12":
            return `December ${ year }`
         default: 
            throw Error(" convertDate ")
      }
   }