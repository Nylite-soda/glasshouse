import React from "react";
import { SimpleGrid, Container } from "@mantine/core";
import BlogCard, { BlogCardProps } from "./BlogCard";
import styles from "@/styles/BlogGrid.module.css";

export interface BlogGridProps {
  blogs: BlogCardProps[];
  layout?: "masonry" | "grid" | "featured";
  columns?: { base: number; sm: number; md: number; lg: number };
  spacing?: string | number;
  className?: string;
  onBlogClick?: (blog: BlogCardProps, index: number) => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({
  blogs,
  layout = "grid",
  columns = { base: 1, sm: 1, md: 2, lg: 3 },
  spacing = "lg",
  className,
  onBlogClick,
}) => {
  const handleBlogClick = (blog: BlogCardProps, index: number) => {
    if (onBlogClick) {
      onBlogClick(blog, index);
    }
  };

  const renderFeaturedLayout = () => {
    if (blogs.length === 0) return null;

    const [featuredBlog, ...otherBlogs] = blogs;

    return (
      <div className={styles.featuredLayout}>
        <div className={styles.featuredCard}>
          <BlogCard
            {...featuredBlog}
            size="large"
            onClick={() => handleBlogClick(featuredBlog, 0)}
          />
        </div>

        <div className={styles.sideCards}>
          {otherBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
              size="small"
              onClick={() => handleBlogClick(blog, index + 1)}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderMasonryLayout = () => {
    return (
      <div className={styles.masonryGrid}>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`${styles.masonryItem} ${
              index % 3 === 0 ? styles.tall : ""
            }`}
          >
            <BlogCard
              {...blog}
              size={index % 4 === 0 ? "large" : "medium"}
              onClick={() => handleBlogClick(blog, index)}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderGridLayout = () => {
    return (
      <SimpleGrid cols={columns} spacing={spacing} className={styles.blogGrid}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.gridItem}>
            <BlogCard {...blog} onClick={() => handleBlogClick(blog, index)} />
          </div>
        ))}
      </SimpleGrid>
    );
  };

  const renderLayout = () => {
    switch (layout) {
      case "featured":
        return renderFeaturedLayout();
      case "masonry":
        return renderMasonryLayout();
      default:
        return renderGridLayout();
    }
  };

  return (
    <div className={`${styles.blogGridContainer} ${className || ""}`}>
      {renderLayout()}
    </div>
  );
};

export default BlogGrid;
