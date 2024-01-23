const Header = () => {
  return (
    <header id="header" className="py-2 w-full z-[9995]">
        <div className="flex items-center justify-between xl:w-[1120px] mx-auto">
            <img className="rounded-full size-12 ml-4" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSef5Z6e4QhOChOQMKJW8Kem185gcB6yKDDRCPdI_miE0hxt7-i8NTavk1IsNVg_nxNo&usqp=CAU" alt="Hiroshi Adauto"/>
    
            <button data-collapse-toggle="navbar-hiro" 
            type="button" 
            className="items-center p-2 w-10 h-10 justify-center text-sm md:hidden hover:scale-110 transition" aria-controls="navbar-hiro" aria-expanded="false">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <nav id="navbar-hiro" className="hidden md:flex flex-row gap-x-10 opacity-80 mr-4 xl:mr-0">
                <a className="focus:scale-110 hover:scale-110 transition" href="#top">Inicio</a>
                <a className="focus:scale-110 hover:scale-110 transition" href="#sobre-mi">Sobre mí</a>
                <a className="focus:scale-110 hover:scale-110 transition" href="#experiencia">Experiencia</a>
                <a className="focus:scale-110 hover:scale-110 transition" href="#proyectos">Proyectos</a>
                <a className="focus:scale-110 hover:scale-110 transition" href="#contacto">Contacto</a>
            </nav>
        </div>                          
        
    </header>
  )
}

export default Header