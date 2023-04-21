
    // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
    const userInputElement = document.getElementById('user-input');

    if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
    }

    interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
    [prop: string]: string;
    }

    const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
    };