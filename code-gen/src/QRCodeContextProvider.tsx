import QRCodeStyling from "qr-code-styling"
import { createContext, useState } from "react"

interface IQRCodeContext{
    QRCode: QRCodeStyling[]
    setQRCode: React.Dispatch<React.SetStateAction<QRCodeStyling[]>>
    generateQRCode: (url?: string, color?: string) => void
    verifyExistQRCode: () => boolean
  
  }
  
  
export const QRCodeContext = createContext({} as IQRCodeContext)
  
export const QRCodeContextProvider = ({children}: any) => {
    
    const [QRCode,  setQRCode] = useState<QRCodeStyling[]>([])
    
    const generateQRCode = (url?: string, color?: string ) =>{
      const qrCode: QRCodeStyling = new QRCodeStyling({
  
          width: 300,
          height: 300,
          data: `${url}`,
          dotsOptions: {
            color: `${color}`
          }
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
  