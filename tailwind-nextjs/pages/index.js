export default function Home() {
  return (
    <div>
     <div className="container flex justify-center pt-5">
     <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Tutorial TailwindCSS</h2>
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

      <div className="container mx-auto">
       <div className="border rounded-lg shadow-lg p-10">
         <img src="https://placeimg.com/240/180/tech" alt="technology" className="float-left mr-3 rounded-lg"/>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in euismod sapien, in varius metus. Nam vel elementum arcu, eget viverra magna. Ut ac feugiat arcu. Integer condimentum blandit leo sed pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam mollis, libero id cursus auctor, massa est imperdiet mauris, et feugiat diam lorem at quam. Nunc tempus posuere urna, sit amet varius enim posuere ac. Mauris eros diam, efficitur in nunc vitae, porttitor varius odio</p>
       </div>
      </div>
    </div>
  );
}
