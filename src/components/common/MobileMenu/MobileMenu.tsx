import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import * as Dialog from "@radix-ui/react-dialog";

import s from "./MobileMenu.module.scss";
import Logo from "@components/ui/Logo";
import {
  ChatIcon,
  CrossIcon,
  FlashIcon,
  HomeIcon,
  MenuIcon,
} from "@components/icons";
import IconButton from "@components/ui/IconButton";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const router = useRouter();

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    const handleRouteChange = (path: string) => setActive(path);

    router.events.on("routeChangeComplete", closeMenu);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <Dialog.Trigger
        asChild
        className="mobile-only"
        style={{ marginRight: "1rem", marginLeft: "10px" }}
      >
        <IconButton variant="subtle" size="xs" icon={<MenuIcon />} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className={s.root}>
          <div className={s.logo}>
            <Logo width={250} style={{ marginLeft: "12px" }} />
            <Dialog.Close asChild>
              <IconButton variant="subtle" icon={<CrossIcon />} />
            </Dialog.Close>
          </div>
          <div className={s.links}>
            <NextLink href="/">
              <a className={cn(s.link, active === "/" && s.active)}>
                <HomeIcon /> <span>Home</span>
              </a>
            </NextLink>
            <NextLink href="/collection">
              <a className={cn(s.link, active === "/collection" && s.active)}>
                <FlashIcon /> <span>Collection</span>
              </a>
            </NextLink>
            <NextLink href="/community">
              <a className={cn(s.link, active === "/community" && s.active)}>
                <ChatIcon /> <span>Community</span>
              </a>
            </NextLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenu;
