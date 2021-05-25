import React from 'react';

export default function Technologies() {
  return (
    <div>
       <div>
          <p>HTML</p>
          <i className="fab fa-html5 fa-5x"></i>
        </div>
        <div>
          <p>JAVASCRIPT</p>
          <i className="fab fa-js fa-5x"></i>
        </div>
        <div>
          <p>GIT</p>
          <img style={{
            height: '45px'
          }} src="https://user-images.githubusercontent.com/76187279/119210487-ee7a5f00-ba71-11eb-9794-89ce77d996be.png" alt="git icon"/>
        </div>
        <div>
          <p>GITHUB</p>
          <i className="fab fa-github fa-5x"></i>
        </div>
        <div>
          <p>VS CODE</p>
          <img style={{
            height: '45px'
          }} src="https://user-images.githubusercontent.com/76187279/119210485-ec180500-ba71-11eb-8631-0a3493bb66f8.png" alt="VS Code icon"/>
        </div>
    </div>
  );
}
