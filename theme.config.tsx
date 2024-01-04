import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <Image
      src={"/logo.png"}
      alt="株式会社EISHINのロゴ"
      width={200}
      height={50}
    />
  ),
  project: {
    link: "https://github.com/eishin-inc/coding-standard",
  },
  search: {
    placeholder: "Search...",
  },
  editLink: {
    text: "このページをGitHubで編集する",
  },
  feedback: {
    content: "フィードバックはこちら →",
  },
  docsRepositoryBase: "https://github.com/eishin-inc/coding-standard",
  footer: {
    text: "Created by Nextra",
  },
};

export default config;
