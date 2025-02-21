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
            <div className="pt-[2em] pl-[2em] pb-[2em] space-y-[2em] flex flex-col text-left divide-y-2">

                <h2 className="text-[21px] text-center font-semibold">Configurações</h2>

                
                <div>
                    <h1 className="mt-[1.5em]">URL:</h1>
                    <input type="text" onChange={(evt) => {Context.setUrl(evt.target.value)}} required 
                        className='p-[0.6em] w-full rounded-md' placeholder='Your link...' />
                </div>


                <DotSettings/>
                    

                <div className="relative space-y-[1em]">
                    <h2 className="text-left my-[0.5em] text-[21px] font-semibold">Imagem</h2>
                {/* Input file escondido */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelected}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    
                    {/* Botão personalizado com ícone */}
                    <div className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                        </svg>
                        Escolher arquivo
                    </div>
                </div>
            </div>
        </>
    )
}