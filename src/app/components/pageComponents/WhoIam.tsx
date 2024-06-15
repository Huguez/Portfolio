import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function WhoIam() {
  return <div className='bg-gray-50 p-16 lg:pt-28'>
  <h3 className='font-header font-semibold uppercase text-2xl sm:text-4xl lg:text-6xl text-center text-blue-600'> WHO AM I? </h3>
  <p className='text-center text-gray-800 text-base sm:text-xl lg:text-2xl'> 
    I'm a Web Application Developer
  </p>
  <div className="container mx-auto pt-5 flex flex-col md:flex-row gap-y-6 justify-center items-start ">
    <div className='px-5 w-full md:w-1/2 '>
      <p className='md:container mx-auto leading-base md:leading-loose text-sm md:text-base text-gray-500 text-justify'>
        Hi,
        I’m a skilled and competent person, I’m a web developer who likes to learn new technologies, 
        take courses to keep learning and continue my growth as a Full-stack developer.
        
        I've been accumulated experience in frontend development, using React.js and Next.js to create user interfaces. Also, 
        my experience in backend development, I use Node.js, Express.js, and Koa.js to build server-side applications.
      </p>
    </div>	
    <div className='px-5 w-full md:w-1/2 '>
      <div className='flex items-center justify-between'>
        <h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> React.js</h4>
        <div className='flex text-2xl sm:text-4xl text-amber-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> Next.js </h4>
        <div className='flex text-2xl sm:text-4xl text-amber-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt  />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> Node.js </h4>
        <div className='flex text-2xl sm:text-4xl text-amber-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> MongoDB </h4>
        <div className='flex text-2xl sm:text-4xl text-amber-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <h4 className='text-gray-500 text-base sm:text-xl lg:text-2xl'> Postgres </h4>
        <div className='flex text-2xl sm:text-4xl text-amber-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt/>
          <FaRegStar  />
        </div>
      </div>
    </div>
  </div>
</div>
}