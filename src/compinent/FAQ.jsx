import React, { useState } from "react";
import axios from "axios";
import loadinggif from "../assets/loadinggif.gif";

const FAQ = () => {
  const [que, setQue] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const generateanswer = async () => {
    setLoading(true);
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDV9iqn6Uc1ZzQnH2RnoefJUUQKEzbTMYA",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: que,
              },
            ],
          },
        ],
      },
    });
    // console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    setLoading(false);
    setQue("");
  };
  return (
    <div className="w-screen min-h-screen p-4">
      <h1 className="text-center font-semibold text-4xl text-zinc-500">
        Ask your question related to your pet.
      </h1>
      <div className="w-full my-10 flex justify-center gap-4">
        <input
          className="px-4 py-2 bg-transparent border-2 border-zinc-500 rounded-lg md:w-[60%]"
          onChange={(e) => setQue(e.target.value)}
          placeholder="Ask your question"
          type="text"
          value={que}
        />
        <button
          className="px-4 py-2 rounded-lg bg-zinc-500 text-white"
          onClick={generateanswer}
        >
          Generate answer
        </button>
      </div>

      <div className="md:w-[80%] w-full min-h-screen mx-auto text-justify border-2 px-4 py-2 rounded-lg border-zinc-500">
        {/* {!loading ? <pre className="w-full overflow-auto whitespace-pre-wrap">{answer}</pre> : <img src={loadinggif} alt="" />} */}
        {loading ? (
          <img className="w-screen h-screen object-cover rounded-lg" src={loadinggif} alt="Loading..." />
        ) : (
          <pre className="w-full overflow-auto whitespace-pre-wrap">
            {answer}
          </pre>
        )}
      </div>
    </div>
  );
};

export default FAQ;
