
const Footer = () => {
  return (
    <footer>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img className="rounded-full size-10" 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSef5Z6e4QhOChOQMKJW8Kem185gcB6yKDDRCPdI_miE0hxt7-i8NTavk1IsNVg_nxNo&usqp=CAU" alt="Hiroshi Adauto"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hiroshi Adauto</span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#experiencia" className="hover:text-white me-4 md:me-6">Experiencia</a>
                </li>
                <li>
                    <a href="#proyectos" className="hover:text-white me-4 md:me-6">Projectos</a>
                </li>
                <li>
                    <a href="#sobre-mi" className="hover:text-white me-4 md:me-6">Sobre mi</a>
                </li>
                <li>
                    <a href="#contacto" className="hover:text-white">Contacto</a>
                </li>
            </ul>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center">2024 - Desarrollado por: <b>Hiroshi Adauto</b></span>
    </div>
</footer>
  )
}

export default Footer