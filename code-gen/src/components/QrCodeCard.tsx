import { useContext, useEffect, useState } from 'react'
import { QRCodeContext } from '../QRCodeContextProvider'
import { FileExtension } from 'qr-code-styling'


export const QrCodeCard = () => {


    const Context = useContext(QRCodeContext)
    const qrCodeBox: HTMLElement = document.getElementById('QRCode-Box')!
    const listqrcode = [Context.qrCodeParameters]
    const [QRCodeExtension, setQRCodeExtension] = useState<FileExtension>('svg')

    useEffect(() => {
        Context.setUrl(`There's any URL here!`)
    }, [])

    useEffect(() => {
        if(qrCodeBox){
            qrCodeBox.innerHTML = ''
            listqrcode[0].append(qrCodeBox)
        }
        else{
            listqrcode[0].append(qrCodeBox)
        }
    }, [Context.qrCodeParameters])

    const downloadQRCode = () => {
        Context.qrCodeParameters.download({ name: 'QR-Code', extension: `${QRCodeExtension!}` })
        
    }


    return (
        <>
                <div className='flex flex-col p-[2em] min-h-[50%] space-y-[2em]'>
                    <h1 className='text-center text-white font-bold text-[24px]'>QR Code Generator</h1>


                    <div id='QRCode-Box' className='flex justify-center'>
                        {/* show the QRCode */}
                    </div>

                    <div className='flex justify-center space-y-4'>
                        {Context.qrCodeParameters != undefined &&
                        <div>
                            <button className='bg-blue-700 text-white p-2 rounded-md' onClick={downloadQRCode}>Download</button>
                            <select onChange={(downloadType)=>{setQRCodeExtension(downloadType.target.value as FileExtension)}}>
                                    <option value="svg">svg</option>
                                    <option value="png">png</option>        
                                    <option value="jpeg">jpeg</option>        
                            </select>
                        </div>
                            
                        }
                    </div>


                </div>
        </>
    )
}