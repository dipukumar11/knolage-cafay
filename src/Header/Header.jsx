import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <div  className='flex justify-between px-5 items-center border-b-4 py-2 '>
            <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />

            
        </div>
    );
};

export default Header;