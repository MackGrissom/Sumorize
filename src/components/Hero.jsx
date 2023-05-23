
import { logo } from '../assets'
import { Helmet } from 'react-helmet'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
          <Helmet>
    <script
        src="https://getlaunchlist.com/js/widget.js"
        type="text/javascript"
        defer
    />
</Helmet>
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
               onClick={() => window.open('https://mackgrissom.ck.page/products/mackgrissom')}
               className='black_btn !hover:text-white font-bold !bg-white !text-rose-700 hover:!text-black hover:!bg-rose-700'>
              Support The Developer
               </button>
        </nav>
       
        <h1 className='head_text mb-5'> More  <span className=' second_gradient'>   Knowledge, </span> <br className='max-md:hidden'/> Less  <span className=' second_gradient'>   Time </span><br className='max-md:hidden'/> 
           
      </h1>
<h2 className="desc pt-5 text-sm "> Speed up learning with Sumorize: GPT-4-powered Article & Webpage Summarizer.</h2>
      
      

      
        </header >
    )
}

export default Hero