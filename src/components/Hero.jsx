
import { logo } from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>

                <img src={logo} alt='logo' className='w-28 object-contain' />

               <button
               type="button"
               onClick={() => window.open('https://github.com/mackgrissom')}
               className='black_btn'>
               Github
               </button>
        </nav>
        <h1 className='head_text'> Streamlined Article Summarization<br className='max-md:hidden'/>
        <span className='orange_gradient'> Using OpenAI GPT-4</span> </h1>
<h2 className="desc"> Accelerate Learning with Summify: The Open-Source Article Summarizer that Simplifies Complex Content</h2>

        </header >
    )
}

export default Hero