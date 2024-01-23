import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"

const Layout = ({children}) => {
  return (
    <>
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
			<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>	
		</div>
    {children}
      <ToastContainer className="z-[9999]"/>
    </>
  )
}

export default Layout