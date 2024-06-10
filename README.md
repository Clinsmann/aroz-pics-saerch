
# The Unleash Masonry

To run this project, you need to have the following installed on your machine:
- Node.js
- yarn or npm


Below are the key steps to run and test the project:

1.Install the dependencies by running the following command in the root directory of the project:
```bash
yarn
```

2.Start the project by running the following command in the root directory of the project:
```bash
yarn start
```

3. To run E2E tests, run the following command in the root directory of the project:
```bash
yarn test:e2e
```

4. Navigate to `http://localhost:5173` to view the project in your browser.

## Technical decisions (you can read if you have time)
### Decisions on libraries used:
1. **React**: Chosen for its popularity and speed, and because I use it daily.
2. **Playwright**: Selected for E2E testing due to its modern and fast capabilities.
3. **Tailwind CSS**: Used for styling as it’s a utility-first framework that's easy to use and fast for building.
4. **React Query**: Utilized for data fetching because it efficiently manages fetch, cache, and update processes, and handles loading, error, and success states seamlessly.
5. **Axios**: Employed to keep data fetching logic clean, concise, and readable.

### How I structured my components:
1. **Component-Driven Approach**: Components folder in src for base components.
2. **Page-Specific Folders**: Each page folder contains components and hooks specific to that page.

### Improvements:
1. **Additional Tests**: More unit tests.
2. **Extended Pagination**: Navigate to a specific page.
3. **Infinite Scroll**: Using virtualization.
4. **UI Enhancements**: Cleaner and more appealing design.
5. **Notification Component**: More user-friendly and generic.