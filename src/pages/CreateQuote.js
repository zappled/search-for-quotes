import React, { useRef, useState } from "react";
import CreateQuoteEntry from "../components/CreateQuoteEntry";

const CreateQuote = (props) => {
  const [nameInput, setNameInput] = useState([]);
  const [quoteInput, setQuoteInput] = useState([]);
  const [tagInput, setTagInput] = useState([]);

  const [hasCreated, setHasCreated] = useState(false);

  const nameInputRef = useRef();
  const quoteInputRef = useRef();
  const tagInputRef = useRef();

  const addInput = (e) => {
    e.preventDefault();
    setHasCreated(!hasCreated);
    const name = nameInputRef.current.value;
    const quote = quoteInputRef.current.value;
    const tag = tagInputRef.current.value;
    setNameInput(name);
    setQuoteInput(quote);
    setTagInput(tag);
  };

  const quote = { author: nameInput, content: quoteInput, tags: tagInput };

  const createAgain = () => {
    setHasCreated(!hasCreated);
  };

  const addToFav = (newItem) => {
    props.setFavList((prevState) => [...prevState, newItem]);
  };

  return (
    <>
      {hasCreated === false ? (
        <div className="container text-center">
          <div className="row">
            <div className="col"></div>
            <div className="col-5">
              <br />
              <div>Create your own quote and share your wisdom!</div>
              <form onSubmit={addInput}>
                <input
                  type="text"
                  className="input"
                  placeholder="Your name"
                  ref={nameInputRef}
                  required
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Your quote"
                  ref={quoteInputRef}
                  required
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Your tags"
                  ref={tagInputRef}
                  required
                />
                <br />
                <button className="submit" style={{ marginTop: "10px" }}>
                  Create
                </button>
              </form>
            </div>

            <div className="col"></div>
          </div>
        </div>
      ) : (
        <>
          <CreateQuoteEntry
            createAgain={createAgain}
            nameInput={nameInput}
            quoteInput={quoteInput}
            tagInput={tagInput}
            addToFav={addToFav}
            quote={quote}
          />
        </>
      )}
    </>
  );
};

export default CreateQuote;