import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/soraeee/ugahacks23/', // Update to point to your repository
  user: {
   name: 'Andrew Vo', // update to use your name
   email: 'andrew.vo8@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);