import AdminLayout from "@/components/layout/admin";
import Table from "@/components/table";
import { defaultPagination } from "@/constants";
import useSearchTable from "@/hooks/useSearchTable";
import { TablePaginationConfig } from "antd";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();

  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "thumbnail_url",
      key: "thumbnail_url",
      ellipsis: true,
      // sort
      sortDirections: ["ascend", "descend"],
      sorter: true,
      // search
      ...useSearchTable("name", (values: any) => console.log(values)),
      // filter
      /* 
        if using search, we can not using filter at the same time
      */
      filters: [
        {
          text: "Active",
          value: "active",
          color: "green",
        },
        {
          text: "Draft",
          value: "draft",
        },
      ],
      render: (url: string) => url,
    },
  ];

  return (
    <Table
      loading={false}
      columns={columns}
      data={[]}
      pagination={{
        ...defaultPagination,
        total: 0,
        current: 1,
      }}
      onChange={(
        pagination: TablePaginationConfig,
        filters: any,
        sorter: any
      ) => console.log({ pagination, filters, sorter })}
      addAction={() => router.push("/products/create")}
    />
  );
};

ProductPage.Layout = AdminLayout;

export default ProductPage;
