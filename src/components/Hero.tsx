import daily1 from "../assets/daily1.jpg";
import daily2 from "../assets/daily2.jpg";
import daily3 from "../assets/daily3.jpg";
import aperitivo from "../assets/aperitivo.jpg";
import liked from "../assets/liked-songs-64.png";
import profile from "../assets/profile.jpg";

//arrow
import arrowL from "../assets/svg/svg0.svg";
import arrowR from "../assets/svg/svg1.svg";
//campanella
import campanella from "../assets/svg/svg3.svg";

function Hero() {
    return (
        <div className=' bg-background-base rounded-lg py-2 px-3 overflow-auto'>
            <div className="flex justify-between gap-panel-gap ">
                <div className="flex items-center">
                    <img src={arrowL} alt="freccia" className=" p-2 bg-background-highlight rounded-full" />
                    <img src={arrowR} alt="freccia" className="p-2 bg-background-highlight rounded-full" />
                </div>
                <div className=" flex gap-panel-gap">
                    <button className=" text-black font-bold py-1 px-2 h-8 bg-essential-base transition-all hover:scale-110 rounded-3xl">
                        Esplora Premium
                    </button>
                    <div className=" p-2 bg-background-highlight rounded-full">

                        <img src={campanella} alt="campanella" className=" w-6 h-6 " />
                    </div>
                    <div className=" p-2 bg-background-highlight rounded-full">
                        <img src={profile} alt="profile" className=" w-6 h-6 rounded-full" />
                    </div>
                </div>
            </div>
            {/* variabile in base all'ora. da aggiungere */}
            <h1 className=" text-text-base font-bold text-2xl">Buongiorno</h1>
            <div className=" grid grid-cols-2 grid-rows-3 gap-panel-gap my-4">
                <div className=" bg-background-highlight flex gap-panel-gap h-20 transition-all hover:bg-background-elevated-base rounded-lg ">
                    <img src={daily1} alt="copertina" className=" rounded-tl-lg rounded-bl-lg" />
                    <h1>Daily Mix 1</h1>
                </div>
                <div className=" bg-background-highlight flex gap-panel-gap h-20 transition-all hover:bg-background-elevated-base rounded-lg ">
                    <img src={liked} alt="copertina" className=" rounded-tl-lg rounded-bl-lg" />
                    <h1>Daily Mix </h1>
                </div>
                <div className=" bg-background-highlight flex gap-panel-gap h-20 transition-all hover:bg-background-elevated-base rounded-lg ">
                    <img src={daily2} alt="copertina" className=" rounded-tl-lg rounded-bl-lg" />
                    <h1>Daily Mix </h1>
                </div>
                <div className=" bg-background-highlight flex gap-panel-gap h-20 transition-all hover:bg-background-elevated-base rounded-lg ">
                    <img src={daily3} alt="copertina" className=" rounded-tl-lg rounded-bl-lg" />
                    <h1>Daily Mix </h1>
                </div>
                <div className=" bg-background-highlight flex gap-panel-gap h-20 transition-all hover:bg-background-elevated-base rounded-lg ">
                    <img src={daily3} alt="copertina" className=" rounded-tl-lg rounded-bl-lg" />
                    <h1>Daily Mix </h1>
                </div>
                <div className=" bg-background-highlight flex gap-panel-gap h-20 transition-all hover:bg-background-elevated-base rounded-lg ">
                    <img src={aperitivo} alt="copertina" className=" rounded-tl-lg rounded-bl-lg" />
                    <h1>Daily Mix </h1>
                </div>
            </div>

            <h2 className=" text-text-base font-bold text-xl">Creato per Te</h2>

            <div className=" grid grid-cols-4 gap-panel-gap my-4">
                <div className=" bg-background-highlight flex flex-col item-center  gap-panel-gap h-full  rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={daily1} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix 1</h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
                <div className=" bg-background-highlight flex flex-col item-center  gap-panel-gap h-full  rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={liked} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix </h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
                <div className=" bg-background-highlight flex flex-col item-center  gap-panel-gap h-full  rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={daily2} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix </h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
                <div className=" bg-background-highlight flex flex-col item-center  gap-panel-gap h-full  rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={daily3} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix </h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
            </div>

            {/* 2 */}
            <h2 className=" text-text-base font-bold text-xl">Continua ad Ascoltare</h2>

            <div className=" grid grid-cols-4 gap-panel-gap my-4">
                <div className=" bg-background-highlight flex flex-col gap-panel-gap h-full rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={daily1} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix 1</h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
                <div className=" bg-background-highlight flex flex-col gap-panel-gap h-full rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={liked} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix </h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
                <div className=" bg-background-highlight flex flex-col gap-panel-gap h-full rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={daily2} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix </h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
                <div className=" bg-background-highlight flex flex-col gap-panel-gap h-full rounded-lg p-3 transition-all hover:bg-background-elevated-base ">
                    <img src={daily3} alt="copertina" className=" h-full rounded-lg" />
                    <h1 className=" text-text-base font-bold">Daily Mix </h1>
                    <p className=" text-sm">Descrizione Playlist</p>
                </div>
            </div>

        </div>

    )
}

export default Hero