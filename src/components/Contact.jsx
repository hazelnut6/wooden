import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram, mdiWeb } from '@mdi/js';
import Nav from './Nav'
import '../styles/contact.css'

export default function Contact() {
  function handleClick() {
    alert('For sample only ;)')
  }

  
  return (
    <div className='contactDiv'>
      <nav>
        <Nav />
      </nav>
      <main className="contactContent">
        <header className="contactHeader">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur numquam laboriosam molestiae praesentium itaque velit culpa, molestias necessitatibus provident deserunt id assumenda cum aliquid nemo nostrum illum.
          </p>
        </header>

        <form action="#">
          <label>
            Email: <br />
            <input name='email' type="email" className='email' placeholder='email123.com' />
          </label>
          <label>
            Message: <br />
            <textarea name="message" id="message" rows={4} placeholder='Type your message' ></textarea>
          </label>
          <button className="sendBtn" type='button' onClick={() => {handleClick()}}>Send</button>
        </form>

        <section className="mediaLinks">
          <Icon path={mdiFacebook} size={1} className='mediaLinksIcon' onClick={() => {handleClick()}} />
          <Icon path={mdiInstagram} size={1} className='mediaLinksIcon' onClick={() => {handleClick()}} />
          <Icon path={mdiWeb} size={1} className='mediaLinksIcon' onClick={() => {handleClick()}} />
        </section>

        <footer className="contactFooter">
          <p>©Wooden 2025</p>
        </footer>
      </main>
    </div>
  )
}
