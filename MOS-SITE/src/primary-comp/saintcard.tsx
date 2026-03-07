import "../App.css";

export default function SaintCard( 
    { params }: { params: any }) {

    //let imgSrc = getImgSrc(params.imgSrc);

    return (
        <div className=" h-96 w-auto shadow-sm shadow-amber-50 text-white">
            { params.srcimage && 
                <div className="w-40 h-40 overflow-hidden rounded-xl shadow-md p-2">
                    <img src={params.srcimage.split(';')[0]} alt="" className="rounded-3xl shadow-amber-50" />
                </div> 
            }
            <p> date of birth: {params.birth_date}</p>
            <p> date of death: {params.death_date}</p>
            <p> place of birth: {params.birthplace}</p>
            <p> place of death: {params.deathplace}</p>
        </div>
    )
}

async function getImgSrc(src: string) {
    let img =await fetch(src);
    return img;
}