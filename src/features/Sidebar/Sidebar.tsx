import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useColorMode,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Badge,
} from "@chakra-ui/react";

import MobileNav from "@/components/Navbar/MobileNav";
import { ViewfinderCircleIcon } from "@heroicons/react/24/outline";
import { indigo, indigoDark } from "@radix-ui/colors";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import NewGroupForm from "../Groups/NewGroup/NewGroupForm";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { currentUserDetails } = useAuth();
  if (!currentUserDetails) return;

  return (
    <aside className="relative max-h-full shrink grow basis-[30rem] overflow-auto border-r bg-gray2 px-2 dark:border-dark-slate3 dark:bg-dark-blue1 dark:text-gray2 md:max-w-[32rem]">
      {children}
    </aside>
  );
};

export default Sidebar;

interface SideBarHeaderProps {
  title: string;
  className: string;
}

export function SideBarHeader({ title, className }: SideBarHeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={
        "sticky left-0 right-0 top-0 z-10 flex h-16 items-center bg-gray2 px-4 font-semibold tracking-widest dark:bg-dark-blue1" +
        className
      }
    >
      <span className="relative flex h-full w-full items-center justify-between">
        <div className="visible mt-2 md:invisible">
          <MobileNav />
        </div>

        <span>{title}</span>
        <div className="flex items-center gap-3">
          <Menu isOpen={isDropdownOpen} onClose={() => setIsDropdownOpen(false)}>
            <Tooltip
              label={"Options"}
              hasArrow
              placement="bottom"
              py={2}
              rounded={"md"}
              fontSize={"sm"}
              fontWeight={"normal"}
              bg={colorMode === "light" ? indigoDark.indigo1 : indigo.indigo8}
              textColor={colorMode === "light" ? indigo.indigo3 : "black"}
            >
              <MenuButton
                as={IconButton}
                icon={<ViewfinderCircleIcon className="h-5 w-5" />}
                variant="ghost"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </Tooltip>
            <MenuList>
              <MenuItem onClick={onOpen}>New Group</MenuItem>
              <MenuItem onClick={() => {/* Mark all as read logic */}}>Mark all as read</MenuItem>
              <MenuItem onClick={() => {/* Filter by category logic */}}>Filter by category</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </span>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="outside"
        size={["xs", "sm"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="flex w-full flex-col gap-1 text-xl font-bold text-dark-gray3 dark:text-white justify-center items-center">
            New Group
            <div className="font-md text-[14px] tracking-wide text-dark-gray6 dark:text-gray6">
              Create a new group chat.
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewGroupForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}