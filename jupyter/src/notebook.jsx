import React from 'react';

export default class Notebook extends React.Component {

  render() {
    const repl = 'https://jihengnie.github.io/custom-juypter-deployment/repl/index.html?kernel=python&toolbar=1&theme=JupyterLab Dark';
    const good = 'https://jihengnie.github.io/custom-juypter-deployment/repl/index.html?kernel=python&toolbar=1&theme=JupyterLab Dark&code=import numpy as np&code=import pandas as pd';
    const jupyterLab = 'https://jihengnie.github.io/custom-juypter-deployment/lab/index.html?kernel=python&toolbar=1';
    const code = 'def my_function(): \ print("Hello from a function")';
    const code2 = 'import numpy as np';
    const src = `${repl}&code=${code}`;
    return (
      <>
        <iframe src={src} width="100%" height="700rem"></iframe>
      </>
    );
  }
}
