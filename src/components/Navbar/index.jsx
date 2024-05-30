
function Navbar() {
  return (
    <div className='h-20 flex items-center w-full text-white px-4 sm:px-6 lg:px-20'>
      <div className='text-2xl sm:text-3xl font-bold'>JobHunt</div>
      <div className="ml-auto">
        <a
          href="https://rersume.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Resume
        </a>
      </div>
    </div>
  );
}




export default Navbar