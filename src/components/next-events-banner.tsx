import NightlifeIcon from '@mui/icons-material/Nightlife'
import Link from 'next/link'

const NextEventsBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-yellow-500 pb-6 lg:flex-row">
      <h3>Prochains événements :</h3>
      <div className="flex items-center gap-2 rounded-full bg-yellow-800 px-2 text-white">
        <Link href="#">
          <a className="text-inherit no-underline">Noite Kizomba - 24 septembre</a>
        </Link>
        <NightlifeIcon />
      </div>
      <div className="flex items-center gap-2 rounded-full bg-yellow-800 px-2 text-white">
        <Link href="#">
          <a className="text-inherit no-underline">Unidade - 1 octobre</a>
        </Link>
        <NightlifeIcon />
      </div>
      <div className="flex items-center gap-2 rounded-full bg-yellow-800 px-2 text-white">
        <Link href="#">
          <a className="text-inherit no-underline">Conexao - 8 octobre</a>
        </Link>
        <NightlifeIcon />
      </div>
    </div>
  )
}

export default NextEventsBanner
