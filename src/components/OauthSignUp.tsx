import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import remboLogo from "../assets/irembo-removebg-preview.png";

interface OauthSignUpProps {
  loading: boolean;
  onClick: (provider: string) => void;
  disabled: boolean; // Add disabled prop
}

const OauthSignUp = ({ loading, onClick, disabled }: OauthSignUpProps) => {
  return (
    <div className="mt-2 grid gap-2">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 items-center">
          <div className="w-full border-t "></div>
        </div>

        <div className="relative -top-2 text-xs font-medium text-gray9">
          <div className="rounded-full bg-gray1 px-4 uppercase dark:bg-dark-blue1">
            Or Continue With
          </div>
        </div>
      </div>
      <div className="grid gap-2 transition-all md:grid-cols-2">
        <Button
          as={motion.button}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          variant={"outline"}
          rounded={"full"}
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9c0 .66.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49Z"
              />
            </svg>
          }
          px={"12"}
          isLoading={loading}
          loadingText={"Verifying"}
          onClick={() => onClick("google")}
          isDisabled={disabled} // Disable button when form is submitting
        >
          Google
        </Button>

        <Button
          as={motion.button}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          rounded={"full"}
          variant={"outline"}
          leftIcon={
            <img src={remboLogo} alt="Rembo Logo" className="w-9 h-9 mr-1" />
          }
          px={"12"}
          isLoading={loading}
          loadingText={"Verifying"}
          onClick={() => onClick("rembo")}
          isDisabled={disabled} // Disable button when form is submitting
        >
          Login with Irembo
        </Button>
      </div>
    </div>
  );
};

export default OauthSignUp;
