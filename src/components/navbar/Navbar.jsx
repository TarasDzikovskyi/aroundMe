import './navbar.scss';
import {Link} from "react-router-dom";
import profile from '../../img/elephant.jpg';
import {useLocation} from 'react-router-dom'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';


export default function Navbar() {
    const user = true;

    const location = useLocation();
    console.log(location);

    return(
        <div className='navbar'>

            <div className="wrapper">
                <div className="left">

                    <Link to='/' className="logo"><TravelExploreIcon className='mr5'/>AroundMe</Link>
                </div>


                {location.pathname !== '/auth' && (
                    <div className="right">

                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/favorite'}>Favorites</Link></li>
                            <li><Link to={'/about'}>About Us</Link></li>
                        </ul>

                        <div className="info">

                            <div className="search_icon">
                                <div className="span3 widget-span widget-type-raw_html custom-search"
                                     data-widget-type="raw_html" data-x="4" data-w="3">
                                    <div className="cell-wrapper layout-widget-wrapper">
                                    <span id="hs_cos_wrapper_module_14308928327274411"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html"
                                          data-hs-cos-general-type="widget" data-hs-cos-type="raw_html">
                                            <form role="search" className="navbar-form navbar-left ng-pristine ng-valid"
                                                  id="express-form" noValidate="">
                                                <input required="" name="search" className="form-control tt-input"
                                                       id="express-form-typeahead" autoComplete="off" spellCheck="false"
                                                    // onClick={(event) => setValue(event.target.value)}
                                                    //    onChange={(e) => setValue(e.target.value)}
                                                       dir="auto" type="text"/>
                                                <button className="search-btn"><span className="icon"></span></button>
                                            </form>
                                    </span>
                                    </div>
                                </div>
                            </div>

                            {user && (
                                <img src={profile} alt=""className='avatar'/>
                            )}

                            {user ? (
                                <Link to='/auth' ><LogoutIcon className='icon'/></Link>
                            ) : (
                                <Link to='/auth' ><LoginIcon className='icon'/></Link>

                            )}

                        </div>

                    </div>

                )}

            </div>
        </div>
    )
}