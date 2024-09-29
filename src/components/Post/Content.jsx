const Content = ({ tweet }) => {
  return (
    <div className="my-4">
      {tweet.textContent && <p style={{ whiteSpace: "pre-wrap" }}>{tweet.textContent}</p>}

      {tweet.imageContent && (
        <img src={tweet.imageContent} className="my-5 pr-3 w-full rounded-lg object-cover max-[400px]" />
      )}
    </div>
  );
};

export default Content;
