import { useContext, useState } from "react"
import { QRCodeContext } from "../QRCodeContextProvider"

export const QRCodeSettingsCard = () => {
    
    const Context = useContext(QRCodeContext)
    const [url, setUrl] = useState<string>('')
    const [color, setColor] = useState<string>('#000000')
    return(
        <>
            <div className="pt-[2em] pl-[2em] pb-[2em] space-y-[2em] flex flex-col items-center">
                {/* <div className='flex justify-center space-x-[2em]'> */}
                <input type="text" onChange={(evt) => {setUrl(evt.target.value),evt.target.value.length>= 1 ? Context.generateQRCode(evt.target.value,color) : null }} required 
                    className='p-[0.5em] rounded-md' placeholder='Your link...' />
                    {/* <button className='text-white bg-blue-700 p-[0.5em] rounded-md' onClick={() => { Context.generateQRCode(url) }}>Generate</button> */}
                {/* </div> */}
                <input type="color" onChange={(evt) => {setColor(evt.target.value),url.length > 1 ? Context.generateQRCode(url, evt.target.value) : Context.generateQRCode(undefined ,evt.target.value)}}
                 className="w-[100%]"/>
                <h1>asdasdas</h1>
            </div>
        </>
    )
}