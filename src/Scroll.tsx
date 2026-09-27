import html from "./assets/HTML5.svg"
import { useEffect, useRef, useState } from "react"

export default function App() {
    const [scrollVal,setScrollVal] = useState(0)
    const elem = useRef(null)
    function scrollHandler() {setScrollVal(scrollY)}
    useEffect(() => {
        window.addEventListener("scroll",scrollHandler)
        console.log(scrollY)
        elem.current.classList.remove("bg-red-300!")
        if (scrollY>=100) {elem.current.classList.add("bg-red-300!")}
        return () => {window.removeEventListener("scroll",scrollHandler)}
    },[scrollVal])
    return <>
    <div className={`h-200 relative z-10 mt-10 profile bg-black h-163 flex justify-center flex-wrap text-white content-center gap-10 martian-mono transition-all`}>
      <h1 className="text-3xl">teknologi yang saya kuasai</h1>
      <div id="technology" className="w-full">
        <div className="flex justify-center space-x-2 space-y-2 
        *:p-5 
        *:flex 
        *:flex-col 
        *:items-center
        *:justify-center
        *:bg-zinc-950
        *:rounded-4xl
        *:size-40
        *:shadow-red-600
        *:hover:bg-zinc-900
        *:hover:-translate-y-2
        *:hover:shadow-[0_0_50px]
        *:transition-all
        *:duration-100">
          <div ref={elem} id="html-card" className={`shadow-[-5px_-5px_10px] ${scrollVal<=100&&"-translate-20"}`}>
          <img src={html} alt="html" id="html" className="size-15" />
          <p>html</p>
        </div>
        </div>
      </div>
    </div>
    </>
}