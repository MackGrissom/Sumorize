
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
               onClick={() => window.open('https://www.mackgrissom.io')}
               className='black_btn text-rose-700 hover:text-red-700 font-bold '>
              Support The Developer
               </button>
        </nav>
       
        <h1 className='head_text mb-5'> Earn    <span className=' second_gradient'>  More Knowledge, </span> <br className='max-md:hidden'/> Invest <span className=' second_gradient'>  Less Time </span><br className='max-md:hidden'/> 
           
      </h1>
<h2 className="desc pt-5"> Accelerate Learning with Sumorize: The Open-Source Article & Webpage Summarizer that Simplifies Complex Content Using GPT-4 By OpenAI</h2>
      {/* <img src='src/assets/sumorize.svg' alt='logo' className='w-28 h-28' /> */}

<div className="flex items-center justify-center mt-5">
      
      <a href="https://github.com/MackGrissom/Sumorize" className="text-rose-700 hover:text-red-700 font-bold black_btn">
        See Code On GitHub
      </a>
    </div>
      <h3 className='pt-5 italic text-neutral-400 '> Try  A Demo Below </h3>

        </header >
    )
}

export default Hero