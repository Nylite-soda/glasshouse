import React from "react";
import { Group, Title, Text, Button } from "@mantine/core";
// import { ChevronRight, Sparkles } from 'lucide-react';
import styles from "@/styles/SectionHeader.module.css";
import { IconChevronRight, IconSparkles } from "@tabler/icons-react";

export interface SectionHeaderProps {
  tag?: string;
  title?: string;
  color?: string;
  coloredTitle?: string;
  subtitle?: string;
  pre?: boolean;
  showViewAll?: boolean;
  onViewAllClick?: () => void;
  variant?: "default" | "accent" | "minimal";
  animated?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag = "BLOGS",
  title,
  color,
  coloredTitle,
  subtitle,
  pre = true,
  showViewAll = true,
  onViewAllClick,
  variant = "default",
  animated = true,
}) => {
  // console.log(coloredTitle);
  return (
    <div
      className={`${styles.sectionHeader} ${styles[variant]} ${
        animated ? styles.animated : ""
      }`}
    >
      <Group
        justify="space-between"
        align="flex-start"
        className={styles.headerGroup}
      >
        <div className={styles.titleSection}>
          <div className={styles.tagContainer}>
            <div className={styles.tagLine} />
            <Text
              size="lg"
              fw={600}
              tt="uppercase"
              //   ls={1}
              className={styles.tag}
            >
              {tag}
            </Text>
            {variant === "accent" && (
              <IconSparkles size={14} className={styles.sparkleIcon} />
            )}
          </div>

          <Title
            order={2}
            className={styles.mainTitle}
            mb={subtitle ? "xs" : 0}
          >
            <span className={`!text-[${color}]`}>
              {pre ? coloredTitle : ""}{" "}
            </span>
            {title}
            <span className={`text-[${color}]`}>
              {!pre ? coloredTitle : ""}{" "}
            </span>
          </Title>

          {subtitle && (
            <Text size="md" c="dimmed" className={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </div>

        {showViewAll && (
          <Button
            variant="subtle"
            rightSection={<IconChevronRight size={16} />}
            className={styles.viewAllButton}
            onClick={onViewAllClick}
            size="lg"
          >
            View All
          </Button>
        )}
      </Group>

      <div className={styles.decorativeElement} />
    </div>
  );
};

export default SectionHeader;
