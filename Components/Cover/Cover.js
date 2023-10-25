import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="
        h-screen
        text-white
        bg-slate-800 
        relative 
        min-h-[400px] 
        flex 
        justify-center 
        items-center"
        >
        <Image 
            alt="Single family modern home at dusk with attached garage, a green lawn and the light on" 
            src={background} 
            fill 
            quality="100" 
            className="mix-blend-soft-light object-cover" 
        />
        <div className="max-w-5xl z-10">{ children} </div>
    </div>
  );
};