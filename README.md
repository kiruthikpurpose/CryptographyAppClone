# Cryptography App 🔐

Welcome to the **Cryptography App**, a user-friendly web application designed for encrypting and decrypting messages using various cipher techniques. This app is built with **SvelteKit** to provide a fast and interactive user experience.

## Features

- **Caesar Cipher**: A simple substitution cipher that shifts characters.
- **Rail Fence Cipher**: A transposition cipher that arranges characters in a zigzag pattern.
- **Playfair Cipher**: A more complex encryption method (currently under development).

## Project Structure

The project follows a clear organizational structure for better maintainability:

```
/src
  ├── /routes         # Contains the main pages of the app
  └── /lib/ciphers    # Logic for each cipher implementation
      └── /cipher/[route]  # Pages for each cipher route
```

## Reporting Issues

If you encounter any issues while using the app, we encourage you to log them in the [Issues](link_to_issues) tab. Please include:

- A detailed description of the problem
- Your environment setup (OS, browser, etc.)
- Screenshots or code snippets, if applicable

Your feedback is invaluable! 🙏

## Contributing

We welcome contributions from the community! To contribute to the codebase, please follow these steps:

1. **Fork** the repository and clone it to your local machine.
2. Create a **new branch** for your feature or bug fix.
3. Make your changes in the forked repository and **rebase** if necessary.
4. Run `npm install` to install the dependencies.
5. Start the development server with `npm run dev`.
6. After making your changes, build the production version using `npm run build`.
7. **Commit** your changes and push your branch to your fork.
8. Open a **pull request** in the original repository and describe the changes you've made.
9. Wait for a maintainer to review your pull request and merge it.
10. Celebrate your success! 🎉

## General Guidelines

- If you have any questions or need clarification, feel free to ask in the pull request.
- Contributions to the documentation are always welcome!
- Please be respectful to fellow contributors and maintainers.

Thank you for your interest in the Cryptography App! Together, we can enhance its functionality and usability. Happy coding! 🚀
