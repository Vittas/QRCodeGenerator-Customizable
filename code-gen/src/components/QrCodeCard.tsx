import QRCodeStyling from 'qr-code-styling'
import { useContext, useEffect, useState } from 'react'
import { QRCodeContext } from '../App'



export const QrCodeCard = () => {

    const [url, setUrl] = useState<string>('')

    const Context = useContext(QRCodeContext)

    useEffect(() => {
        const qrCodeBox = document.getElementById('QRCode-Box')
        if (qrCodeBox && Context.verifyExistQRCode()) {
            qrCodeBox.innerHTML = ''
            Context.QRCode[0].append(qrCodeBox)
        }
    }, [Context.QRCode])

    const downloadQRCode = () => {
        if (Context.QRCode != undefined) {
            Context.QRCode[0].download({ name: 'QR-Code', extension: 'svg' })
        }
    }


    return (
        <>
            <div className='flex justify-center h-screen items-center'>
                <div className='flex flex-col bg-slate-500 p-[2em] min-h-[50%] rounded-md space-y-[2em]'>
                    <h1 className='text-center text-white font-bold text-[24px]'>QR Code Generator</h1>
                    <div className='flex justify-center space-x-[2em]'>
                        <input type="text" value={url} onChange={(evt) => setUrl(evt.target.value)} required className='p-[0.5em] rounded-md' placeholder='Your link...' />
                        <button className='text-white bg-blue-700 p-[0.5em] rounded-md' onClick={() => { Context.generateQRCode(url) }}>Generate</button>
                    </div>

                    <div id='QRCode-Box' className='flex justify-center'>
                        {/* show the QRCode */}
                    </div>

                    <div className='flex justify-center space-y-4'>
                        {Context.QRCode[0] != undefined &&
                            <button className='bg-blue-700 text-white p-2 rounded-md' onClick={downloadQRCode}>Download</button>
                        }
                    </div>


                </div>
            </div>
        </>
    )
}