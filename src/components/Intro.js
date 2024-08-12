import React from 'react';
import './style.css';
import Video2 from '../images/VideoBg2.mp4';
import Video1 from '../images/VideoBg.mp4';

const Intro = () => {
    // var Video;

    // setInterval(getNumber, 5000);

    // function getNumber() {
    //     let Number = Math.floor(Math.random() * 10);
    //     switch(Number){
    //         case 0:
    //         case 1:
    //         case 2:
    //         case 3:
    //         case 4:
    //             Video = Video1;
    //             break;
    //         case 5:
    //         case 6:
    //         case 7:
    //         case 8:
    //         case 9:
    //             Video = Video2;
    //             break;
    //     }
    // }

    return(
        // <div className="">
            <div className= 'myVideo'>
                <div className="ibHead">
                    <video src= {Video2} autoPlay muted loop playsInline id= 'bgVideo' />
                </div>
                <div id= 'contentVideo'>
                    <div id="addText">
                        <p id='addBigText'>Think <span style= {{color: 'gold'}}>it.</span><br />Type <span style= {{color: 'gold'}}>it.</span><br />We picture <span style= {{color: 'gold'}}>it.</span></p>
                        <p id='addSmallText'>Providing high quality free stock images to help everyone looking for visuals to find great photos that can be used for free.</p>
                    </div>
                    {/* <a href={App}>Get Started</a> */}

                    <div id='Users'>
                        <span>2M+</span><br />Users&nbsp;&nbsp;
                    </div>
                </div>
            </div>


            // {/* <div id="ibHeader">
            //     <div className="ibHead">
            //         <div id="addText">
            //             <p>Think <span style= {{color: 'gold'}}>it.</span><br />Type <span style= {{color: 'gold'}}>it.</span><br />We picture <span style= {{color: 'gold'}}>it.</span></p>
            //         </div>
            //         <a href={App}>Get Started</a>
            //         <div id='Users'>
            //             <span>2M+</span><br />Users
            //         </div>
            //     </div>
            // </div> */}
            // {/* <div className= 'myVideo'>
            //     <video src= {Video} autoPlay muted loop playsInline id= 'bgVideo' />
            //         <source  type='video/mp4'/>
            //         <div id= 'contentVideo'>
            //             <hi>This is my video</hi>
            //             <p>Background video I've been struggling to fix.</p>
            //         </div>
            // </div> */}
        // </div>
    )
}

export default Intro;