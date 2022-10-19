import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/vegetablesquiz");
  };
  return (
    <div>
      <h1>home</h1>
      <Link href="/vegetablesquiz">
        <a>Vegetables Quiz</a>
      </Link>
      <button onClick={handleClick}>Same Vegetables Quiz</button>
    </div>
  );
};

export default Home;
