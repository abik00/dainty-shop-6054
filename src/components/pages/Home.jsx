import React from 'react'
import "./Home.css"
import { Button } from '../Button'



const Home = () => {
  return (
    <div>
      <div class='front'>
        <div>
          <h1 id='title'>Grow your audience on social and beyond</h1>
          <p id='disc'>Buffer helps you build an audience organically.
               We’re a values-driven company that provides affordable,
             intuitive, marketing tools for ambitious people and teams.</p>
             <Button  buttonStyle='btn--outline' classname='btnl'>Get Started now</Button>
             <Button buttonStyle='btn--outline'>watch Video</Button>
        </div>
        <div class='image'>
          <img src="https://buffer.com/static/illustrations/all-channels-3.webp" alt="" />
        </div>
      </div>
      <div id='customer'>
      <h1 id='second'>Be where your customers are</h1>
      <p id='secondpara'>People spend, on average, almost 2.5 hours on social media every day. ​​Let them find your brand more easily through these four simple steps:</p>

      </div>
      <div id='counting' >
        <img src="https://buffer.com/static/misc/buffer-loop-v2.svg" alt="" />
      </div>
      <div id='plan'>
        <div>
          <h3>1. ANALYZE</h3>
          <br />
          <h1>Measure your social media performance in a few clicks</h1>
          <br />
          <p>See what’s working and deliver high engagement content.</p>
          <br />
          <Button  buttonStyle='btn--outline' classname='btnl'>Get Started now</Button>
        </div>
        <div  class='image'>
          <img src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp" alt="" />
        </div>
        <div  class='image'>
        <img src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp" alt="" />
        </div>
        <div><h3>2. PLAN AND PUBLISH YOUR CONTENT</h3><br />
          <h1>Collaborate and plan your campaigns</h1><br />
          <p>Schedule your posts in advance so you can focus on other things.</p><br />
          <Button  buttonStyle='btn--outline' classname='btnl'>Get Started now</Button></div>
        <div><h3>3. ENGAGE</h3><br />
          <h1>Respond to comments twice as fast</h1><br />
          <p>Skip to important comments with the help of labels and hotkeys.</p><br />
          <Button  buttonStyle='btn--outline' classname='btnl'>Get Started now</Button></div>
        <div  class='image'>
        <img src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
