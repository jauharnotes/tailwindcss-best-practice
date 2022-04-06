import { useState } from "react";
import useGlobalDarkModeState from "../components/DarkMode";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const {darkMode, setDarkMode} = useGlobalDarkModeState();
  console.log(darkMode);

  const handleDarkMode = () => {
    setDarkMode(prev => !prev);
  }

  const darkClases = 'h-6 w-12 shadow-lg rounded-full absolute cursor-pointer  bg-slate-400 flex items-center p-1';

  return (
    <div className={darkMode ? 'dark:bg-slate-900' : 'dark:bg-white'}>
      <div className='container flex justify-center items-center pt-5'>
        {/* hamburger menu */}
        <button type="button" className="block absolute left-4 space-y-1">
          <span className="w-[20px] h-[2px] block bg-slate-700 dark:bg-slate-100"></span>
          <span className="w-[20px] h-[2px] block bg-slate-700 dark:bg-slate-100"></span>
          <span className="w-[20px] h-[2px] block bg-slate-700 dark:bg-slate-100"></span>
        </button>
        <h2 className='lg:text-4xl text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>
          Tutorial TailwindCSS
        </h2>
        {/* dark mode toggle */}
        <div className="absolute right-6 flex flex-row justify-center">
        <div onClick={() => handleDarkMode()} className={`${darkClases} ${darkMode ? 'justify-end' : ''}`}>
          <div className="h-5 w-5 rounded-full relative bg-black transition duration-1000"></div>
        </div>
        <p className={darkMode ? 'text-sm text-white mt-6 font-bold' : 'text-sm mt-6 text-slate-700 font-bold'}>{darkMode ? 'Dark' : 'Lght'}</p>
        </div>
      </div>
      <hr className='mt-6 mb-20 bg-slate-700'></hr>
      <div className='h-40 w-40 bg-pink-500 mx-auto group relative flex justify-center items-center'>
        <p className='absolute text-white font-bold'>Default Transition</p>
        <div className='w-full h-full bg-green-700 mx-auto rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-45 group-hover:bg-red-600 group-hover:translate-x-52 transition z-10'></div>
      </div>

      <div className='mt-20 h-40 w-40 bg-pink-500 mx-auto group relative flex justify-center items-center'>
        <p className='absolute text-white font-bold'>Smoot Transition</p>
        <div className='w-full h-full bg-green-700 mx-auto rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-45 group-hover:bg-red-600 group-hover:translate-x-52 transition duration-1000 z-10'></div>
      </div>

      <hr className='my-20 bg-slate-700'></hr>

      <div className='flex justify-center gap-10'>
        <div className='w-20 h-20 bg-pink-500 animate-[wiggle_1s_ease-in-out_infinite]'></div>
        <div className='w-20 h-20 bg-pink-500 animate-spin'></div>
        <div className='w-20 h-20 bg-pink-800 animate-spin-slow'></div>
        <div className='w-20 h-20 rounded-full bg-blue-500 animate-ping'></div>
        <div className='w-20 h-20 rounded-full bg-blue-500 animate-bounce'></div>
      </div>

      <hr className='my-20 bg-slate-700'></hr>

      <div className='container mx-auto'>
        <div className='border rounded-lg shadow-lg p-2'>
          <div className='h-7 w-7 shadow-lg rounded-full cursor-pointer flex fixed bottom-5 right-4 bg-white z-20'>
            <a href='#' className='mx-auto my-auto text-lg animate-bounce'>
              🔝
            </a>
          </div>
          <img
            src='https://placeimg.com/240/180/tech'
            alt='technology'
            className='float-left mr-3 rounded-lg sm:w-40'
          />
          <p className="dark:bg-slate-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            euismod sapien, in varius metus. Nam vel elementum arcu, eget
            viverra magna. Ut ac feugiat arcu. Integer condimentum blandit leo
            sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Etiam mollis, libero id cursus
            auctor, massa est imperdiet mauris, et feugiat diam lorem at quam.
            Nunc tempus posuere urna, sit amet varius enim posuere ac. Mauris
            eros diam, efficitur in nunc vitae, porttitor varius odio
          </p>
        </div>
      </div>

      <hr className='my-20 bg-slate-700'></hr>

      <div className='container mx-auto border rounded-lg shadow-lg columns-3 p-4 space-y-3'>
        <img src='https://source.unsplash.com/600x400' alt='Images' />
        <img src='https://source.unsplash.com/600x400' alt='Images' />
        <img src='https://source.unsplash.com/600x400' alt='Images' />
        <img src='https://source.unsplash.com/600x400' alt='Images' />
        <img src='https://source.unsplash.com/600x400' alt='Images' />
        <img src='https://source.unsplash.com/600x400' alt='Images' />
      </div>

      <hr className='my-20 bg-slate-700'></hr>

      <div className='container p-6 sm:max-w-md mx-auto border shadow-lg space-y-3 sm:bg-pink-300 md:bg-sky-300 lg:bg-red-600 rounded-md'>
        <h2 className='text-2xl font-semibold text-slate-700'>Jauharuddin</h2>
        <img
          src='https://source.unsplash.com/600x400?setup'
          alt='Image'
          className='rounded-lg'
        />
        <h1 className='text-2xl font-semibold text-slate-700'>
          Mari Belajar Programming Bersama Jauhar
        </h1>
        <p className='text-slate-700'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
          placerat massa, a porta ipsum tristique id. Mauris eget aliquam eros.
          Donec tempus, libero non euismod consectetur, ante eros pulvinar dui,
          nec interdum enim nulla vehicula risus. Nam vehicula ligula ut mauris
          commodo, nec ornare purus ornare.
        </p>
        <button
          type='button'
          className='px-4 py-2 bg-red-700 text-white uppercase rounded-lg hover:bg-red-800'
        >
          subscribe channel youtube
        </button>
      </div>

      <hr className='my-20 bg-slate-700'></hr>

      <div className='flex flex-row justify-center gap-4 px-5'>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 basis-1/4 md:basis-1/3'>
          01
        </div>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 basis-1/4 md:basis-1/3'>
          01
        </div>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 basis-1/2 md:basis-1/3'>
          01
        </div>
      </div>

      <hr className='my-20 bg-slate-700'></hr>

      <div className='flex justify-center flex-wrap gap-4 px-5'>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 w-24'>
          01
        </div>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 w-24'>
          02
        </div>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 w-24'>
          03
        </div>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 w-24'>
          04
        </div>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 w-24'>
          05
        </div>
        <div className='text-2xl text-white font-bold flex justify-center items-center bg-blue-400 rounded-lg h-14 w-24'>
          06
        </div>
      </div>

      <hr className='mt-20 bg-slate-700'></hr>
    </div>
  );
}
