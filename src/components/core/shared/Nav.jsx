'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useAuth } from "@/hooks/use-auth";
import { TbChevronDown, TbLogout, TbUsers } from "react-icons/tb";
import SimpleDropdown from "@/app/(threads)/components/shared/SimpleDropdown";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Nav() {
  const { user,logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
      // {
      //   name:"Send Money",
      //   href:"/home/transfer"
      // },
      // {
      //   name:"Payment Hub(USD)",
      //   href:"/home/hub"
      // },
      {
        name:"Invest",
        href:"/home/invest"
      },
      {
        name:"Property",
        href:"/home/buy-property"
      },
  ];

  return (
    <Navbar isBordered className="h-[60px] bg-white" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

      <NavbarContent className="pr-3" justify="start">
      <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">EQUITY BLOOM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="flex gap-10">
          {
            menuItems.map((item, index) => (
              <NavbarItem key={`${item.name}-${index}`} className="hidden lg:block">
                <Link className="text-blue-700" href={item.href}>
                  {item.name}
                </Link>
              </NavbarItem>
            ))
          }
        <NavbarItem>
         <SimpleDropdown
          trigger={
            <div className="flex items-center">
             <b>Hi {user?.firstName} {user?.lastName}</b>
              <TbChevronDown size="18" className="ml-3"/>
            </div>
          }
          items={[
            {text: 'Profile', icon: <TbUsers size="18"/>},
            {text: 'Logout', icon: <TbLogout size="18"/>, onClick: logOut},
          ]}
        />
        </NavbarItem>
        </div>      
      </NavbarContent>

      <NavbarMenu className="mt-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-blue-700 hover:text-blue-800 font-bold"
              color={ "foreground"  }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

