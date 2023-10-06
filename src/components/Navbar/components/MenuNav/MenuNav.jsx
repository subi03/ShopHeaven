import InfoFooter from '../../InfoFooter';
import useDetectKeyboardOpen from 'use-detect-keyboard-open';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import SearchBar from './components/SearchBar';
function MenuNav({ showMenu }) {
    const isKeyboardOpen = useDetectKeyboardOpen();
    const isHidden = showMenu || isKeyboardOpen ? 'w-3/4' : 'w-0';

    return (
        <div
            className={`menu-navbar h-screen border-r border-black ${isHidden}
            md:transition-none md:absolute md:top-4 md:h-12 md:flex-row-reverse md:border-none
            md:w-[65%] md:right-16 md:overflow-x-visible
            md:justify-between`}
        >
            <SearchBar />
            
            <InfoFooter classProps={'pt-48 flex flex-col gap-4 md:hidden'} />
        </div>
    );
}

MenuNav.propTypes = {
    showMenu: PropTypes.bool.isRequired
};

export default MenuNav;
