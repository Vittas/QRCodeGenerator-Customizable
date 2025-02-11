import { useContext} from "react"
import { QRCodeContext } from "../../QRCodeContextProvider"
import { DotSettings } from "./Components/DotSettings"

export const QRCodeSettingsCard = () => {

    const Context = useContext(QRCodeContext)

    const handleImageSelected = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const image = evt.target.files?.[0]

        if(image){
           const reader = new FileReader()

           reader.onload = (e) => {
            const imageDataUrl = e.target?.result as string
            Context.setImage(imageDataUrl)
           }

           reader.readAsDataURL(image)
        }
    }

    return(
        <>
            <div className="pt-[2em] pl-[2em] pb-[2em] space-y-[2em] flex flex-col items-center">

                <input type="text" onChange={(evt) => {Context.setUrl(evt.target.value)}} required 
                    className='p-[0.5em] rounded-md' placeholder='Your link...' />

                <DotSettings/>
                    


                <input type="file" accept="image/*" onChange={(evt)=>{handleImageSelected(evt)}}/>
            </div>
        </>
    )
}