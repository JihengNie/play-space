import React from 'react';

export default class Notebook extends React.Component {

  render() {
    const repl = 'https://jihengnie.github.io/custom-juypter-deployment/repl/index.html?kernel=python&toolbar=1&theme=JupyterLab Dark';
    const jupyterLab = 'https://jihengnie.github.io/custom-juypter-deployment/lab/index.html?kernel=python&toolbar=1';
    const code = 'def my_function(): print("Hello from a function")';
    const src = `${repl}&code=${code}`;
    // console.log(src);
    return (
      <iframe src={jupyterLab + src} width="100%" height="700rem"></iframe>
    );
  }
}
