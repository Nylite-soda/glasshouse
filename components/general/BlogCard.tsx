import React from "react";
import { Card, Text, Badge, Group, Stack } from "@mantine/core";
import styles from "@/styles/BlogCard.module.css";
import { IconClock, IconMapPin, IconTrendingUp } from "@tabler/icons-react";

export interface BlogCardProps {
  title: string;
  category: "Trending News" | "Local News";
  readTime: string;
  publishedTime: string;
  image?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  category,
  readTime,
  publishedTime,
  image,
  size = "medium",
  onClick,
}) => {
  const getCategoryIcon = () => {
    switch (category) {
      case "Trending News":
        return <IconTrendingUp size={14} />;
      case "Local News":
        return <IconMapPin size={14} />;
      default:
        return null;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Trending News":
        return "blue";
      case "Local News":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Card
      className={`${styles.blogCard} ${styles[size]}`}
      onClick={onClick}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.cardImage} />
          <div className={styles.imageOverlay} />
        </div>
      )}

      <Stack gap="sm" className={styles.cardContent}>
        <Group justify="space-between" align="flex-start">
          <Badge
            variant="light"
            color={getCategoryColor()}
            size="sm"
            leftSection={getCategoryIcon()}
            className={styles.categoryBadge}
          >
            {category}
          </Badge>

          <Group gap="xs" className={styles.metaInfo}>
            <IconClock size={12} />
            <Text size="xs" c="dimmed">
              {readTime}
            </Text>
          </Group>
        </Group>

        <Text
          className={styles.cardTitle}
          fw={600}
          lineClamp={size === "small" ? 2 : 3}
        >
          {title}
        </Text>

        <Text size="xs" c="dimmed" className={styles.publishTime}>
          {publishedTime}
        </Text>
      </Stack>

      <div className={styles.hoverEffect} />
    </Card>
  );
};

export default BlogCard;
