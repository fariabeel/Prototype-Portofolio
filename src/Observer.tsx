import html from "./assets/HTML5.svg"
import { useEffect, useRef, useState } from "react"

export default function App() {
    const container = useRef(null)
    const [intersect, setIntersect] = useState(false)

    useEffect(() => {
        const elem = container.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIntersect(entry.isIntersecting)
                if (entry.isIntersecting) {
                    console.log("intersected")
                }
            })
        }, {threshold:0.1})
        if (elem) {observer.observe(elem)}
        return () => observer.unobserve(elem)
    },[])
    return <>
    <div className="h-1000">
        <div className={`relative z-10 mt-100 profile bg-black h-163 flex justify-center flex-wrap text-white content-center gap-10 martian-mono transition-all`}>
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
          <div ref={container} id="html-card" className={`${intersect?"":"opacity-0"} shadow-[-5px_-5px_10px]`}>
          <img src={html} alt="html" id="html" className="size-15" />
          <p>html</p>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
}