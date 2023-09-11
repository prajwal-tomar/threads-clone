import { OrganizationSwitcher, SignOutButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs/app-beta";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";

function Topbar() {
  return (
    <>
      <nav className="topbar">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/assets/logo.png" alt="logo" width={28} height={28} />
          <p className="text-heading3-bold text-light-1 max-xs:hidden">
            Threads
          </p>
        </Link>

        <div className="flex items-center gap-1">
          {/* the below class is used to display only on mobile phones and not on md+ devices like laptops or computers */}
          <div className="block md:hidden">
            <SignedIn>
              {/* The code below will show only if the user is signed in */}
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image
                    src="/assets/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
          {/* the below is used to take care of Organizations */}
          <OrganizationSwitcher
            appearance={{
              // gotta install this package from clerk to make our code compatible for dark modes
              baseTheme: dark,
              elements: {
                organizationSwitcherTrigger: "py-2 px-4",
              },
            }}
          />
        </div>
      </nav>
      ;
    </>
  );
}

export default Topbar;
