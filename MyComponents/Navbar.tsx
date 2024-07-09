"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function App() {
  return (
    <Navbar className="flex flex-wrap p-4 bg-gray-200 ">
      <NavbarBrand className="flex items-center">
        <AcmeLogo />
        <p className="font-bold text-inherit ml-2 text-2xl">Logo</p>
      </NavbarBrand>
      <NavbarContent className=" hidden sm:flex gap-4 text-black" justify="center">
        <NavbarItem  >
          <Link color="foreground" href="#">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end" className="flex items-center">
        <NavbarItem className="mr-4">
          <Link color="foreground" href="#">
            bellicon
          </Link>
        </NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="User"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">user@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>


    </Navbar>
  );
}
