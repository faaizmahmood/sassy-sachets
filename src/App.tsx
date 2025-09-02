import './App.css'
import ComingSoonLanding from './pages/ComingSoonLanding'
import { motion } from "framer-motion";

function App() {


  return (
    <>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
      >

        <ComingSoonLanding />


      </motion.main>

    </>
  )
}

export default App
