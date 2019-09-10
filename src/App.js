import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="launch-heading">Our Design Blog is Launching Soon</h1>
              {/* <h1>Our Blog is Launching Soon</h1> */}

              <div className="row my-5">
                <div className="col-md-12 mb-3">
                  <input type="email" name="email_address" className="w-100" />
                </div>
                <div className="col-md-6 text-center mx-auto">
                  <button type="button" class="btn btn-block btn-light btn-lg rounded-0">Sign up</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="d-flex justify-content-between">
                    <span><i class="fab fa-github"></i></span>
                    <span><i class="fab fa-linkedin"></i></span>
                    <span><i class="fab fa-react"></i></span>
                    <span><i class="fab fa-sass"></i></span>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
