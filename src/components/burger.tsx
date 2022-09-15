import { IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import cx from 'classnames'

const Burger = ({ open, onOpen }: { open: boolean; onOpen: () => void }) => (
  <IconButton
    size="medium"
    edge="start"
    aria-label="open drawer"
    onClick={onOpen}
    className={cx('mr-4', open && 'hidden', 'text-neutral-200', 'lg:hidden')}
  >
    <MenuIcon />
  </IconButton>
)

export default Burger
