import "./styles.css";
import SingleComment from "./SingleComment";

export default function App() {
  return (
    <div class="ui comments">
      <h3 class="ui dividing header">Comments</h3>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
}
