import { ArrowRight } from "lucide-react"


const BtnWithArrow = () => {
    return (
        <div className="bg-neutral-950 dark:bg-neutral-50 dark:text-neutral-900 group px-4 py-2 flex gap-3 justify-center items-center   rounded-lg text-zinc-100 cursor-pointer hover:text-white mt-4"> 
        
             Browse Components 
             <ArrowRight className="h-4 w-4 transition ease-in group-hover:translate-x-1"/>
        
         </div>
    )
}

export default BtnWithArrow ;