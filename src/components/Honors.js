import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="RUNIBOT 2023 International Robotics Mega Tournament" issued="university el bosque" desc="Runibot promotes the development of research projects supported by private and public companies. In addition, it integrates seedbeds and researchers from different universities, engineering students and robotics enthusiasts to strengthen the role of engineering in Colombia and the role of professionals in the area." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
