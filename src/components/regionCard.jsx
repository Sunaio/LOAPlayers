import {motion} from "framer-motion"
import {Link} from 'react-router-dom'
import './regionCard.css'

const fadeInAnimations = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween", duration: 1,
            delay: 3,
        },
    },
};

function regionCard(props) {
    return (
        //Card component used for 3 different game regions (NAW, NAE, EUC)
        //On click should route to their specific region.
        <div className="cardContainer">
            <motion.div className="card"
                variants={fadeInAnimations}
                initial="initial"
                whileInView="animate"
                whileHover={{scale:1.3}}
                transition= {{type: "spring", bounce: 0.4}}>
                <img src = {props.imageURL} alt = ''/>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </motion.div>
        </div>
    )
}

export default regionCard