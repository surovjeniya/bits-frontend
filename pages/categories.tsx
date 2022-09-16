import { withLayout } from "@/layout/Layout/Layout";
import axios from "axios";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import Link from "next/link";

interface ICategory {
  id: number;
  name: string;
}

interface CategoriesPageProps {
  categories: ICategory[];
}

const CategoriesPage = ({ categories }: any) => {
  console.log(categories);
  return (
    <>
      <ul>
        {categories?.map((item: any) => (
          <li key={item.id}>
            <Link href={`/category/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withLayout(CategoriesPage);

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<CategoriesPageProps>> => {
  const { data: categories } = await axios.get(
    "https://63202aad9f82827dcf264542.mockapi.io/api/v1/categories"
  );

  return {
    props: {
      categories,
    },
  };
};
