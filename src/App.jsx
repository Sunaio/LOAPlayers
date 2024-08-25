import './App.css'
import Cards from './components/regionCard.jsx'
import {motion} from "framer-motion"
import videobg from  "./assets/videobg.mp4"

const fadeInAnimations = {
  initial: {
      opacity: 0,
      x: -100,
  },
  animate:  {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween", duration: 1,
        delay: 0.5,
      },
  },
};

function App() {

  return (
    <>
      <div className="backgroundVid">
          <video src={videobg} autoPlay loop muted/>
        <div className="content">
          <motion.div className="titleHead"
            variants={fadeInAnimations}
            initial="initial"
            whileInView="animate">
          <h1>LOA Players</h1>
          <p>Interactive Player Database</p>
          </motion.div>
          <motion.h1
            variants={fadeInAnimations}
            initial= {{
            opacity: 0,
            y: -50,
            }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "tween", duration: 1,
              delay: 1.7,
            },
          }}>
          Select a region</motion.h1>
          <div className="regionSelect">
            <Cards
              imageURL = "images/deadge.png"
              title = "NA West"
              desc = "Player Data from NA West Region"
            />
            <Cards
              imageURL = "images/thaemine.jpeg"
              title = "NA East"
              desc = "Player Data from NA East Region"
            />
            <Cards
              imageURL = "images/brel.jpg"
              title = "EU Central"
              desc = "Player Data from EU Central Region"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
