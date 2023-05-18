
import { logo } from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>

                <img src={logo} alt='logo' className='w-28 object-contain' />

               {/* <button
               type="button"
               onClick={() => window.open('https://github.com/mackgrissom')}
               className='black_btn'>
               Github
               </button> */}
               <button
               type="button"
               onClick={() => window.open('https://github.com/mackgrissom')}
               className='black_btn'>
               Support The Developer
               </button>
        </nav>
        <h1 className='head_text mb-5'> More  <span className=' orange_gradient'> Knowledge, </span> Less Time <br className='max-md:hidden'/> 
           
      </h1>
<h2 className="desc pt-5"> Accelerate Learning with Sumorize: The Open-Source Article & Webpage Summarizer that Simplifies Complex Content Using GPT-4 By OpenAI</h2>

<div className="flex items-center justify-center mt-5">
      <button className="black_btn mr-4">
        Join the Waitlist
      </button>
      <a href="https://github.com" className="text-blue-500 hover:text-blue-700 font-bold">
        Contribute on GitHub
      </a>
    </div>

        </header >
    )
}

export default Hero