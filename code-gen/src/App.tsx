import './App.css'
import { QrCodeCard } from './components/QrCodeCard'
import { QRCodeSettingsCard } from './components/QRCodeSettings/QRCodeSettingsCard'
import { QRCodeContextProvider } from './QRCodeContextProvider'


function App() {
  return (
    <>
      <QRCodeContextProvider>
        <body className='bg-slate-800 h-screen '>
          <div className='flex items-center justify-center h-screen'>
              
            <div className='bg-slate-500 flex flex-row divide-x divide-solid divide-slate-700 rounded-md space-x-10'>
              <QRCodeSettingsCard/>  
              <QrCodeCard/>
            </div>
          
          </div>
        </body>
      </QRCodeContextProvider>
      </>
  )
}

export default App


