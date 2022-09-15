import React from 'react'
import Header from '../components/header'
import Link from 'next/link'
import Footer from '../components/footer'

const About = () => {
  return (
    <div>
      <Header />
      <div className="m-3 lg:m-5">
        <h1 className="text-center">SENSATION KIZOMBA</h1>
        <h3 className="underline">Qui sommes nous ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, aperiam,
          aspernatur dolorum est fugit laboriosam libero maxime nemo obcaecati quo tempore?
          Architecto asperiores blanditiis illo nobis officiis vero, voluptas!
        </p>
        <h3 className="underline">Que faisons-nous ?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut, delectus, distinctio
          eaque error facilis fugiat id laborum minima molestiae molestias nemo odit omnis placeat
          sed vel velit vero voluptas. Enim eveniet illo pariatur voluptate? Accusamus amet aperiam
          asperiores aspernatur consectetur dicta ducimus, earum facere facilis harum illo incidunt
          magnam, molestiae neque nesciunt, pariatur quasi sunt temporibus! Iure, magnam veritatis.
        </p>
        <h3 className="underline">Où sommes nous ?</h3>
        <Link href="/nantes" passHref={true}>
          <a className="text-black no-underline">
            <h4 className="italic">Nantes</h4>
          </a>
        </Link>
        <p></p>
        <Link href="/others/le-mans" passHref={true}>
          <a className="text-black no-underline">
            <h4 className="italic">Le Mans</h4>
          </a>
        </Link>
        <p></p>
        <Link href="/others/orleans" passHref={true}>
          <a className="text-black no-underline">
            <h4 className="italic">Orléans</h4>
          </a>
        </Link>
        <p></p>
        <Link href="/others/bordeaux" passHref={true}>
          <a className="text-black no-underline">
            <h4 className="italic">Bordeaux</h4>
          </a>
        </Link>
        <p></p>
        <div>
          <p>Si vous souhaitez plus d'informations, vous pouvez prendre contact avec nous.</p>
          <p>Mais aussi venir essayer la Kizomba dans une de nos villes.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
