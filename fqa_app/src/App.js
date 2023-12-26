
import Question from "./Question";
import "./index.css";

export default function App() {
  return (
    <>
      <h1>Sri Shakthi Engineering College</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "Which is the most taken course in this college ?",
    info:"Computer Science Engineering,Information Technology are the two most taken courses in the academic year 2021-2023"
  },
      
  {
    id: 2,
    title: "does this college has Hostel Facility?",
    info:
      "Yes,this College has Hostel Facilities" },
  {
    id: 3,
    title: "What about campus Placements?",
    info:
      "This College Provieds 100% placement Every Year"}
];
