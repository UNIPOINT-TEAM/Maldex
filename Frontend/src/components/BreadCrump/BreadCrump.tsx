import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const breadcrumbs = useSelector((state) => state.breadcrumbs.breadcrumbs);
  return (
    <nav>
      <ul className="breadcrumb">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={crumb.path} className={isLast ? "active" : ""}>
              {isLast ? crumb.name : <Link to={crumb.path}>{crumb.name}</Link>}
              {index < breadcrumbs.length - 1 && " / "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
