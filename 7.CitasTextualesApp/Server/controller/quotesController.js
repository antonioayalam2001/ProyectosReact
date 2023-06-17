const getQuotes = async ( req , res ) => {

      const response = await fetch ( 'https://zenquotes.io/api/quotes' );

      console.log ( response )

      const urlData = await response.json ();

      res.status ( 200 ).json (  urlData  );
}


module.exports = {
      getQuotes
}