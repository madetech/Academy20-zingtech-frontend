import {
  useParams,
} from "react-router-dom";

function EmployeeDataPage() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { employeeId } = useParams();

  return (
    <div>
      <h3>{employeeId}</h3>
    </div>
  );
}

export default EmployeeDataPage