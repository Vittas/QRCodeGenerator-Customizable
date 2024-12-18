import { createContext, useState } from 'react'
import './App.css'
import { QrCodeCard } from './components/QrCodeCard'
import QRCodeStyling from 'qr-code-styling'

interface IQRCodeContext{
  QRCode: QRCodeStyling | undefined
  setQRCode: any
  generateQRCode: any

}

export const QRCodeContext = createContext({} as IQRCodeContext)

const QRCodeContextProvider = ({children}: any) => {
  const [QRCode,  setQRCode] = useState<QRCodeStyling | undefined>()
  
  const generateQRCode = (url?: string | undefined) =>{
    const QRCode: QRCodeStyling | undefined = new QRCodeStyling({
        width: 300,
        height: 300,
        data: `${url}`
    })
    // const QRCode_Box = document.getElementById("QRCode-Box")
    // QRCode.append(QRCode_Box || undefined)
    setQRCode(QRCode)
    // QRCode.download()
    
  }

  return(
    <QRCodeContext.Provider value={{ QRCode, setQRCode, generateQRCode }}>
      {children}
    </QRCodeContext.Provider>
  )
}

function App() {
  return (
    <>
      <body className='bg-slate-800 h-screen'>
        <QRCodeContextProvider>
          <QrCodeCard/>
        </QRCodeContextProvider>
      </body>
    </>
  )
}

export default App


