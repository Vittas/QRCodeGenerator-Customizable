import { useContext, useEffect, useState } from 'react'
import { QRCodeContext } from '../QRCodeContextProvider'
import QRCodeStyling from 'qr-code-styling'


export const QrCodeCard = () => {


    const Context = useContext(QRCodeContext)
    const qrCodeBox: HTMLElement = document.getElementById('QRCode-Box')!
    
    useEffect(() => {
        const listqrcode = [Context.qrCodeParameters]
        if(qrCodeBox){
            qrCodeBox.innerHTML = ''
            listqrcode[0].append(qrCodeBox)
        }
        else{
            listqrcode[0].append(qrCodeBox)
        }
    }, [Context.qrCodeParameters])

    const downloadQRCode = () => {
        Context.qrCodeParameters.download({ name: 'QR-Code', extension: 'svg' })
        
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
                            <button className='bg-blue-700 text-white p-2 rounded-md' onClick={downloadQRCode}>Download</button>
                        }
                    </div>


                </div>
        </>
    )
}