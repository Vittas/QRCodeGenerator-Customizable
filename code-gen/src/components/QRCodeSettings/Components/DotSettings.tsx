import { useContext } from "react"
import { QRCodeContext } from "../../../QRCodeContextProvider"
import { CornerDotType, CornerSquareType, DotType } from "qr-code-styling"

export const DotSettings = () => {
    const Context = useContext(QRCodeContext)
    
    return(
        <>
            <div>
                <h2 className="text-left my-[0.5em] text-[21px] font-semibold">dot color</h2>

                <div className="flex space-x-6 w-full text-left">
                    
                    <div className="flex flex-col w-full  space-y-2 ">
                        <label className="" htmlFor="">corner </label>
                        <input type="color" onChange={(evt) => {Context.setCornerDotColor(evt.target.value)}}
                        className="w-full rounded-md"/>
                        <select className="w-full text-black p-2 rounded-md" onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {Context.setcornerDotType(evt.target.value as CornerDotType)}} >
                            <option value={'square'}>Square</option>
                            <option value={'dot'}>Dot</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col w-full space-y-2">
                        <label htmlFor="">center </label>
                        <input type="color" onChange={(evt) => {Context.setCenterDotColor(evt.target.value)}}
                        className="w-full rounded-md"/>
                        <select className="w-full text-black p-2 rounded-md" onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {Context.setCenterDotType(evt.target.value as DotType)}} >
                            <option value={'square'}>Square</option>
                            <option value={'dots'}>Dots</option>
                            <option value={'classy'}>Classy</option>
                            <option value={'classy-rounded'}>Classy-rounded</option>
                            <option value={'rounded'}>Rounded</option>
                            <option value={'extra-rounded'}>Extra-rounded</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full space-y-2">
                        <label htmlFor="">square </label>
                        <input type="color" onChange={(evt) => {Context.setSquareColor(evt.target.value)}}
                        className="w-full rounded-md"/>
                        <select className="w-full text-black p-2 rounded-md" onChange={(evt : React.ChangeEvent<HTMLSelectElement>) => {Context.setSquareType(evt.target.value as CornerSquareType)}} >
                            <option value={'square'}>Square</option>
                            <option value={'dot'}>Dot</option>
                            <option value={'extra-rounded'}>Extra-rounded</option>
                        </select>
                    </div>
                
                </div>
            </div>
            
        </>
    )
}