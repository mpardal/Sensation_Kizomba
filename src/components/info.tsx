import NightlifeIcon from '@mui/icons-material/Nightlife'
import Link from 'next/link'

const Info = () => {
  return (
    <div className="m-O flex items-center justify-center bg-yellow-500 p-3">
      <h3 className="mr-3">Prochaine événement :</h3>
      <Link href="#">
        <a className="mx-2 text-black no-underline">Noite Kizomba - 24 septembre</a>
      </Link>
      <NightlifeIcon className="mx-2" />
      <Link href="#">
        <a className="mx-2 text-black no-underline">Unidade - 1 octobre</a>
      </Link>
      <NightlifeIcon className="mx-2" />
      <Link href="#">
        <a className="mx-2 text-black no-underline">Conexao - 8 octobre</a>
      </Link>
      <NightlifeIcon className="mx-2" />
    </div>
  )
}

export default Info
