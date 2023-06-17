export const getPost = async () => {
      const url = 'https://jsonplaceholder.typicode.com/posts/1';
      try{
            const response = await fetch ( url );
            return await response.json ();
      }catch ( e ){
            console.log (e);
      }
}