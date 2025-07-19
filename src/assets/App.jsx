import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



  const quotes =[
        "it may take time, but things will get better.",
        "The best way to predict your future is to create it.",
        "Happiness is not a goal. It's a by-product of a life well-lived.",
        "When you feel like giving up, think about why you started it.",
        "If you dont have room to fail, you dont have room to grow.",
        "Be yourself; everyone else is already taken.",
        "Believe you can and you're halfway there.",
        "You matter, your story matters, and your voice matters.",
        "It's okay to rest. Healing takes time.",
        "No one has it all figured out. You're not alone."
    ];

 function App(){
    const [currentQuote, setCurrentQuote] = React.useState(quotes[0]);
    const handleNewQuote = ()=>{
      const randomQuote = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomQuote]);
    }
    return (
      <>
      <Header /> 
      <Main quote={currentQuote} />
      <Footer onQuote ={handleNewQuote} />
      </>
       
    );
}
export default App;