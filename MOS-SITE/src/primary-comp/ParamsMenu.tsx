import "../App.css";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";

interface ParamsMenuProps {
  viewing?: boolean;
  parametring?: boolean;
  correcting?: boolean;

  setViewing: (v: boolean) => void;
  setParametring: (v: boolean) => void;
  setCorrecting: (v: boolean) => void;
}


export default function ParamsMenu(props: ParamsMenuProps) {

    return (
            
        <div className="flex flex-row gap-4 p-3 border-b border-white/20">
            <button onClick={() => {
                props.setParametring(true)
                props.setCorrecting(false)
                props.setViewing(false)
              }    
            } 
             className="items-center p-1 rounded-none pr-3 hover:shadow-white/60 hover:shadow-sm text-white border-r border-white/20">
                <AdjustmentsHorizontalIcon className="h-5 w-5" />  
            </button> 
            <button onClick={() => {
                props.setParametring(false)
                props.setCorrecting(true)
                props.setViewing(false)
              }    
            }  className="items-center p-1 rounded-none hover:shadow-white/60 hover:shadow-sm text-white">
                <EnvelopeIcon className="h-5 w-5" />
            </button>
            <button onClick={() => {
                props.setParametring(false)
                props.setCorrecting(false)
                props.setViewing(true)
              }    
            } className="items-center p-1 pl-3 rounded-none hover:shadow-white/60 hover:shadow-sm text-white border-l border-white/20 ">
                <Bars3CenterLeftIcon className="h-5 w-5" />
            </button>

             
        </div>
    )
}

