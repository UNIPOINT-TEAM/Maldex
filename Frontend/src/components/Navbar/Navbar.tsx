/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import { MoreFilter } from "..";
import SearchModal from "../SearchModal/SearchModal";

import NavbarModal from "./NavbarModal";

const Navbar = () => {
    return (
        <div className=" px-3 lg:px-0">
            <header>
                <Topbar />
                <nav className="container_xxl ">
                    <div className="flex justify-between items-center py-2 gap-3 lg:gap-5">
                        <div className="flex justify-around gap-5 ">
                            <NavbarModal />
                            <MoreFilter />
                        </div>
                        <SearchModal />
                        <div className="items-center justify-between text-fs_3 gap-5 hidden md:flex font-medium">
                            <Link
                                to={"category/1"}
                                className="text-redPrimary "
                            >
                                <span className="underline mr-2">new</span>
                                <sup className="font-bold text-fs_7">243</sup>
                            </Link>
                            <div className="text-greenPrimary">
                                <span className="underline mr-2">hits</span>
                                <sup className="font-bold text-fs_7">243</sup>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
