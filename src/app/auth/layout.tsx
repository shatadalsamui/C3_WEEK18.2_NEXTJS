import {Navbar} from "@/app/components/navbar";

export default function Authlayout({children}){
    return <div>
        <Navbar/>
        {children}
    </div>
}