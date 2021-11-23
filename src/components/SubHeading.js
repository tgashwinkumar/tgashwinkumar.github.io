import React, {useEffect} from 'react'
import Customcolors from '../utils/Customcolors'

const SubHeading = ({text, type}) => {

    useEffect(() => {
        
    }, [])

    const getColorClass = type => {
        if(type === "red"){
            return "vampire-fangs"
        }else if(type === "blue"){
            return "congress-blue"
        }
    }

    return (
        <div className="text-5xl md:text-5xl font-head font-bold relative">
            <p className={`text-${getColorClass(type)} absolute`}>{text}</p>
            <p className="relative top-0.5 left-0.5" style={{WebkitTextFillColor: "transparent", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: Customcolors[getColorClass(type)]}}>{text}</p>
        </div>
    )
}

export default SubHeading
