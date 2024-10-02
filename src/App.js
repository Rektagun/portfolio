import './output.css'

function App() {
  return (
    <div className='bg-black font-thin select-text'>

      <body className='h-lvh p-6'> 

        <div className='text-white border-gray-400 border p-6 h-full
          overflow-hidden relative'>

          <div className='text-6xl w-fit mx-auto flex flex-col'>

            <h1 className='select-text z-10'> Suryaprakash Khatri</h1>

            <div className='text-sm mx-auto my-auto mt-2 w-fit select-none'>Developer & Designer</div>

            <ul className='text-white text-4xl p-4 grid grid-cols-3 w-full mx-auto select-none'>

              <li className='p-2 hover:opacity-40 transition-opacity z-10 flex justify-center
                duration-500'><button>Home</button></li>

              <li className='p-2 hover:opacity-40 transition-opacity z-10 flex justify-center
                duration-500'><button>Projects</button></li>

              <li className='p-2 hover:opacity-40 transition-opacity z-10 flex justify-center
                duration-500'><button>Contact</button></li>

            </ul>




            <div className='bg-white h-[2080px] w-[2080px] 
              rounded-full ani-blur absolute select-none'> </div>

            <div className='bg-red-300 h-[512px] w-[512px]
              rounded-full ani-blur2 absolute right-[50%] select-none'> </div>


          </div>

          <div className='border border-white w-8/12 my-8 mx-auto text-white 
            text-4xl flex justify-center'>
            JavaScript stuff to display stuff here
          </div>

        </div>

      </body>
    </div>
  );
}

export default App;
