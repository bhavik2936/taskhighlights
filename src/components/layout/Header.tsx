import { HomeIcon, LogoutIcon } from "@heroicons/react/outline";

import Image from "next/image";
import Link from "next/link";
import { User } from "@prisma/client";
import UserContext from "../../contexts/UserContext";
import { fireAuth } from "../../libs/Firebase";
import { useContext } from "react";

// !Stories Limit 5 including own

export const Header = () => {
	const currentUser: User = useContext(UserContext);

	return (
		<div className="flex flex-1 flex-row py-3 items-center justify-evenly px-4 sm:space-x-40 md:space-x-60">
			<div>
				<Link href="/">
					<a
						title="Home"
						aria-label="Home"
						className="flex items-center"
					>
						<HomeIcon className="w-7 h-7" />
					</a>
				</Link>
			</div>

			{currentUser?.user_avatar && (
				<div className="flex -space-x-1 overflow-hidden">
					<div className="relative inline-block h-12 w-12 rounded-full ring-2 ring-theme-blueGray-900">
						<Image
							alt="user-avatar"
							src={currentUser.user_avatar}
							layout="fill"
						/>
					</div>
				</div>
			)}

			<div>
				<button
					aria-label="Sign out"
					className="flex items-center"
					title="Sign out"
					onClick={() => fireAuth.signOut()}
				>
					<LogoutIcon className="w-7 h-7" />
				</button>
			</div>
		</div>
	);
};
