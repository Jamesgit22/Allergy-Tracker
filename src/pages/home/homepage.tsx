import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function homepage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = useSession();
  const user = session.data?.user;
  return (
    <>
      <div id="profile-container" className="mt-20 min-h-full pt-5">
        <div className="white-bg mx-auto w-11/12 rounded-lg border px-5 drop-shadow-xl">
          <h2 className="text-center hover:underline py-3">
            {user?.name || "Profile"}
          </h2>
          <div id="menu-options">
            <div id="safe-options" className="menu-bg rounded p-1">
              <h3 className="mint-txt">Safe:</h3>
              <ul className="dark-txt p-1">
                <motion.li whileHover={{ scale: 1.01, x: "3px" }}>
                  <Link href={""}>Ingredients</Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.01, x: "3px" }}
                  className="lt-grey-b-col border-y"
                >
                  <Link href={""}>Dishes</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.01, x: "3px" }}>
                  <Link href={""}>Restaurants</Link>
                </motion.li>
              </ul>
            </div>
            <div id="avoid-options" className="menu-bg my-5 rounded p-1">
              <h3 className="red-txt ">Avoid:</h3>
              <ul className="dark-txt p-1">
                <motion.li whileHover={{ scale: 1.01, x: "3px" }}>
                  <Link href={""}>Ingredients</Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.01, x: "3px" }}
                  className="lt-grey-b-col border-y"
                >
                  <Link href={""}>Dishes</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.01, x: "3px" }}>
                  <Link href={""}>Restaurants</Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        <div className="white-bg mx-auto w-11/12 rounded-lg border px-5 drop-shadow-xl mt-5">
          <h3 className="text-center py-3">Reactions</h3>
          <div id="reaction-container" className="menu-bg rounded p-1 max-h-32 overflow-y-scroll">
            <ul> {/* ------------ Need to map over the users list of reactions */}
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
              <li>
                <Link href={'/'}>Place Holder</Link>
              </li>
            </ul>
          </div>
          <div id="add-container" className="flex justify-center">
          <button className="blue-bg mx-auto white-txt rounded-full my-3 py-1 w-6/12">+ Add</button>
          </div>
        </div>
      </div>
    </>
  );
}
