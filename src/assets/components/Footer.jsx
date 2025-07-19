export default function Footer ({onQuote}){
    return(
      <footer className="text-center">
        <input onClick={onQuote} className="my-25 bg-yellow-500 p-3 rounded font-black hover:bg-yellow-800 hover:text-white cursor" type="button" name="button" value="change quote" />
      </footer>
    );
}