import type { MDXComponents } from "mdx/types";
import CustomLink from "./components/CustomLink";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: CustomLink,
  };
}
