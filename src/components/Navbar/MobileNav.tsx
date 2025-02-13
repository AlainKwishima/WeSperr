import { useAuth } from "@/context/AuthContext";
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  Bars4Icon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { blueDark, gray } from "@radix-ui/colors";
import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./links";

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { colorMode } = useColorMode();
  const { pathname } = useLocation();
  const { currentUserDetails, logOut } = useAuth();
  if (!currentUserDetails) return null;

  return (
    <>
      <IconButton
        aria-label="open menu"
        ref={btnRef}
        variant={"ghost"}
        icon={<Bars4Icon className="size-5" />}
        onClick={onOpen}
      >
        Open
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent
          width="50%"
          maxWidth="50%"
          borderRadius="0 25px 25px 0" // Curved borders on the left side
          boxShadow="2xl" // Lifted appearance
          bg={colorMode === "dark" ? blueDark.blue2 : gray.gray2} // Solid background
          marginLeft="auto" // Ensure it aligns to the right
          marginTop="7px" // Add some margin at the top
          marginBottom="7px" // Add some margin at the bottom
          overflow="hidden" // Ensure the border radius is applied correctly
        >
          <DrawerCloseButton />
          <DrawerHeader
            bg={colorMode === "dark" ? blueDark.blue2 : gray.gray2}
          ></DrawerHeader>
          <DrawerBody
            bg={colorMode === "dark" ? blueDark.blue2 : gray.gray2}
            className="flex flex-col items-center text-center"
            paddingTop="0" // Remove extra padding at the top
          >
            <div className="space-y-2">
              <Link to={"/profile"} className="select-none">
                <Avatar
                  size={"xl"}
                  src={currentUserDetails.avatarURL}
                  name={currentUserDetails.name}
                />
              </Link>
              <div className="relative flex flex-col items-center">
                <div className="text-lg font-semibold">
                  {currentUserDetails.name}
                </div>
                <div className="text-sm italic text-dark-gray5 dark:text-gray6">
                  {currentUserDetails.about}
                </div>
              </div>
            </div>

            <nav className="mt-4 flex flex-col items-center gap-2 w-full">
              {navLinks.map((link) => (
                <div
                  key={link.value}
                  className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/10 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link
                    to={link.value}
                    className={`
                    flex items-center gap-3 rounded-lg transition-colors hover:text-indigo-600 dark:hover:text-indigo-500 
                    ${
                      pathname.split("/").includes(link.value.substring(1))
                        ? "text-indigo-500"
                        : ""
                    }`}
                  >
                    {link.icon}
                    <span className="text-lg font-semibold">{link.title}</span>
                  </Link>
                </div>
              ))}
            </nav>

            <Link
              to={"/login"}
              onClick={() => {
                logOut();
              }}
              className="mt-auto flex transition-all"
            >
              <Button
                variant={"ghost"}
                aria-label="log out"
                size={"lg"}
                leftIcon={<ArrowLeftStartOnRectangleIcon className="size-6 " />}
                className=""
              >
                Log out
              </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter
            bg={colorMode === "dark" ? blueDark.blue2 : gray.gray2}
            className="items-center justify-center"
          >
            <span className="text-xs text-gray-600 dark:text-gray-400">
              WeSperr © {new Date().getFullYear()}
            </span>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default memo(MobileNav);