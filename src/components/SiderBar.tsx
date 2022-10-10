import { NavLink } from 'react-router-dom';
import { RiDatabase2Line, RiGroupLine, RiLineChartLine, RiToolsLine } from 'react-icons/ri';
import { GrRestaurant } from 'react-icons/gr';

const menus = [
    {
        path: '/collections',
        icon: <RiDatabase2Line />,

    },
    {
        path: '/users',
        icon: <RiGroupLine />
    },
    {
        path: '/logs',
        icon: < RiLineChartLine />
    },
    {
        path: '/settings',
        icon: <RiToolsLine />
    }
]

const SiderBar = () => {
    const navLinkNormalClass = 'min-w-[48px] min-h-[48px] inline-flex items-center justify-center  select-none text-inherit relative outline-none cursor-pointer no-underline  text-center border-transparent border-2 border-solid rounded-lg transition ease-in-out delay-100 hover:bg-gray-200'

    return (
        <aside className='relative z-1 flex grow-0 shrink-0 flex-col items-center w-20 pl-4 pb-0 pr-4 pt-4 bg-white border-solid border-r border-r-gray-300 h-screen'>
            <NavLink to="/" className="">
                <i className='text-4xl w-10 h-10'>
                    <GrRestaurant />
                </i>
            </NavLink>
            <nav className='flex flex-col grow justify-start overflow-x-hidden overflow-y-auto items-center content-center mt-9 mb-4 gap-y-5 w-full text-base text-black '>
                {
                    menus.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => isActive ? `border-solid border-2 border-black ${navLinkNormalClass}` : `${navLinkNormalClass}`}>
                            <i className='text-2xl'>
                                {item.icon}
                            </i>
                        </NavLink>
                    ))
                }
            </nav>
            <div className='w-10 h-10 flex items-center justify-center rounded-lg  mb-10 cursor-pointer'>
                <img src='https://joeschmoe.io/api/v1/random' alt='avatar' />
            </div>
        </aside>
    );
}

export default SiderBar;
