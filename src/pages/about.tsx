import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import type { NextPageWithLayout } from '../components/layout';

const About: NextPageWithLayout = () => {
  return (
    <div>
      <div className="m-3 lg:m-5">
        <h2 className="underline">Qui sommes nous ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          accusantium, aperiam, aspernatur dolorum est fugit laboriosam libero
          maxime nemo obcaecati quo tempore? Architecto asperiores blanditiis
          illo nobis officiis vero, voluptas!
        </p>
        <h2 className="underline">Que faisons-nous ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut,
          delectus, distinctio eaque error facilis fugiat id laborum minima
          molestiae molestias nemo odit omnis placeat sed vel velit vero
          voluptas. Enim eveniet illo pariatur voluptate? Accusamus amet aperiam
          asperiores aspernatur consectetur dicta ducimus, earum facere facilis
          harum illo incidunt magnam, molestiae neque nesciunt, pariatur quasi
          sunt temporibus! Iure, magnam veritatis.
        </p>
        <h2 className="underline">Où sommes nous ?</h2>
        <Link href="/nantes" passHref>
          <a className="text-black no-underline">
            <h4 className="italic">Nantes</h4>
          </a>
        </Link>
        <p />
        <Link href="/le-mans" passHref>
          <a className="text-black no-underline">
            <h4 className="italic">Le Mans</h4>
          </a>
        </Link>
        <p />
        <Link href="/orleans" passHref>
          <a className="text-black no-underline">
            <h4 className="italic">Orléans</h4>
          </a>
        </Link>
        <p />
        <Link href="/bordeaux" passHref>
          <a className="text-black no-underline">
            <h4 className="italic">Bordeaux</h4>
          </a>
        </Link>
        <p />
        <div>
          <p>
            Si vous souhaitez plus d'informations, vous pouvez prendre contact
            avec nous.
          </p>
          <p>Mais aussi venir essayer la Kizomba dans une de nos villes.</p>
        </div>
      </div>
    </div>
  );
};

About.Layout = function AboutLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
