"use client";

import React, { useState } from "react";
import {
  Box,
  Text,
  Title,
  Group,
  Stack,
  TextInput,
  ActionIcon,
  Anchor,
  Container,
  SimpleGrid,
} from "@mantine/core";
import {
  IconSend,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandTwitter,
} from "@tabler/icons-react";
import styles from "@/styles/Footer.module.css";
import FullLogo from "../general/FullLogo";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  companyName?: string;
  logo?: React.ReactNode;
  address?: {
    street: string;
    city: string;
    phone: string;
    email: string;
  };
  sections?: FooterSection[];
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  copyrightText?: string;
  onNewsletterSubmit?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "Glass House Waters",
  logo,
  address = {
    street: "14, Olusanjo Avenue Fajol Obantoko",
    city: "Abeokuta, Ogun State.",
    phone: "+234 704 024 6760",
    email: "info@glasshousewaters.com",
  },
  sections = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Our Services", href: "/services" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Support", href: "/support" },
      ],
    },
  ],
  socialLinks = {
    linkedin: "#",
    facebook: "#",
    twitter: "#",
  },
  newsletterTitle = "Newsletter",
  newsletterPlaceholder = "Email address",
  copyrightText = "© Glass House Waters. All Rights Reserved.",
  onNewsletterSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      if (onNewsletterSubmit) {
        await onNewsletterSubmit(email);
      }
      setEmail("");
    } catch (error) {
      console.error("Newsletter submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  //   const defaultLogo = <FullLogo />;

  return (
    <Box className={styles.footerContainer} px={20}>
      <Container size="xl" className={styles.footerContent}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          {/* Company Info & Address */}
          <Stack gap="md" className={styles.footerSection}>
            {/* {FullLogo(28, 28)} */}
            <Stack gap="xs" className={styles.addressSection}>
              <Text
                fw={600}
                c="white"
                size="sm"
                className={styles.sectionTitle}
              >
                Address
              </Text>
              <Text
                c="rgba(255, 255, 255, 0.8)"
                size="sm"
                className={styles.addressText}
              >
                {address.street}
              </Text>
              <Text
                c="rgba(255, 255, 255, 0.8)"
                size="sm"
                className={styles.addressText}
              >
                {address.city}
              </Text>
              <Text
                c="rgba(255, 255, 255, 0.8)"
                size="sm"
                className={styles.addressText}
              >
                {address.phone}
              </Text>
              <Text
                c="rgba(255, 255, 255, 0.8)"
                size="sm"
                className={styles.addressText}
              >
                {address.email}
              </Text>
            </Stack>
          </Stack>

          {/* Quick Links */}
          {sections.map((section, index) => (
            <Stack key={index} gap="md" className={styles.footerSection}>
              <Text
                fw={600}
                c="white"
                size="sm"
                className={styles.sectionTitle}
              >
                {section.title}
              </Text>
              <Stack gap="xs">
                {section.links.map((link, linkIndex) => (
                  <Anchor
                    key={linkIndex}
                    href={link.href}
                    c="rgba(255, 255, 255, 0.8)"
                    size="sm"
                    className={styles.footerLink}
                    underline="never"
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </Stack>
          ))}

          {/* Newsletter */}
          <Stack gap="md" className={styles.footerSection}>
            <Text fw={600} c="white" size="sm" className={styles.sectionTitle}>
              {newsletterTitle}
            </Text>

            <Box
              component="form"
              onSubmit={handleNewsletterSubmit}
              className={styles.newsletterForm}
            >
              <Group gap="xs" className={styles.newsletterGroup}>
                <TextInput
                  placeholder={newsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsletterInput}
                  styles={{
                    input: {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "white",
                      "&::placeholder": {
                        color: "rgba(255, 255, 255, 0.6)",
                      },
                      "&:focus": {
                        borderColor: "var(--mantine-color-myColor-4)",
                      },
                    },
                  }}
                />
                <ActionIcon
                  type="submit"
                  variant="filled"
                  size="lg"
                  className={styles.newsletterButton}
                  loading={isSubmitting}
                >
                  <IconSend size={16} />
                </ActionIcon>
              </Group>
            </Box>

            {/* Social Media Icons */}
            <Group gap="sm" className={styles.socialGroup}>
              {socialLinks.linkedin && (
                <ActionIcon
                  component="a"
                  href={socialLinks.linkedin}
                  variant="subtle"
                  size="lg"
                  className={styles.socialIcon}
                >
                  <IconBrandLinkedin size={20} />
                </ActionIcon>
              )}
              {socialLinks.facebook && (
                <ActionIcon
                  component="a"
                  href={socialLinks.facebook}
                  variant="subtle"
                  size="lg"
                  className={styles.socialIcon}
                >
                  <IconBrandFacebook size={20} />
                </ActionIcon>
              )}
              {socialLinks.twitter && (
                <ActionIcon
                  component="a"
                  href={socialLinks.twitter}
                  variant="subtle"
                  size="lg"
                  className={styles.socialIcon}
                >
                  <IconBrandTwitter size={20} />
                </ActionIcon>
              )}
            </Group>
          </Stack>
        </SimpleGrid>

        {/* Bottom Section */}
        <Box className={styles.footerBottom}>
          <Group
            justify="space-between"
            align="center"
            className={styles.bottomContent}
          >
            <Box className={styles.bottomLogo}>{FullLogo(28, 28)}</Box>

            <Text
              c="rgba(255, 255, 255, 0.7)"
              size="sm"
              className={styles.copyrightText}
            >
              {copyrightText}
            </Text>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
