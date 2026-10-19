import { createPortal } from "react-dom"


const Portal=({flag=false,children})=>{
    return flag ? createPortal(
        <div className="mt-36 fixed z-50 w-full h-dvh flex justify-center text-white overflow-y-scroll scroll-bar-none">
             {children}
        </div>,
        document.getElementById('portal')):" ";
}

export default Portal;