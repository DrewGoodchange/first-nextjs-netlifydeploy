import { NextResponse } from "next/server";

// first we need to create our request function and export it
// backend is where we make our call to the actual API
export async function GET () {
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

        return new NextResponse(joke.joke)
    } catch (error) {
        console.log(error)
        return new NextResponse('There was an error in the backend')
    }
};

// you can do this for other CRUD functionality too