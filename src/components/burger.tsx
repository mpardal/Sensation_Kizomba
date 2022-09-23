import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import cx from 'classnames';

function Burger({ onOpen }: { onOpen: () => void }) {
  return (
    <IconButton
      aria-label="open drawer"
      className={cx('mr-4 lg:hidden')}
      edge="start"
      onClick={onOpen}
      size="medium"
    >
      <MenuIcon />
    </IconButton>
  );
}

export default Burger;
