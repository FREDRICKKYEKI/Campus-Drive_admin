import React,{useState} from 'react'
import mobtut1 from '../Media/mobtut1.jpeg'
import mobtut3 from '../Media/mobtut3.jpeg'

export const MobileTut = () => {
    const imgtut = [mobtut1, mobtut3]
    const tut = [   '1. Sign up/Log in to Campus Drive and enter the Folder Code.',
                    '2. Done!!! The folders with their respective files will now be accessible from the mobile device. Take a tour into Campus Drive.']
  return (
    <div>
        <h4 style={{fontWeight:"bold",margin:"12px"}}>2). Campus Drive Mobile Tutorial:</h4>
    <div className='carD'>
    {imgtut.map((url,index)=>
        <center key={index}>
            
                <h5>{tut[index]}</h5>
                <img src={url} className='mobtut'/>
           <hr/>
        </center>
    )
    } </div>
      <div className='rules mt-4'>
            <h4><u><i>Rules to follow:</i></u></h4>
            <ul>
                <li>Make sure to carefully follow the tutorial shown above for Campus Drive to work correctly.</li>
                <li>Only upload <b>pdf/word/excel</b> documents..</li>
                <li>Please delete all files in a folder before deleting the folder.</li>
                <li>Uploading using a computer is highly suggested for best the user experience.</li>
            </ul>
        </div>
    </div>
  )
}
