"use client";
import Image from "next/image";
import burger from "/public/burger.svg";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [showNav, setShowNav] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const handleSetIsNavOpen = () => setIsNavOpen((prev) => !prev);

	const controlSetShowNav = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				setShowNav(false);
			} else {
				setShowNav(true);
			}
			setLastScrollY(window.scrollY);
		}
	};
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlSetShowNav);
		}
		return () => {
			window.removeEventListener("scroll", controlSetShowNav);
		};
	});

	return (
		<header
			className={`fixed top-0 w-[100vw] font-Anta z-50 ${
				showNav ? "translate-y-0" : "-translate-y-full"
			} transition-transform duration-300 ease-in-out`}
		>
			<div className="relative flex flex-row justify-between sm:h-[5vh] sm:pl-5 sm:pr-10 bg-[#131349] items-center z-50;">
				{isNavOpen ? (
					<p></p>
				) : (
					<Link href="/">
						<h1 className="text-white">Rooted Rhythm</h1>
					</Link>
				)}
				<button className="sm:hidden" onClick={handleSetIsNavOpen}>
					{isNavOpen ? (
						<div
							className={`fixed inset-0 bg-gradient-to-b from-purple-800 to-purple-950  h-[100vh] w-[100vw] text-white flex flex-col pt-[25vh] justify-between`}
						>
							<div className="flex flex-col items-center text-2xl space-y-10">
								<NavButton target={"/"}>Home</NavButton>
								<NavButton target={"/About"}>About</NavButton>
								<NavButton target={"/Shop"}>Shop</NavButton>
								<NavButton target={"/Book"}>Book</NavButton>
							</div>
							<div className="bg-gray-950 items-center py-[2vh]">
								<button>Close</button>
							</div>
						</div>
					) : (
						<Image src={burger} height={30} width={30} alt="burger" />
					)}
				</button>
				<div className="hidden sm:flex sm:h-[5vh] items-center">
					<div className="flex flex-row items-center justify-between space-x-4 text-white">
						<NavButton target={"/"}>Home</NavButton>
						<NavButton target={"/About"}>About</NavButton>
						<NavButton target={"/Shop"}>Shop</NavButton>
						<NavButton target={"/Book"}>Book</NavButton>
					</div>
				</div>
			</div>
		</header>
	);
}
type navButton = {
	children: string;
	target: string;
};
function NavButton(props: navButton) {
	const pathname = usePathname();
	return (
		<Link href={props.target} className={`hover:bg-purple-700 p-1 rounded-md`}>
			{props.children}
		</Link>
	);
}
