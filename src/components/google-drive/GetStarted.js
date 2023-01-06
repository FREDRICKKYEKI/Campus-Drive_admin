import React,{useState,useEffect} from 'react'
import tut1 from '../Media/tut1.png'
import tut2 from '../Media/tut2.png'
import tut3 from '../Media/tut3.png'
import tut4 from '../Media/tut4.png'
import tut5 from '../Media/tut5.png'
import tut6 from '../Media/tut6.png'
import tut7 from '../Media/tut7.png'
import { MobileTut } from './MobileTut'
import './tut.css'

export  const GetStarted = ()=> {
 
  const [count, setCount] = useState(0)
  const dots = []
  const imgTut = [tut1,tut2,tut3,tut4,tut5,tut6,tut7]
  const currentImg = imgTut[count]
  const tut = [   '1. Sign up/Log in to Campus Drive.',
                  '2. Create a main class folder by clicking the shown button.',
                  '3. Click on the main class folder and again create different folders for different units (e.g. Math, Science, e.t.c)',
                  '4. Copy the folder code for later use in the mobile app',
                  '5. Open any folder, click on the upload button (next to create folder button) and choose file to upload',
                  '6. Upload progress should pop-up on the bottom right as shown above.',
                  '7. After uploading is done, the uploaded file appears on the dashboard.']


  for(let i =0; i<tut.length; i++){
      dots.push(
          <div key={i} onClick={()=>setCount(i)} className={i<=count?"dot-active":"dot"}>
              <div className={`dot-loader${i}`}/>
          </div>
      )
  }     

  const callback = () => {
      setCount(count + 1)
      if (count > imgTut.length-2){
          setCount(0)
      } 
  }

  function useInterval(callback) {
      useEffect(() =>{
              let timer = setInterval(callback, 4000)
              return () => clearInterval(timer)
          }
      )
  }

  useInterval(callback)

  return (
  <div className='tutorial p-3'>
      <h4 style={{fontWeight:"bold"}}>1). Campus Drive Web Tutorial:</h4>
      <div className='img'>
          <center>
            <div className='cont'>
                <img className='imgTut' src={currentImg} alt={`end of slide }`}/>                
            </div>
          </center> 
           
      </div>
        <center className='dots'>
            {dots}
        </center>                         
      <div className='tut'>
        <center >
           
            {/* <p style={{color:"gray",opacity:"0.3"}}>{tut[count-1]}</p> */}
            <h4>{tut[count]}</h4>
            <p style={{color:"gray",opacity:"0.3"}}>{tut[count+1]}</p>
        </center>
      </div>
      <center className='btns'>
          <div className='prev' onClick={()=>setCount(count<1?imgTut.length-1:count-1)}>
              <center >
                  <i className="fa fa-arrow-circle-left" style={{fontSize:"48px"}} ></i> 
              </center>
          </div>
          <div  className='next' onClick={()=>setCount(count<imgTut.length-1?count+1:0)}>
              <center >
                  <i className="fa fa-arrow-circle-right" style={{fontSize:"48px"}} ></i> 
              </center>
          </div>
      </center>  
      <hr/>
      <MobileTut/>  
  </div>
)
}