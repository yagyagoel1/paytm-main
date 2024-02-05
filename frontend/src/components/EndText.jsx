import {Link} from "react-router-dom"
export const EndText = ({text,link,to})=>{
return <div className="flex  justify-center font-medium text-lg ">
    <div className="pr-2">{text}</div>
    <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {link}
      </Link>
</div>
}