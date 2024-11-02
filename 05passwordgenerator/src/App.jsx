import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+-={}:<>?';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg p-6 mt-8 md:mt-16 bg-gray-900 text-orange-400 animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Password Generator</h1>

      <div className="flex flex-col md:flex-row items-center mb-6">
        <input
          type="text"
          value={password}
          className="flex-grow p-2 text-center bg-gray-700 text-white rounded-lg md:rounded-l-lg md:rounded-r-none outline-none focus:ring-2 focus:ring-orange-500"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="mt-4 md:mt-0 p-2 w-full md:w-auto bg-blue-500 text-white rounded-lg md:rounded-r-lg md:rounded-l-none hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Copy
        </button>
      </div>

      <div className="space-y-4">
        {/* Length Slider */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <label htmlFor="length" className="text-sm">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Numbers Checkbox */}
        <div className="flex items-center gap-2">
          <label htmlFor="number" className="text-sm">Include Numbers</label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setnumberAllowed((prev) => !prev)}
            className="h-4 w-4 accent-blue-500"
          />
        </div>

        {/* Characters Checkbox */}
        <div className="flex items-center gap-2">
          <label htmlFor="char" className="text-sm">Include Special Characters</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setcharAllowed((prev) => !prev)}
            className="h-4 w-4 accent-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
