import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){ 
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">News Bank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                    </li>
                    
                    <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/crime">Crime</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/domestic">Domestic</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/environment">Environment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/food">Food</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/lifestyle">Lifestyle</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/politics">Politics</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/tourism">Tourism</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/world">World</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/other">Other</Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  
}
 