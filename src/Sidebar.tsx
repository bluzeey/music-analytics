/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
import {
  RiHome2Line,
  RiLinkM,
  RiListCheck,
  RiSettings5Line,
} from "@remixicon/react";
import MobileSidebar from "./MobileSidebar";
import {
  WorkspacesDropdownDesktop,
  WorkspacesDropdownMobile,
} from "./SidebarWorkspacesDropdown";
import { UserProfileMobile } from "./UserProfile";

const navigation = [
  { name: "Overview", href: "#", icon: RiHome2Line },
  { name: "Details", href: "#", icon: RiListCheck },
  {
    name: "Settings",
    href: "#",
    icon: RiSettings5Line,
  },
] as const;

const shortcuts = [
  {
    name: "Go to Top 100 Global Artists",
    href: "#",
    icon: RiLinkM,
  },
] as const;

export const Sidebar = () => {
  //   const pathname = usePathname();
  //   const isActive = (itemHref: string) => {
  //     if (itemHref === siteConfig.baseLinks.settings) {
  //       return pathname.startsWith("/settings");
  //     }
  //     return pathname === itemHref || pathname.startsWith(itemHref);
  //   };
  return (
    <>
      {/* sidebar (lg+) */}
      {/* <nav className="hidden lg:block fixed h-screen flex-none border-r bg-card transition-[width] duration-500 w-72 text-black/80 dark:text-white"> */}
      <nav className="hidden h-full overflow-hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col text-black/80 dark:text-white">
        <aside className="flex grow flex-col gap-y-6 overflow-y-auto border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <WorkspacesDropdownDesktop />
          <nav
            aria-label="core navigation links"
            className="flex flex-1 flex-col space-y-10"
          >
            <ul role="list" className="space-y-0.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    // href={item.href}
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50 flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900 focusRing"
                    // className={cx(
                    //   isActive(item.href)
                    //     ? "text-indigo-600 dark:text-indigo-400"
                    //     : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                    //   "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                    //   focusRing
                    // )}
                  >
                    <item.icon className="size-4 shrink-0" aria-hidden="true" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <span className="text-xs font-medium leading-6 text-gray-500">
                Shortcuts
              </span>
              <ul aria-label="shortcuts" role="list" className="space-y-0.5">
                {shortcuts.map((item) => (
                  <li key={item.name}>
                    <a
                      // href={item.href}
                      className="text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50 flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900 focusRing"
                      //   className={cx(
                      //     pathname === item.href || pathname.startsWith(item.href)
                      //       ? "text-indigo-600 dark:text-indigo-400"
                      //       : "text-gray-700 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                      //     "flex items-center gap-x-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100 hover:dark:bg-gray-900",
                      //     focusRing
                      //   )}
                    >
                      <item.icon
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="mt-auto">{/* <UserProfileDesktop /> */}</div>
        </aside>
      </nav>
      {/* top navbar (xs-lg) */}
      <div className="fixed w-full top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-2 shadow-sm sm:gap-x-6 sm:px-4 lg:hidden dark:border-gray-800 dark:bg-gray-950">
        <WorkspacesDropdownMobile />
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="relative ml-auto flex-1 md:grow-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="search"
              className="flex h-9 border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
              placeholder="Search..."
              jf-ext-cache-id="0"
            />
          </div>
          <UserProfileMobile />
          <MobileSidebar />
        </div>
      </div>
    </>
  );
};
