"use client";

import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Image,
  Text,
  Badge,
  Group,
  Stack,
  Box,
} from "@mantine/core";
import styles from "./BlogSection.module.css";
import { BlogCardProps } from "@/components/general/BlogCard";
import SectionHeader from "@/components/general/SectionHeaderComponent";

export interface BlogSectionProps {
  title?: string;
  color?: string;
  coloredTitle?: string;
  subtitle?: string;
  pre?: boolean;
  tag?: string;
  blogs?: BlogCardProps[];
  layout?: "masonry" | "grid" | "featured";
  showViewAll?: boolean;
  onViewAllClick?: () => void;
  onBlogClick?: (blog: BlogCardProps, index: number) => void;
  containerSize?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const BlogCard: React.FC<{
  blog: BlogCardProps;
  index: number;
  size?: "small" | "medium" | "large";
  onBlogClick?: (blog: BlogCardProps, index: number) => void;
}> = ({ blog, index, size = "medium", onBlogClick }) => {
  const handleClick = () => {
    if (onBlogClick) {
      onBlogClick(blog, index);
    }
  };

  // For small cards in featured layout, use horizontal layout
  if (size === "small") {
    return (
      <Card
        shadow="sm"
        padding="md"
        radius="md"
        withBorder={false}
        className={`${styles.blogCard} ${styles[size]}`}
        onClick={handleClick}
      >
        <Group gap="md" wrap="nowrap" className="h-full">
          <Stack gap="xs" className={styles.horizontalContent}>
            <Group justify="flex-start" gap="md" mb="xs">
              <Badge
                variant="light"
                color={
                  blog.category === "Trending News" ? "myColor.8" : "myColor.6"
                }
                size="xs"
                className={styles.categoryBadge}
              >
                {blog.category}
              </Badge>
              <div className="w-3 h-3 bg-[var(--mantine-color-gray-3)] rounded-full"></div>
              <Text size="xs" c="dimmed" className={styles.metaInfo}>
                {blog.readTime}
              </Text>
            </Group>

            <Text fw={600} size="sm" lineClamp={2} className={styles.cardTitle}>
              {blog.title}
            </Text>

            <Text size="xs" c="dimmed" className={styles.metaInfo}>
              {blog.publishedTime}
            </Text>
          </Stack>

          <Box className="flex items-center justify-center px-4">
            <Image
              src={blog.image}
              alt={blog.title}
              // width={120}
              // height={90}
              className={styles.cardImage + " !w-[200px] aspect-square"}
              radius="md"
            />
          </Box>
        </Group>
      </Card>
    );
  }

  // For large and medium cards, use vertical layout
  return (
    <Card
      shadow="sm"
      padding="0"
      radius="md"
      withBorder={false}
      className={`${styles.blogCard} ${styles[size]}` + " !max-h-[630px]"}
      onClick={handleClick}
    >
      <Card.Section className={styles.imageContainer}>
        <Image
          src={blog.image}
          alt={blog.title}
          height={size === "large" ? 320 : 200}
          className={styles.cardImage}
        />
        <div className={styles.imageOverlay} />
        <div className={styles.hoverEffect} />
      </Card.Section>

      <Box className={styles.cardContent}>
        <Group justify="space-between" mb="xs">
          <Badge
            variant="light"
            color={
              blog.category === "Trending News" ? "myColor.8" : "myColor.6"
            }
            size="sm"
            className={styles.categoryBadge}
          >
            {blog.category}
          </Badge>
          <Text size="xs" c="dimmed" className={styles.metaInfo}>
            {blog.readTime}
          </Text>
        </Group>

        <Text
          fw={600}
          size={size === "large" ? "xl" : "md"}
          lineClamp={size === "large" ? 3 : 2}
          className={styles.cardTitle}
        >
          {blog.title}
        </Text>

        <Text size="xs" c="dimmed" className={styles.publishTime}>
          {blog.publishedTime}
        </Text>
      </Box>
    </Card>
  );
};

const FeaturedBlogGrid: React.FC<{
  blogs: BlogCardProps[];
  onBlogClick?: (blog: BlogCardProps, index: number) => void;
}> = ({ blogs, onBlogClick }) => {
  if (!blogs || blogs.length === 0) return null;

  const [mainBlog, ...sideBogs] = blogs;

  return (
    <Grid gutter="xl" className={styles.featuredLayout}>
      {/* Main featured card - left side */}
      <Grid.Col span={{ base: 12, md: 4.7 }}>
        <BlogCard
          blog={mainBlog}
          index={0}
          size="large"
          onBlogClick={onBlogClick}
        />
      </Grid.Col>

      {/* Side cards - right side */}
      <Grid.Col span={{ base: 12, md: 7.3 }}>
        <Stack gap="md" className={styles.sideCards}>
          {sideBogs.slice(0, 3).map((blog, index) => (
            <BlogCard
              key={index}
              blog={blog}
              index={index + 1}
              size="small"
              onBlogClick={onBlogClick}
            />
          ))}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

const RegularBlogGrid: React.FC<{
  blogs: BlogCardProps[];
  layout: "grid" | "masonry";
  onBlogClick?: (blog: BlogCardProps, index: number) => void;
}> = ({ blogs, layout, onBlogClick }) => {
  if (layout === "masonry") {
    return (
      <div className={styles.masonryGrid}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.masonryItem}>
            <BlogCard
              blog={blog}
              index={index}
              size="medium"
              onBlogClick={onBlogClick}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Grid gutter="lg" className={styles.blogGrid}>
      {blogs.map((blog, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
          <BlogCard
            blog={blog}
            index={index}
            size="medium"
            onBlogClick={onBlogClick}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

const BlogSection: React.FC<BlogSectionProps> = ({
  title = "Developments and Trends",
  color = "var(--mantine-color-myColor-9)",
  coloredTitle = "Latest",
  subtitle,
  pre = true,
  tag = "BLOGS",
  blogs = sampleBlogs,
  layout = "featured",
  showViewAll = true,
  onViewAllClick,
  onBlogClick,
  containerSize = "xl",
  className,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Early return if no blogs are provided
  if (!blogs || blogs.length === 0) {
    return (
      <section className={`${styles.blogSection} ${className || ""}`}>
        <Container size={containerSize}>
          <SectionHeader
            tag={tag}
            title={title}
            subtitle={subtitle}
            showViewAll={false}
            variant="default"
            animated={true}
            pre={pre}
            coloredTitle={coloredTitle}
            color={color}
          />
          <div className={styles.emptyState}>
            <Text>No blogs available at the moment.</Text>
          </div>
        </Container>
      </section>
    );
  }

  const handleViewAll = () => {
    if (onViewAllClick) {
      setIsLoading(true);
      onViewAllClick();
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  const handleBlogClick = (blog: BlogCardProps, index: number) => {
    if (onBlogClick) {
      onBlogClick(blog, index);
    }
  };

  return (
    <section className={`${styles.blogSection} ${className || ""}`}>
      <Container size={containerSize}>
        <SectionHeader
          tag={tag}
          title={title}
          subtitle={subtitle}
          showViewAll={showViewAll}
          onViewAllClick={handleViewAll}
          variant="default"
          animated={true}
          pre={pre}
          coloredTitle={coloredTitle}
          color={color}
        />

        <Box className={isLoading ? styles.loading : ""}>
          {layout === "featured" ? (
            <FeaturedBlogGrid blogs={blogs} onBlogClick={handleBlogClick} />
          ) : (
            <RegularBlogGrid
              blogs={blogs}
              layout={layout}
              onBlogClick={handleBlogClick}
            />
          )}
        </Box>
      </Container>

      <div className={styles.backgroundDecor} />
    </section>
  );
};

// Sample data with more variety
export const sampleBlogs: BlogCardProps[] = [
  {
    title:
      "Clean Water, Better Lives: The Impact of Water Treatment Organizations",
    category: "Trending News",
    readTime: "5 mins read",
    publishedTime: "4 hours ago",
    image:
      "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-150.jpg?ga=GA1.1.203040094.1744894746&semt=ais_hybrid&w=740",
  },
  {
    title:
      "Innovative Plumbing and Water Solutions: The Key to Sustainable Cities",
    category: "Trending News",
    readTime: "8 mins read",
    publishedTime: "6 hours ago",
    image:
      "https://img.freepik.com/free-photo/full-shot-environmental-engineer-getting-water-sample_23-2149354044.jpg?ga=GA1.1.203040094.1744894746&semt=ais_hybrid&w=740",
  },
  {
    title: "Water for All: NGOs and Companies Driving Safe Water Access",
    category: "Local News",
    readTime: "6 mins read",
    publishedTime: "12 hours ago",
    image:
      "https://img.freepik.com/free-photo/view-realistic-hands-touching-clear-flowing-water_23-2151210243.jpg?ga=GA1.1.203040094.1744894746&semt=ais_hybrid&w=740",
  },
  {
    title: "Smart Water Meters: Technology Transforming Water Conservation",
    category: "Trending News",
    readTime: "4 mins read",
    publishedTime: "1 day ago",
    image:
      "https://img.freepik.com/free-photo/steel-pipelines-cables-plant_1359-149.jpg?ga=GA1.1.203040094.1744894746&semt=ais_hybrid&w=740",
  },
  {
    title: "Community-Led Water Projects: Success Stories from Rural Areas",
    category: "Local News",
    readTime: "7 mins read",
    publishedTime: "2 days ago",
    image:
      "https://img.freepik.com/free-photo/close-up-view-person-washing-hands_23-2148777497.jpg?ga=GA1.1.203040094.1744894746&semt=ais_hybrid&w=740",
  },
  {
    title: "The Role of Water Management Companies in Sustainable Development",
    category: "Local News",
    readTime: "3 mins read",
    publishedTime: "8 hours ago",
    image:
      "https://img.freepik.com/free-photo/full-shot-environmental-engineer-with-water-sample_23-2149354043.jpg?ga=GA1.1.203040094.1744894746&semt=ais_hybrid&w=740",
  },
];

export default BlogSection;
