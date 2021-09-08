import {
  CalendarIcon,
  DotsVerticalIcon,
  LogoutIcon,
  RefreshIcon,
  TemplateIcon
} from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Avatar from "react-nice-avatar";
import { EmptyCircleIcon } from "../../constants/customIcons";
import { Fragment } from "react";
import Link from "next/link";
import { User } from "@prisma/client";
import { auth } from "../../libs/Firebase";
import { signOut } from "@firebase/auth";

export const Header = ({ currentUser }: { currentUser: User }): JSX.Element => {
  return (
    <div className="py-3 px-6 sm:px-0 flex-1 max-w-7xl flex justify-between items-center">
      <div className="w-11/12 sm:max-w-md md:max-w-lg flex items-center justify-between flex-1 mx-auto">
        {currentUser?.user_avatar ? (
          <Link href={`/p/${currentUser.user_username}`}>
            <a>
              <Avatar className="w-12 h-12" {...currentUser.user_avatar} />
            </a>
          </Link>
        ) : (
          <SkeletonTheme color="#0F172A" highlightColor="#1E293B">
            <Skeleton circle={true} height={44} width={44} />
          </SkeletonTheme>
        )}

        <div>
          <Menu
            as="div"
            className="relative inline-block text-left text-theme-blueGray-300 z-50"
          >
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-3.5 py-3.5 text-sm font-medium rounded-md bg-black bg-opacity-[0.20] filter backdrop-blur-3xl hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <DotsVerticalIcon
                  className="w-5 h-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-black filter backdrop-blur-3xl bg-opacity-40 divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {/* Daily Page */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-theme-primary-500 text-theme-blueGray-300"
                            : "text-theme-blueGray-500"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <Link href="/app">
                          <a
                            title="Daily Page"
                            aria-label="Daily Page"
                            className="flex items-center"
                          >
                            <CalendarIcon
                              className={`w-6 h-6 ${
                                !active && "text-theme-primary-500"
                              } mr-2`}
                            />
                            Daily Page
                          </a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>

                  {/* Habits */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-theme-primary-500 text-theme-blueGray-300"
                            : "text-theme-blueGray-500"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <Link href="/habits">
                          <a
                            title="Habits"
                            aria-label="Habits"
                            className="flex items-center"
                          >
                            <RefreshIcon
                              className={`w-6 h-6 ${
                                !active && "text-theme-primary-500"
                              } mr-2`}
                            />
                            Habits
                          </a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  {/* Templates */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-theme-primary-500 text-theme-blueGray-300"
                            : "text-theme-blueGray-500"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <Link href="/templates" passHref>
                          <a
                            title="Templates"
                            aria-label="Templates"
                            className="flex items-center"
                          >
                            <TemplateIcon
                              className={`w-6 h-6 ${
                                !active && "text-theme-primary-500"
                              } mr-2`}
                            />
                            Templates
                          </a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>

                  {/* Incompletes */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-theme-primary-500 text-theme-blueGray-300"
                            : "text-theme-blueGray-500"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <Link href="/incomplete">
                          <a
                            title="Incomplete"
                            aria-label="Incomplete"
                            className="flex items-center"
                          >
                            <EmptyCircleIcon
                              className={`w-6 h-6 ${
                                !active && "text-theme-primary-500"
                              } mr-2`}
                            />
                            Incomplete
                          </a>
                        </Link>
                      </button>
                    )}
                  </Menu.Item>
                </div>

                {/* Sign Out */}
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-theme-primary-500 text-theme-blueGray-300"
                            : "text-theme-blueGray-500"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <button
                          aria-label="Sign out"
                          className="flex items-center"
                          title="Sign out"
                          onClick={() => signOut(auth)}
                        >
                          <LogoutIcon
                            className={`w-6 h-6 ${
                              !active && "text-theme-primary-500"
                            } mr-2`}
                          />
                        </button>
                        Sign Out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
