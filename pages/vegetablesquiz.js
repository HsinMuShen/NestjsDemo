import { useState, useEffect } from "react";
import styles from "../styles/vegetables.module.css";

// const VegetablesPage = ({ getVegetables }) => {
//   const [vegetables, setVegetables] = useState(getVegetables);
const VegetablesPage = () => {
  const [vegetables, setVegetables] = useState([]);
  const [vegetablesIndex, setVegetablesIndex] = useState(
    Math.floor(Math.random() * 2)
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIscorrect] = useState(false);

  const fetchVegetables = async () => {
    const response = await fetch("/api/vegetables");
    const data = await response.json();
    setVegetables(data);
  };

  const checkAnswer = (string) => {
    if (string === vegetables[vegetablesIndex].text) {
      setIscorrect(true);
    } else {
      setIscorrect(false);
    }
    setShowAnswer(true);
  };
  useEffect(() => {
    fetchVegetables();
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Potato or Tomato</p>
      <img
        src={
          vegetables[vegetablesIndex] ? vegetables[vegetablesIndex].img : null
        }
        className={styles.image}
      />
      <div className={styles.buttonWrapper}>
        <button
          className={styles.buttonP}
          onClick={() => checkAnswer("Patato")}
        >
          Patato
        </button>
        <button
          className={styles.buttonT}
          onClick={() => checkAnswer("Tomato")}
        >
          Tomato
        </button>
      </div>
      <div
        className={styles.answerWrapper}
        style={{ top: showAnswer ? "0" : "-100vh" }}
      >
        <p className={styles.answer}>
          {isCorrect
            ? "Yup, you are so awesome."
            : "NO NO NO. Go to the supermarket."}
        </p>
        <button
          className={styles.againButton}
          onClick={() => {
            setShowAnswer(false);
            setVegetablesIndex(Math.floor(Math.random() * 2));
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
export default VegetablesPage;

// export const getStaticProps = async () => {
//   const response = await fetch("http://localhost:3000/api/vegetables");
//   const data = await response.json();
//   return {
//     props: {
//       getVegetables: data,
//     },
//   };
// };
// export const getStaticPaths = async () => {
//   const response = await fetch("http://localhost:3000/api/vegetables");
//   const data = await response.json();

//   const paths = data.map((vegetable) => {
//     return { params: { id: vegetable.id } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
