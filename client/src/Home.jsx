import { Link } from "react-router-dom";

function Home() {


    
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
 <h1 className="mb-4">Welcome to Authentication</h1>
    <div className="d-flex gap-3">
     <Link to="/login" className="btn btn-primary">Login</Link>
    <Link to="/register" className="btn btn-success">Signup</Link>
      </div>
    </div>
  );
}

export default Home;
