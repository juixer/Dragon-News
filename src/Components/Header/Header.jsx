import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex mb-5 justify-center items-center flex-col space-x-5'>
            <div>
            <img src={logo}></img>
            </div>
            <p className='text-lg font-extralight'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;