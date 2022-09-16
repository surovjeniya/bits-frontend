import { Layout, withLayout } from "@/layout/Layout/Layout";
import axios from "axios";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";

const Home = () => {
  return <>Home</>;
};

export default withLayout(Home);
