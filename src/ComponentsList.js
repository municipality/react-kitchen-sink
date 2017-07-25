import Navbutton from './components/Navbutton';
import Slider from './components/Slider';
import DropdownMenu from './components/DropdownMenu';
import {LandingCoverContainer} from './components/LandingCover';
import {PhotoButtonContainer} from './components/PhotoButton';
import Parallax from './components/Parallax';

const componentsList = [
  {
    name: 'Navbutton',
    comp: Navbutton
  },
  {
    name: 'Slider',
    comp: Slider
  },
  {
    name: 'Dropdown Menu',
    comp: DropdownMenu
  },
  {
    name: 'Landing Cover',
    comp: LandingCoverContainer
  },
  {
    name: 'Photo Button',
    comp: PhotoButtonContainer
  },
  {
    name: 'Parallax',
    comp: Parallax
  }
];

export default componentsList;
