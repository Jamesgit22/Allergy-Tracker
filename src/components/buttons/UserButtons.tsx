import { signIn, signOut, useSession } from "next-auth/react";
import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";

type UserButtons = {
  isGreen: boolean;
  isBlue: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function UserButtons({ isGreen, isBlue }: UserButtons) {
  const session = useSession();
  const user = session.data?.user;

  return (
    <>
      {user == null ? (
        <button
          onClick={() => void signIn()}
          className={`rounded-full white-txt w-20 h-10 px-3 ${isGreen ? "mint-bg" : ""} ${
            isBlue ? "blue-btn" : ""
          }`}
        >
          login
        </button>
      ) : (
        <button
          onClick={() => void signOut()}
          className={`rounded-full white-text px-3 ${isGreen ? "green-btn" : ""} ${
            isBlue ? "blue-btn" : ""
          }`}
        >
          Logout
        </button>
      )}
    </>
  );
}
