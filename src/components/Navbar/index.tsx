import "./style.css";

// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { MdOutlineCategory } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {/* {isOpen ? "close" : "menu"} */}
              <GiHamburgerMenu />
            </span>
          </button>

          {/* <div>{isOpen ? <p>Logo</p> : ""}</div> */}
        </header>
        <nav>
          <button type="button">
            <span className="material-symbols-outlined">
              <AiFillDashboard />
            </span>
            <p>dashboard</p>
          </button>
          <button type="button">
            <span className="material-symbols-outlined">
              <IoBagHandle />
            </span>
            <p>products</p>
          </button>
          <button type="button">
            <span className="material-symbols-outlined">
              <MdOutlineCategory />
            </span>
            <p>category</p>
          </button>
          <button type="button">
            <span className="material-symbols-outlined">
              <MdOutlinePayment />
            </span>
            <p>payments</p>
          </button>
          <button type="button">
            <span className="material-symbols-outlined">
              <FaFileInvoiceDollar />
            </span>
            <p>invoices</p>
          </button>
          <button type="button">
            <span className="material-symbols-outlined">
              <IoSettings />
            </span>
            <p>settings</p>
          </button>
        </nav>
      </aside>
    </section>
  );
};

export default Navbar;
