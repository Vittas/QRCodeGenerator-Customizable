import { useContext, useEffect, useState } from 'react'
import { QRCodeContext } from '../QRCodeContextProvider'


export const QrCodeCard = () => {


    const Context = useContext(QRCodeContext)
    const qrCodeBox: HTMLElement | null = document.getElementById('QRCode-Box')

    
    useEffect(() => {
        if (qrCodeBox && Context.verifyExistQRCode()) {
            qrCodeBox.innerHTML = ''
            Context.QRCode[0].append(qrCodeBox)
        }
        else{
            Context.generateQRCode()    
        }
    }, [Context.QRCode])

    const downloadQRCode = () => {
        if (Context.QRCode != undefined) {
            Context.QRCode[0].download({ name: 'QR-Code', extension: 'svg' })
        }
    }


    return (
        <>
                <div className='flex flex-col p-[2em] min-h-[50%] space-y-[2em]'>
                    <h1 className='text-center text-white font-bold text-[24px]'>QR Code Generator</h1>


                    <div id='QRCode-Box' className='flex justify-center'>
                        {/* show the QRCode */}


                    </div>

                    <div className='flex justify-center space-y-4'>
                        {Context.QRCode[0] != undefined &&
                            <button className='bg-blue-700 text-white p-2 rounded-md' onClick={downloadQRCode}>Download</button>
                        }
                    </div>


                </div>
        </>
    )
}