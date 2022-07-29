import React from "react";
import { PageHeader } from "antd";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "@/extensions";
import { Route } from "antd/lib/breadcrumb/Breadcrumb";

interface PageHeaderCustomProps {}

const PageHeaderCustom: React.FC<PageHeaderCustomProps> = (
  props: PageHeaderCustomProps
) => {
  const router = useRouter();

  const routes = router.asPath
    .split("/")
    .filter((route) => !!route)
    .map((i) => {
      if (i) {
        return {
          path: "/" + i,
          breadcrumbName: capitalizeFirstLetter(i),
        };
      }
    }) as Route[];

  console.log("📢[page-header.tsx:17]: router: ", router);
  return (
    <PageHeader
      ghost={false}
      onBack={() => router.back()}
      className="site-page-header"
      title="Title"
      breadcrumb={{ routes }}
      subTitle="Sub Title"
      style={{ marginBottom: 16 }}
    />
  );
};

export default PageHeaderCustom;
