import {
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  UsersIcon,
  UserGroupIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "../Icons"; // Add this import

export const navLinks = [
  {
    value: "/chats",
    icon: <ChatBubbleBottomCenterTextIcon className="size-6 md:size-5" />,
    title: "Chats",
  },
  {
    value: "/users",
    icon: <UsersIcon className="size-6 md:size-5" />,
    title: "Users",
  },
  {
    value: "/settings",
    icon: <Cog6ToothIcon className="size-6 md:size-5" />,
    title: "Settings",
  },
  {
    value: "/groups",
    icon: <UserGroupIcon className="size-6 md:size-5" />,
    title: "Groups",
  },
  {
    value: "/wallet",
    icon: <WalletIcon className="size-6 md:size-5" />,
    title: "Wallet",
  },
];
