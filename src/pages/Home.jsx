import Author from "../components/Author";

const Home = ({ authors }) => {
  return (
    <>
      <h1 className="title">Authors</h1>
      <div className="authors">
        {authors?.map((author, idx) => (
          <Author author={author} key={idx + 1} idx={idx + 1} />
        ))}
      </div>
    </>
  );
};

export default Home;
