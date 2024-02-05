export const EndText = ({text,link})=>{
return <div className="flex  justify-center font-medium text-lg ">
    <div className="pr-2">{text}</div>
    <div className=" underline">{link}</div>
</div>
}