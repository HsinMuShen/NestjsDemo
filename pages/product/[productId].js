import { useRouter } from "next/router";
import Head from "next/head";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <Head>
        <title>product {productId}</title>
        <meta
          name="description"
          content="This is a Next.js practice website."
        ></meta>
      </Head>
      <h1>Details about product {productId}</h1>
    </>
  );
};

export default ProductDetail;
