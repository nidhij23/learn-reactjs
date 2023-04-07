import LogotTitle  from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

const Home =()=>{
    const [letterClass,setLetterClass]=useState('text-animate')
    const nameArray=['N','i','d','h','i']
    const jobArray=['f','u','l','l']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi,<br></br> I am 
                <img src={LogotTitle} alt='developer'/>
                    <AnimatedLetters letterClass={letterClass} 
                    strArray={nameArray}
                    idx={15}></AnimatedLetters>
                    <br/>
                    Full Stack Engineer
                    
                
                </h1>
                <h2></h2>
                <Link to="/contact" className='flat-button'>COnTACT ME</Link>
            </div>
        </div>
    );
}
export default Home