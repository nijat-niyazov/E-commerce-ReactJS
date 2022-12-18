import React, { lazy } from 'react';
import { About } from '../Components/Footer/FootPages/About';
import Return from '../Components/Footer/FootPages/Return';

///// it used for if you don't have used default for exported function ⤵
const lazyLoad = (path, component) =>
  lazy(() => {
    const promise = import(`${path}`);
    if (component == null) {
      return promise;
    } else {
      return promise.then(module => ({ default: module[component] }));
    }
  });

export default lazyLoad;

// const lazyLoad2 = (path, component) =>
//   lazy(() => {
//     const promise = import(path);
//     if (component == null) {
//       return promise;
//     } else {
//       return promise.then(module => ({ default: module.component }));
//     }
//   });

// lazyLoad2('./Components/Footer/FootPages/About', 'About');

// const About = lazy(() =>
//   import('./Components/Footer/FootPages/About').then(module => ({
//     default: module.About,
//   }))
// );
