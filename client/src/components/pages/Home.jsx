import React from 'react'
import Navbar from '../static_comps/Navbar'
import '../../CSS/home.css'
import sm from '../../images/sm.png'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="landing">
        <div className="left-landing">
          <h1>hello! i'm Anish</h1><br />
          <div className="type">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumm.</p></div>
        </div>
        <div className="right-landing">
          <img src={sm} alt="" />
        </div>
      </div>

      <div className="mid-sec">
        <div className="box">
          <div className="mini-bar">
            <div className="mini-circle">
              <h1>50% <br />skills</h1>
            </div>
          </div>
          <div className="mini-bar1"><div className="mini-circle">
            <h1>75% <br />skills</h1>
          </div>
          </div>
          <div className="mini-bar2"><div className="mini-circle">
            <h2>100% <br />urge to <br /> slay yo <br />mom</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home