import React, {useState} from 'react';

const Text = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    const formattedText = inputText.toUpperCase(); 
    setOutputText(formattedText);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Вывод текста</button>
      <p>{outputText}</p>
    </div>
  );
};

export default Text;