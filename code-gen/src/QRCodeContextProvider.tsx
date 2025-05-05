import QRCodeStyling, { CornerDotType, CornerSquareType, DotType } from "qr-code-styling"
import { createContext, useState } from "react"

interface IQRCodeContext{
    qrCodeParameters: QRCodeStyling,
    setUrl: React.Dispatch<React.SetStateAction<string>>
    
    setImage: React.Dispatch<React.SetStateAction<string>>,

    setCenterDotColor: React.Dispatch<React.SetStateAction<string>>,
    setCornerDotColor: React.Dispatch<React.SetStateAction<string>>,
    setSquareColor: React.Dispatch<React.SetStateAction<string>>,
    setBackgroundColor: React.Dispatch<React.SetStateAction<string>>,


    setCenterDotType: React.Dispatch<React.SetStateAction<DotType>>,
    setcornerDotType: React.Dispatch<React.SetStateAction<CornerDotType>>,
    setSquareType: React.Dispatch<React.SetStateAction<CornerSquareType>>,
    
  }
  
  
export const QRCodeContext = createContext({} as IQRCodeContext)
  
export const QRCodeContextProvider = ({children}: any) => {

    // const [QRCode,  setQRCode] = useState<QRCodeStyling[]>([])
    const  [url,setUrl] = useState<string>(`There's any URL here`)
    const [image, setImage] = useState<string>('')

    // THESE ARE THE COLOR'S OF QRCODE
  
    const [centerDotColor, setCenterDotColor] = useState<string>('#000000')
    const [cornerDotColor, setCornerDotColor] = useState<string>('#000000')
    const [squareColor, setSquareColor] = useState<string>('#000000')
    const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff')


    // THESE ARE THE FORMAT TYPE OF QRCODE STYLE

    const [centerDotType, setCenterDotType] = useState<DotType>('square')
    const [cornerDotType, setcornerDotType] = useState<CornerDotType>('square')
    const [squareType, setSquareType] = useState<CornerSquareType>('square')

  

    const qrCodeParameters: QRCodeStyling = new QRCodeStyling({
  
      width: 500,
      height: 500,
      data: url != "" ? `${url}` : "There's any URL here",
      image: `${image}`,
      backgroundOptions:{
        color: `${backgroundColor}`
      },
      dotsOptions: {
        color: `${centerDotColor}`, 
        type: `${centerDotType}`
      },
      imageOptions: {
        saveAsBlob: true,
        crossOrigin: "anonymous",
        margin: 20
      },
      cornersDotOptions:{
        color: `${cornerDotColor}`,
        type: `${cornerDotType}`
      },
      cornersSquareOptions:{
        color: `${squareColor}`,
        type: `${squareType}`
      }

  })


  
    return(
      <QRCodeContext.Provider value={{ qrCodeParameters, setUrl, setCenterDotColor, setCornerDotColor, setImage, setSquareColor, setBackgroundColor, setCenterDotType, setcornerDotType, setSquareType }}>
        {children}
      </QRCodeContext.Provider>
    )
  }
  