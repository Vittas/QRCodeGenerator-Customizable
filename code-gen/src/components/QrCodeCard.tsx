import QRCodeStyling from 'qr-code-styling'
import { useContext, useState } from 'react'
import { QRCodeContext } from '../App'



export const QrCodeCard = () => {
    const [url, setUrl] = useState<string>('')

    const Context = useContext(QRCodeContext)


    const downloadQRCode = () => {
        if(Context.QRCode != undefined){
            Context.QRCode.download({name:'QR-Code', extension:'svg'})
        }
    }


    return(
        <>
        <div className='flex justify-center h-screen items-center'>
            <div className='flex flex-col bg-slate-500 p-[2em] h-[75%] rounded-md space-y-[2em]'>
                <h1 className='text-center text-white font-bold text-[24px]'>QR Code Generator</h1>
                <div className='flex justify-center space-x-[2em]'>
                    <input type="text" value={url} onChange={(evt)=> setUrl(evt.target.value)} name="" id="" className='p-[0.5em] rounded-md' placeholder='Your link...'/>
                    <button className='text-white bg-blue-700 p-[0.5em] rounded-md' onClick={()=>{Context.generateQRCode(url)}}>Generate</button>
                </div>
                
                <div id='QRCode-Box' className='flex justify-center'>
                    {/* show the QRCode */}
                    {Context.QRCode?.append(document.getElementById('QRCode-Box') || undefined) || undefined}
                </div>

                <div className='flex justify-center space-y-4'>
                    {Context.QRCode != undefined && 
                        <button className='bg-blue-700 text-white p-2 rounded-md' onClick={downloadQRCode}>Download</button>
                    }
                </div>
                
            
            </div>
        </div>
        </>
    )
}