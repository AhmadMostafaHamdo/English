
const Word = ({ word, onDragStart }) => {
  return (
    <div
      className="word"
      draggable
      onDragStart={(e) => onDragStart(e, word)}
    >
      {word}
    </div>
  );
};

export default Word;
