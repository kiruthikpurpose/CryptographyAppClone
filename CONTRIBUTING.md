# Contributing

We are excited to welcome contributions from the community! Whether you're reporting an issue, suggesting a feature, or contributing code, your input is highly valued. Please follow this guide to ensure a smooth contribution process.

## Project Structure

Understanding the project structure will help you navigate and contribute more effectively:

- **`src/routes`**: Contains the main pages of the app.
- **`src/routes/cipher/[route]`**: The `[route]` represents different cipher pages, as listed in the `README.md`.
- **`src/lib/ciphers`**: Each cipher's logic is implemented as a component in this directory. These components are then imported into the `+page.svelte` file for each corresponding route (e.g., `src/routes/cipher/[route]`).
- **Layouts**: For sub-routes within `cipher`, a `+layout.svelte` file is used to provide the initial layout and structure for the cipher algorithms.

This structure ensures that each cipher operates independently while maintaining a consistent layout across the app.

## Reporting Issues

If you encounter a bug or have a suggestion, you can report it by opening a new issue in the [Issues](link_to_issues) tab. Please include the following information:

1. **Description**: Clearly explain the issue or suggestion.
2. **Environment**: Share details about your setup (e.g., OS, browser version).
3. **Reproduction Steps**: If it's a bug, list the steps to reproduce the issue.
4. **Screenshots/Code Snippets**: Add any relevant visuals or code to help illustrate the problem.

Your feedback helps us improve the app and is greatly appreciated! 🙏

## Contributing Code

To contribute to the codebase, follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top of the repository and clone it to your local machine.
2. **Create a Branch**: Make a new branch specific to your feature or bug fix. For example: `feature/new-cipher` or `fix/bug-description`.
3. **Make Changes**: Implement your feature or fix the issue in your forked repository.
4. **Install Dependencies**: Run `npm install` to set up the project locally.
5. **Run the Development Server**: Use `npm run dev` to start a local server and test your changes.
6. **Build for Production**: Once you're satisfied with your changes, run `npm run build` to generate the production version.
7. **Commit and Push**: Commit your changes, push your branch to your fork, and ensure your commit messages are clear and concise.
8. **Submit a Pull Request**: Open a pull request (PR) from your branch to the original repository, explaining the changes you made.
9. **Review and Merge**: Wait for maintainers to review your PR. They may suggest changes before merging.
10. **Celebrate**: Once your PR is merged, celebrate your contribution! 🎉

## General Contribution Guidelines

- **Ask Questions**: If you're unsure about anything, feel free to ask in the pull request or open a discussion.
- **Documentation Contributions**: Contributions to documentation are just as valuable as code contributions—feel free to improve any part of it.
- **Respect**: Be kind and respectful to maintainers and fellow contributors. Constructive feedback is always welcome, but let's keep it friendly!

Thank you for contributing and being part of the community. Together, we can make this app even better! 🚀
