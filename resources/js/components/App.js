import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
    function handleOnClick(e) {
        e.preventDefault();
        axios.get('/api/user')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">App Component</div>

                        <div className="card-body">I'm an App component!</div>

                        <button onClick={handleOnClick}>TEST</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('task-manager')) {
    ReactDOM.render(<App />, document.getElementById('task-manager'));
}
