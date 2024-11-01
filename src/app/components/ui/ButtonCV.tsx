'use client'

const baseUrl = process.env.NEXT_PUBLIC_BASEURL

export default function ButtonCV() {
   
   const getCV = async () => {
      try{
         const endpoint = `${ baseUrl }/user/aboutMe`

         const aux = await fetch( endpoint, { cache: "no-store" } )
         const blob = await aux.blob()
         const newBlob = new Blob([blob]);

         const blobUrl = window.URL.createObjectURL(newBlob);

         const link = document.createElement('a');
         link.href = blobUrl;
         link.setAttribute('download', `Carlos_Huguez_Resume.pdf`);
         document.body.appendChild(link);
         link.click();
         
         if ( link.parentNode ) {
            link.parentNode.removeChild(link);
         }
   
         // clean up Url
         window.URL.revokeObjectURL(blobUrl);
         
      }catch( err ){
         console.log( err );
      }
   }

   return <>
      <span
         onClick={ getCV }
         className="outline-none cursor-pointer	 font-bold text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm py-2 px-4  "
      >
         Download CV
      </span>
   </>
}