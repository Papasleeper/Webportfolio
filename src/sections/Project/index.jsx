import { useState } from "react";

const Project = () =>{

    const [MouseEnter,setIsMouseEnter] = useState({});

    return(
        <div className="">
            <div className="font-bold text-xl">Project</div>
            <div 
                className={`grid grid-cols-[20%_80%]  rounded-md px-3 py-5 ${MouseEnter["pro1"]? "bg-gray-800":""} `}
                onMouseEnter={()=>setIsMouseEnter({["pro1"]:true})}
                onMouseLeave={()=>setIsMouseEnter({["pro1"]:false})}
            >
                <div>
                    <div>2023</div>
                    <div>image</div>
                </div>
                <div className="grid gap-y-3">
                    <div>title</div>
                    <div className="flex gap-4">
                        <div>material</div>
                        <div>material</div>
                        <div>material</div>
                    </div>
                    <div className="text-Accent font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptas consequatur explicabo nobis nisi adipisci?</div>
                    <div className="flex gap-4">
                        <div >React</div>
                        <div>Tailwind</div>
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-[20%_80%] rounded-md px-3 py-5 ${MouseEnter["pro2"]? " bg-gray-800":""}`}
                 onMouseEnter={()=>setIsMouseEnter({["pro2"]:true})}
                 onMouseLeave={()=>setIsMouseEnter({["pro2"]:false})}            
            >
                <div>
                    <div>2023</div>
                    <div>image</div>
                </div>
                <div className="grid gap-y-3">
                    <div>title</div>
                    <div className="flex gap-4">
                        <div>material</div>
                        <div>material</div>
                        <div>material</div>
                    </div>
                    <div className="text-Accent font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptas consequatur explicabo nobis nisi adipisci?</div>
                    <div className="flex gap-4">
                        <div>React</div>
                        <div>Tailwind</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;