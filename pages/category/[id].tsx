import { withLayout } from "@/layout/Layout/Layout";
import axios from "axios";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticPathsResult,
} from "next";

const Category = ({ category }: any) => {
  console.log(category);
  return <>{category.name}</>;
};

export default withLayout(Category);

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { data: category } = await axios.get(
    "https://63202aad9f82827dcf264542.mockapi.io/api/v1/categories/" +
      ctx.params?.id
  );
  return {
    props: {
      category,
    },
  };
};
