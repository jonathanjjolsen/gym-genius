import { Link } from 'react-router-dom';
import homeHero from '../images/home-hero.jpg';
import './homepage.css'

const Home = () => {
  return (
    <section className='bg-dark'>
      <div>
        <h1 className='text-light text-center'>Insanely Smart Workouts</h1>
        <img src={homeHero} alt="man working out" className='w-100' />
      </div>

    </section>
  )
}

export default Home;
