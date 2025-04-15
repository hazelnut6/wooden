import Nav from './Nav'
import '../styles/about.css'

export default function About() {
  return (
    <div className='aboutDiv'>
      <nav>
        <Nav />
      </nav>
      <main className='aboutContent'>
        <section className="sectOne">
          <div className="oneLeft">
            <h1>Simplicity is the ultimate sophistication...</h1>
          </div>
          <div className="oneRight">
            <img src="/images/img-stool.png" alt="Image of a wooden stool" className='stool' />
          </div>
        </section>

        <section className="sectTwo">
          <div className="twoLeft"></div>
          <div className="twoRight">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis molestias quidem quod? Tempore perspiciatis ut magnam a, commodi recusandae deserunt expedita quam rerum et eos, culpa doloribus quisquam obcaecati adipisci.
              Incidunt assumenda optio eum, dolorem excepturi consequuntur inventore architecto doloribus ipsa, quas nesciunt et consequatur vero voluptate aut cum nam maiores autem quaerat enim doloremque magni commodi esse. Minus, illo.
            </p>
          </div>
        </section>

        <section className="sectThree">
          <div className="threeLeft">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis molestias quidem quod? Tempore perspiciatis ut magnam a, commodi recusandae deserunt expedita quam rerum et eos, culpa doloribus quisquam obcaecati adipisci.
              Incidunt assumenda optio eum, dolorem excepturi consequuntur inventore architecto doloribus ipsa, quas nesciunt et consequatur vero voluptate aut cum nam maiores autem quaerat enim doloremque magni commodi esse. Minus, illo.
            </p>
          </div>
          <div className="threeRight"></div>
        </section>

        <section className="sectFour">
          <p>©Wooden 2025</p>
        </section>
      </main>
    </div>
  )
}
