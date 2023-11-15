import { useState } from 'react';
import './App.css';

const TelegramBotToken = "5234710753:AAEY6A7bw3TW1ZI4EFLca2WVqXILSpG-TUU"
const ChatID = 916210487

function App() {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const sendMessages = async () =>{
  try{
    const response = await fetch(
      `https://api.telegram.org/bot${TelegramBotToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: ChatID,
          text: `Ism : ${name}\nTelefon number: ${number}`
        }),
      }
    )
  }catch(err){
    console.error(err)
  }
}
  return (
    <div className="footer">
      <form className='form' action=''>
        <div>
          <input
          placeholder='Ismingiz'
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
           />
        </div>
        <div>
          <input
          placeholder='998 99 999-99-99'
          type="text"
          value={number}
          onChange={(e)=> setNumber(e.target.value)}
           />
        </div>
        <button onClick={sendMessages}>Send Messages</button>
      </form>
    </div>
  );
}

export default App;
