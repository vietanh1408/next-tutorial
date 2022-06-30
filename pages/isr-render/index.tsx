import { GetStaticProps } from "next";
import AdminLayout from "../../src/components/layout/admin";

interface IArticle {
  author: string;
  createdAt: number;
  description: string;
  id: string;
  imageUrl: string;
  title: string;
  updatedAt: number;
}

interface IPagination {
  _limit: number;
  _page: number;
  _totalRows: number;
}

interface ISRRenderProps {
  data: {
    data: IArticle[];
    pagination: IPagination;
  };
}

const ISRRender = ({ data }: ISRRenderProps) => {
  return (
    <ul>
      {data.data.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export const getStaticProps: GetStaticProps<ISRRenderProps> = async () => {
  // call api here
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
};

ISRRender.Layout = AdminLayout;

export default ISRRender;
