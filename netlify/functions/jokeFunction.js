exports.handler = async () => {
    try {
      // It's super important to remember the things you can do in a fetch request when it comes to HTTP capabilities. headers is just one of the different ways you can customize the type of data you get back.
      const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
              'Accept': 'application/json',
          }
      });
      // console.log('this is response: ', response);

      const joke = await response.json();
      // console.log('this is joke: ', joke);

      // return new NextResponse(joke.joke)
      return {
        statusCode:200,
        body: JSON.stringify(joke.joke),
      }
  } catch (error) {
      console.log(error)
      // return new NextResponse('There was an error in the backend')
      return 
  }
};