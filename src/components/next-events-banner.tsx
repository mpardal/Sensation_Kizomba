import NightlifeIcon from '@mui/icons-material/Nightlife'
import { Box, Chip, Typography } from '@mui/material'

const NextEventsBanner = () => {
  // design à définir, il ne faudrait pas que ce soit très grand. Rajouter des Link par la suite
  return (
    <Box bgcolor="primary.dark" className="flex p-2 w-screen items-center">
      <Typography component="span" variant="body2" className="mr-3">
        Prochains événements
      </Typography>
      <div className="flex grow overflow-auto gap-3">
        <Chip icon={<NightlifeIcon />} label="Noite Kizomba - 24 septembre" />
        <Chip icon={<NightlifeIcon />} label="Unidade - 1 octobre" />
        <Chip icon={<NightlifeIcon />} label="Conexao - 8 octobre" />
      </div>
    </Box>
  )
}

export default NextEventsBanner
