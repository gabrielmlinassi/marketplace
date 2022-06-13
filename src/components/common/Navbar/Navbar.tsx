import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

import s from "./Navbar.module.scss";
import Button from "@components/ui/Button";
import { WalletIcon } from "@components/icons";
import Menu from "@components/ui/Menu";
import Logo from "@components/ui/Logo";
import MobileMenu from "@components/common/MobileMenu";
import IconButton from "@components/ui/IconButton";

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      setActive(path);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <div className={s.root}>
      <div className={s.nav}>
        <div className={s.logoWrap}>
          <MobileMenu />
          <Logo />
          <div className="desktop-only" style={{ marginLeft: "1rem" }}>
            <Menu>
              <Menu.Trigger>Marketplace</Menu.Trigger>
              <Menu.Items>
                <Menu.Item>Map</Menu.Item>
                <Menu.Item>Mint</Menu.Item>
                <Menu.Item>Member</Menu.Item>
                <Menu.Item>Website</Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <nav className={s.navMenu}>
          <NavLink active={active === "/collection"} href="/collection">
            Collection
          </NavLink>
          <NavLink active={active === "/features"} href="/features">
            Features
          </NavLink>
          <NavLink active={active === "/community"} href="/community">
            Community
          </NavLink>
        </nav>
        <IconButton className="mobile-only" size="xs" icon={<WalletIcon />} />
        <Button className="desktop-only" startIcon={<WalletIcon />}>
          Connect wallet
        </Button>
      </div>
    </div>
  );
};

const NavLink = ({
  active,
  children,
  href,
}: {
  active?: boolean;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <a data-text={children} className={cn(s.link, { [s.active]: active })}>
        {children}
      </a>
    </Link>
  );
};

export default Navbar;
