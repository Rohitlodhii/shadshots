"use client";

 
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


export default function HomePage() {

  const router = useRouter();


  return (
    <div className="relative h-screen mt-[-64px] flex size-full items-center justify-center overflow-hidden">
    
    <div className="flex flex-col md:gap-6 gap-4 items-center justify-center  lg:max-w-screen-lg mx-auto z-10">
        <div className="bg-neutral-500 group md:px-4 md:py-[3px] flex md:gap-3 justify-center items-center rounded-2xl text-zinc-300 cursor-pointer hover:text-white text-sm py-[2px] px-2 gap-1"><span>✨</span> Shadshots v1 <ArrowRight className="h-4 w-4 transition ease-in group-hover:translate-x-1"/> </div>

        <div className="flex flex-col items-center justify-center gap-3 w-full ">
          <div className="lg:text-8xl md:text-6xl text-[32px] leading-[40px] text-center tracking-tighter font-medium">Essential Building Blocks for Web Developers</div>
          <div className="lg:max-w-xl md:max-w-lg md:text-xs max-w-60 mx-auto text-center lg:text-lg text-[8px] tracking-tighter">Elegant, responsive components and starter kits built with ShadCN, perfect for jumpstarting your next project’s frontend.</div>

        </div>

        <div onClick={()=>router.push('/docs')} className="bg-neutral-950 dark:bg-neutral-50 dark:text-neutral-900 group px-4 py-2 flex gap-3 justify-center items-center rounded-lg text-zinc-100 cursor-pointer hover:text-white mt-4"> Browse Components <ArrowRight className="h-4 w-4 transition ease-in group-hover:translate-x-1"/> </div>
    </div>






    <GridPattern
      width={30}
      height={30}
      x={-1}
      y={-1}
      strokeDasharray={"4 2"}
      className={cn(
        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
      )}
    />
  </div>
  );
}
