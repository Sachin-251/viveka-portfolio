import Link from "next/link"

const NavLink = ({href, title}) => {

    const handleScroll = (e) => {
        e.preventDefault();
        // console.log(href);
        const elem = document.getElementById(`${href}`);
        elem.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Link href={href} onClick={handleScroll} className='block active:text-purple-500 py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white transition duration-500'>{title}</Link>
    )
}

export default NavLink;