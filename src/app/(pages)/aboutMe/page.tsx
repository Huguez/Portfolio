
import type { Metadata } from "next";
import me from '/public/me/Carlos_Huguez.jpeg'; 
import { CertificateCard } from "@/components";


export const metadata: Metadata = {
   title: "About Me | Carlos Huguez's Portfolio",
   description: "Carlos Huguez's Portfolio.",
 };

export default function AboutMePage() {

   const certificates = [ 
      {
         title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
         img: "https://img-c.udemycdn.com/course/240x135/1879018_95b6_3.jpg",
         link: "https://www.udemy.com/certificate/UC-d51ca863-decf-4270-a393-5c215edb661c/",
      }, {
         title: "Máster en SQL Server: Desde Cero a Nivel Profesional [2024]",
         img: "https://img-c.udemycdn.com/course/240x135/2069857_a16d_15.jpg",
         link: "https://www.udemy.com/certificate/UC-eea470fe-13db-4659-ad35-1d162e667245/"
      }, {
         title: "React - The Complete Guide 2024 (incl. Next.js, Redux)",
         img: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
         link: "https://www.udemy.com/certificate/UC-48418145-39ae-448e-8150-c740d4676836/"
      }, {
         title: "React: Aplicaciones en tiempo real con Socket-io",
         img: "https://img-c.udemycdn.com/course/240x135/3548798_09f7_2.jpg",
         link: "https://www.udemy.com/certificate/UC-2e8b1fbf-7b28-4b9d-ac94-a3c82e323cbe/"
      }, {
         title: "Docker - Guía práctica de uso para desarrolladores",
         img: "https://img-c.udemycdn.com/course/240x135/5010670_1ac1.jpg",
         link: "https://www.udemy.com/certificate/UC-064edbcd-a003-4bc6-b75b-61f24e395bc5/"
      }, {
         title: "Node: De cero a experto",
         img: "https://img-c.udemycdn.com/course/240x135/1562070_d426_3.jpg",
         link: "https://www.udemy.com/certificate/UC-79ee1474-b9eb-4587-af7e-8e6cb82e9e94/"
      }, {
         title: "Next.js: El framework de React para producción",
         img: "https://img-c.udemycdn.com/course/240x135/4510678_1844_2.jpg",
         link: "https://www.udemy.com/certificate/UC-8c8976bf-e5ea-4abb-b709-32ac0072703d/",
      }, {
         title: "Understanding TypeScript",
         img: "https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg",
         link: "https://www.udemy.com/certificate/UC-f7a56cdb-ea54-4ca1-8d65-75fb04fe232a/"
      }, {
         title: "MongoDB - The Complete Developer's Guide 2024",
         img: "https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg",
         link: "/aboutMe"
      }
   ]

   return (
      <div className="container mx-auto pt-0 sm:py-16 ">
      
         <div className="block sm:flex sm:justify-between sm:gap-10 mt-0" >
            <div className="w-full sm:w-2/6 mb-7 sm:mb-0 ">
               <div className='bg-cover bg-center bg-no-repeat mx-auto h-48 w-48 md:h-64 md:w-64  lg:h-80 lg:w-80 rounded-lg ' style={{ backgroundImage: `url(${ me.src })` }} >
               </div>
            </div>
            <div className=" sm:mx-auto w-full sm:w-4/6  sm:pr-5 ">
               <h2 className="font-semibold uppercase md:mb-4 text-xl md:text-3xl lg:text-4xl text-center sm:text-left text-blue-600"> About Me </h2>
               <p className="mb-4 px-5 sm:px-0 text-gray-700 text-justify text-base sm:text-md md:text-lg"> I'm a web developer with knowledge in Frontend with React (16, 17, 18) and React-router (v5, v6) as well as React-Redux, Javascript (ES6+) and  typescript (6, 7). I can make Unit test, integration test with jest ( 27, 28 ), jest-dom( 5 ), enzyme ( 2, 2.9 ) and enzyme-adapter-react-16. </p>
               <p className="mb-4 px-5 sm:px-0 text-gray-700 text-justify text-base sm:text-md md:text-lg"> On Backend I've been worked with Node.js ( v20, v18, v16, v14 ) building API REST with express.js ( 4.18, 4.17 ) with express-static (1.2, 1.0), express-fileupload ( 1.4, 1.1 ), express-validator ( 6.14, 6.13 ) and Koa.js ( 2.14, 2.13, 2.9 ) with Koa-router ( 12.0, 11.0, 10.1 ) also. For the manager of databases since code i've used an object relational mapper that is Sequelize ( 6.32, 6.31, 6.29 ), and mongoose ( v8, v7, v6 ).
                  <br />
                  About databases I've experiences with mysql and postgresSQL creating relationship databases, storeprocedures, triggers, temporal tables, functions and views. </p>
            </div>
         </div>

         <hr className="bg-gray-200 h-0.5 w-8/12 mx-auto my-10" />

         <div className="block sm:gap-10 mt-0">
            <h3 className="font-semibold uppercase lg:ml-10 md:mb-4 text-lg md:text-2xl lg:text-3xl text-center sm:text-left text-blue-600"> Certifications </h3>
            <div className=" grid grid-cols-1 md:grid-cols-2  "> 
               {
                  // lg:ml-12 md:mb-4
                  certificates.map( ( cer, index: number ) => (

                     <CertificateCard key={index} { ...cer } />

                  ) )
               }
            </div>
         </div>
      </div>
   );
}