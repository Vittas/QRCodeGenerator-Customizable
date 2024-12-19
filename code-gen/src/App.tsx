import { createContext, useState } from 'react'
import './App.css'
import { QrCodeCard } from './components/QrCodeCard'
import QRCodeStyling from 'qr-code-styling'

interface IQRCodeContext{
  QRCode: QRCodeStyling[]
  setQRCode: React.Dispatch<React.SetStateAction<QRCodeStyling[]>>
  generateQRCode: (url?: string) => void
  verifyExistQRCode: () => boolean

}

export const QRCodeContext = createContext({} as IQRCodeContext)

const QRCodeContextProvider = ({children}: any) => {
  
  const [QRCode,  setQRCode] = useState<QRCodeStyling[]>([])
  
  const generateQRCode = (url?: string | undefined) =>{
    const qrCode: QRCodeStyling = new QRCodeStyling({

        width: 300,
        height: 300,
        data: `${url}`
    })
    // const QRCode_Box = document.getElementById("QRCode-Box")
    // QRCode.append(QRCode_Box || undefined)
    setQRCode([qrCode])
    // QRCode.download()
    
  }

  const verifyExistQRCode = () => {
    return QRCode.length > 0
  }

  return(
    <QRCodeContext.Provider value={{ QRCode, setQRCode, generateQRCode, verifyExistQRCode }}>
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


