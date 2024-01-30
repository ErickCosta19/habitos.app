import Image from "next/image";

function DayState({day}: {day: boolean | undefined}){
    let image: [string, string, number ?] = ["/images/gray.svg", "gray mark", 12];

    if(day == true) image = ["/images/check.svg", "green check", 24];
    if(day == false) image = ["/images/red.svg", "red", 24]

    const [src, alt, size] = image;
    return (<div className="flex items-center justfy-center h-9">
        <Image src={src} 
        width={size}
        height={size} 
        alt={alt}/>
    </div>);
};

export default DayState