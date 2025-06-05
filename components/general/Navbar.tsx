"use client";

import { useState, useEffect } from "react";
import { Burger, Button, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "@/styles/HeaderSimple.module.css";
import FullLogo from "./FullLogo";
import { useRouter } from "next/navigation";

export const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About Us" },
  { link: "/services", label: "Our Services" },
  { link: "/features", label: "Features" },
  { link: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = (link: string) => {
    setActive(link);
    close(); // Close mobile menu when link is clicked
    router.push(link);
  };

  const items = links.map((link, index) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        handleLinkClick(link.link);
      }}
      style={
        mounted
          ? {
              animationDelay: `${index * 0.1}s`,
            }
          : {}
      }
    >
      <span className={classes.linkText}>{link.label}</span>
      <div className={classes.linkUnderline}></div>
    </a>
  ));

  return (
    <>
      <header
        className={`${classes.header} text-white ${
          scrolled ? classes.scrolled : ""
        }`}
      >
        <Container size="lg" className={classes.inner}>
          <div className={classes.logo} onClick={() => handleLinkClick("/")}>
            {FullLogo(28, 28)}
          </div>

          <Group gap={8} visibleFrom="md" className={classes.navigation}>
            {items}
          </Group>

          <Group visibleFrom="md" className={classes.actions}>
            <Button
              variant="default"
              // gradient={{
              //   from: "var(--mantine-color-myColor-1)",
              //   to: "var(--mantine-color-myColor-2)",
              // }}
              // className={classes.ctaButton}
              size="sm"
            >
              Get Started
            </Button>
          </Group>

          <Burger
            color="var(--mantine-color-myColor-0)"
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            size="sm"
            className={classes.burger}
          />
        </Container>

        {/* Mobile Menu Overlay */}
        <div
          className={`${classes.mobileOverlay} ${
            opened ? classes.mobileOverlayOpen : ""
          }`}
        >
          <div className={classes.mobileMenu}>
            <nav className={classes.mobileNavigation}>{items}</nav>
            <div className={classes.mobileActions}>
              <Button
                variant="gradient"
                gradient={{
                  from: "var(--mantine-color-myColor-1)",
                  to: "var(--mantine-color-myColor-2)",
                }}
                className={classes.mobileCta}
                fullWidth
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop for mobile menu */}
      {opened && <div className={classes.backdrop} onClick={close} />}
    </>
  );
}
