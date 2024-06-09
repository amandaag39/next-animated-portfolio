"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';
import {motion} from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];
const Navbar = () => {
    const [open, setOpen] = useState(false)

const topVariants={
    closed:{
        rotate:0,
    },
    open:{
        rotate:45,
        backgroundColor:"rgb(255,255,255)"
    }
}

const centerVariants={
    closed:{
        opacity:1,
    },
    open:{
        opacity:0,
    }
}

const bottomVariants={
    closed:{
        rotate:0,
    },
    open:{
        rotate:-45,
        backgroundColor:"rgb(255,255,255)"
    }
}

const listVariants = {
    closed:{
        x:"100vw"
    },
    opened:{
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        }
    },
}

const listItemVariants = {
    closed:{
        x:-10,
        opacity: 0,
    },
    opened:{
        x: 0,
        opacity: 1,
    },
}
    return (
        <nav className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* LINKS */}
            <div className='hidden md:flex gap-4 xl:w-1/3'>
                {links.map(link=>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="w-auto text-lg rounded-md p-1 font-semibold flex items-center justify-center">
                    {/* Inline SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                    <span className='mr-1 ml-1'>
                        Dev by
                    </span>
                    <span className='w-auto h-8 rounded bg-teal-600 text-white flex items-center justify-center p-2'>Amanda</span>
                </Link>
            </div>
            {/* SOCIAL */}
            <div className='hidden md:flex gap-4 xl:w-1/3 xl:justify-end '>
                <Link href="https://github.com/amandaag39">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/amanda-mendez1/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className='md:hidden '>
                {/* MENU BUTTON */}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen((prev) => !prev)}>
                    <motion.div variants={topVariants} animate={open ? "open" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div variants={centerVariants} animate={open ? "open" : "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? "open" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
                    {links.map(link=>(
                        <motion.div variants={listItemVariants} className='' key={link.title}>
                            <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

