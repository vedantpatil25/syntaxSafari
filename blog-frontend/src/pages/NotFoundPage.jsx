import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <>
  <h1>Error 404: Page Not Found!</h1>
  <h2>Go to HomePage <Link to="/">Home Page</Link></h2>
  </>
);

export default NotFoundPage;