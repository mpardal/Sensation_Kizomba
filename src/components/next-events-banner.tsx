import NightlifeIcon from '@mui/icons-material/Nightlife';
import { Chip, Typography } from '@mui/material';

function NextEventsBanner() {
  // design à définir, il ne faudrait pas que ce soit très grand. Rajouter des Link par la suite => Trois événements, c'est suffisant (Micka) faire une MAJ automatique
  return (
    <div className="flex p-2 w-screen items-center bg-secondary-900">
      <Typography className="mr-3" component="span" variant="body2">
        Prochains événements
      </Typography>
      <div className="flex grow overflow-auto gap-3">
        <Chip icon={<NightlifeIcon />} label="Noite Kizomba - 24 septembre" />
        <Chip icon={<NightlifeIcon />} label="Unidade - 1 octobre" />
        <Chip icon={<NightlifeIcon />} label="Conexao - 8 octobre" />
      </div>
    </div>
  );
}

export default NextEventsBanner;
