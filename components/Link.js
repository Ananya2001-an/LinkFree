import NextLink from "next/link";

export default function Link({ children, className, rel, ...restProps }) {
  return (
    <NextLink
      aria-label={children}
      rel={rel ? rel : "noreferrer"}
      className={
        className
          ? className
          : "text-primary-medium dark:text-primary-low underline decoration-dotted hover:underline hover:decoration-solid"
      }
      prefetch={false}
      {...restProps}
    >
      {children}
    </NextLink>
  );
}
