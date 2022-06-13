import s from "./Footer.module.scss";
import NewsletterInput from "./NewsletterInput";
import Container from "@components/ui/Container";
import Logo from "@components/ui/Logo";
import CookieButton from "@components/ui/CookieButton";

function Footer() {
  return (
    <footer className={s.root}>
      <Container>
        <div className={s.content}>
          <div className={s.logo}>
            <Logo />
            <h2>The New Creative Galactic Economy.</h2>
          </div>
          <div className={s.listLinks}>
            <h3>Stacks</h3>
            <div>Discover</div>
            <div>Connect wallet</div>
            <div>Resources</div>
          </div>
          <div className={s.listLinks}>
            <h3>Info</h3>
            <div>VIP</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
          <div className={s.newsletter}>
            <h3>Join Newsletter</h3>
            <p>
              Subscribe to our newsletter and be the first to know about
              exclusive NFT drops and collabs.
            </p>
            <NewsletterInput />
          </div>
        </div>
        <div className={s.copyright}>
          <span>Copyright © 2021 StarLedger LLC. All rights reserved</span>
          <div className={s.cookies}>
            <span style={{ marginRight: ".5rem" }}>
              We use cookies for better service.
            </span>
            <CookieButton />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
