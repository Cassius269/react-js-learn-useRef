import { useRef } from "react";
import {paragraphs} from  '../assets/data/parapgraphs';

export default function ScrollPage() {
    const paragraphsCopie =[...paragraphs]; // copie des données avant exploitation
    
    const paragraphsRef = useRef([])


    const handleClick = (index) => {
        paragraphsRef.current[index].scrollIntoView(
            {behavior: 'smooth'}
        );
        console.log(paragraphsRef)
    } 


  return (
    <section>
      <div className="d-flex justify-content-center gap-2">
        { paragraphsCopie.map((p, index) => {
            return (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    type="button"
                    className="btn btn-outline-success"
                    >
                    {index}
                </button>
            )
        })}
      </div>
      
      {paragraphsCopie.map((p, index) => <p key={index} ref={(node) =>{paragraphsRef.current.push(node)}} >{p}</p>)}
    </section>
  );
}
