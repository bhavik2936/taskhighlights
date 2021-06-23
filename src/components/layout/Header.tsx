import { users } from "@prisma/client";
import { useContext } from "react";
import FireUserContext from "./../../contexts/FireUserContext";
import Image from "next/image";
import { fireAuth } from "../../libs/Firebase";
import { LogoutIcon, HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const Header = ({ user }: { user: users | null }) => {
	return (
		<div className="flex flex-row p-4 items-center px-4 space-x-14 sm:space-x-40 md:space-x-60">
			<div>
				<Link href="/">
					<a title="Home" aria-label="Home">
						<HomeIcon className="w-8 h-8" />
					</a>
				</Link>
			</div>

			<div className="bg-gradient-to-tr from-theme-primary-500 to-theme-fuchsia-600 p-1 rounded-full">
				<div className="relative rounded-full w-20 h-20 transform transition hover:-rotate-360 bg-white cursor-pointer">
					{user?.avatar && (
						<Image
							alt="user-avatar"
							src={user.avatar}
							layout="fill"
						/>
					)}
				</div>
			</div>

			<div>
				<button
					aria-label="Sign out"
					title="Sign out"
					onClick={() => fireAuth.signOut()}
				>
					<LogoutIcon className="w-8 h-8" />
				</button>
			</div>
		</div>
	);
};
