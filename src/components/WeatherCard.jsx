


export default function WeatherCard() {
    
    return (
        <div className="flex  justify-center text-black ">
            <div className="flex flex-col bg-gray-100  h-80 w-[70%] p-5 font-bold  border-1  rounded-lg">

                <div className="text-xl">
                    <h1 className=" text-xl border-b-1 p-5 mb-4 border-gray-400" >
                        khenifra

                    </h1>

                </div>
                <div>
                    <div className="flex flex-row p-5  ">
                        <p className="text-xl pt-2">21 °C</p>

                        {/*<img className="h-10 w-10 ml-10 mb-6" src="/soleil.png" height={1} width={40} />*/}
                        
                        
                    </div>
                    <div className="flex flex-row gap-20 pl-5">
                        {/* <Stat title="Wind Speed" value={`${weather?.wind?.speed} km/h`} />
                        <Stat title="Humidity" value={`${weather?.main?.humidity} %`} />
                        <Stat title="Pressure" value={`${weather?.main?.pressure} hPa`} />
                        <Stat title="Visibility" value={`${weather?.visibility} m`} /> */}










                    </div>


                </div>


            </div>



        </div>

    )


}
// function Stat({ title, value }: any) {
//     return (
//         <div className="border p-2 rounded-lg">
//             <p className="font-normal">{title}</p>
//             <p>{value}</p>
//         </div>
//     );
// }