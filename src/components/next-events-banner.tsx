import NightlifeIcon from '@mui/icons-material/Nightlife'
import { Box, Chip, Typography } from '@mui/material'

const NextEventsBanner = () => {
  // design à définir, il ne faudrait pas que ce soit très grand. Rajouter des Link par la suite
  return (
    <Box bgcolor="primary.dark" className="flex items-center justify-center gap-3 p-2">
      <Typography component="span" variant="body2">
        Prochains événements
      </Typography>
      <Chip icon={<NightlifeIcon />} label="Noite Kizomba - 24 septembre" />
      <Chip icon={<NightlifeIcon />} label="Unidade - 1 octobre" />
      <Chip icon={<NightlifeIcon />} label="Conexao - 8 octobre" />
    </Box>
  )
}

export default NextEventsBanner
