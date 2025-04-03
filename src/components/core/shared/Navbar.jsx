"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { languages } from "@/lib/languages";
import { cn } from "@/lib/utils";
import countries from "@/lib/countries";
import Link from 'next/link'
import CountryFlag from "@/components/ui/CountryFlag";
import { useShallow } from "zustand/react/shallow";
import useTransaction from "@/store/Global";

export default function App() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      height="90px"
      isBlurred={false}
      classNames={{
        item: "data-[active=true]:!text-primary-700 ",
        base: "fixed top-0 left-0 transition-all duration-300 shadow-sm border-b border-default-200 dark:border-default-100 z-[11] ",
        wrapper: "px-4",
      }}
    >
      <NavbarContent className="sm:hidden" justify="">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden " justify="">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl">Citties</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex !m-0 " justify="">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl mr-4">Citties</p>
        </NavbarBrand>
        <NavbarItem>
          <SelectCountries indacator="from" />
        </NavbarItem>
        <NavbarItem>
          <p>TO:</p>
        </NavbarItem>
        <NavbarItem isActive>
          <SelectCountries indacator="to" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex " justify="">
        <NavbarItem>
          <Languages />
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="" color="foreground">
            Rates & fees
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Providers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Helps
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="" className=" ">
        <NavbarItem className="hidden lg:flex px-3 py-2 rounded-md border-2 border-[#2c5e9b]">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/register"
            variant="flat"
            className="rounded-md text-white px-5 py-5 bg-primary-600 hover:bg-primary-500"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

const Languages = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="text-lg !bg-inherit  ">
          English
          <IoMdArrowDropdown size="16" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color={"primary"}
        className="gap-5 overflow-y-scroll max-h-[500px] custom-scrollbar"
        variant={"shadow"}
      >
        {languages.map((lang, index) => (
          <DropdownItem key={index}>{lang}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
const countriesData =countries;
const SelectCountries = ({ indacator }) => {
  const [to, from, updateData] = useTransaction(
    useShallow((state) => [state.data.to, state.data.from, state.updateData])
  );
  const data = indacator === "from" ? from : to;

  return (
    <Popover placement="bottom-start" showArrow={true}>
      <PopoverTrigger>
        <Button className="bg-inherit bordered">
          <CountryFlag
            rounded
            code={countriesData[data]?.code}
            className=" rounded-md w-10 h-7"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
        <div className="px-4 py-2 w-[700px] grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 overflow-y-scroll max-h-[500px] custom-scrollbar">
          {countriesData.map((country, index) =>
            index === (indacator === "from" ? to : from) ? null : (
              <Button
                key={index}
                onClick={() => updateData({ [indacator]: index })}
                className={cn(
                  "flex flex-col h-11 gap-1 items-stretch rounded-md hover:bg-primary-500 hover:text-white",
                  { "border-2 border-primary-500": data === index }
                )}
              >
                <div className="flex flex-row gap-2 items-center">
                  <CountryFlag
                    rounded
                    code={country.code}
                    className="h-7 w-7"
                  />
                  <p className="text-sm font-medium">{country.name}</p>
                </div>
              </Button>
            )
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
