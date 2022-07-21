// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table"
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader/Loader";
import { listUsers,deleteUser } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Message from "../../components/message"
import Loader from "../../components/Loader/Loader";

// import Container from "react-bootstrap/Container";
// import Alert from "react-bootstrap/Alert";
import { Image } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import "../ProductList/test.css"
import { Link } from "react-router-dom";

const UserList = () => {

  const dispatch = useDispatch()
  
   const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList
  const Navigate = useNavigate();


   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;
   
   const userDelete = useSelector((state) => state.userDelete);
   const { success: successDelete } = userDelete;

    const deleteHandler = (id) => {
      if (window.confirm("Are you sure you want to delete this product")) {
        dispatch(deleteUser(id));
      }
    };

    
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      Navigate("/");
    }
  }, [dispatch, Navigate, userInfo, successDelete]);

    return (
      <>
        <div className="container-xl tableProduct">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Users</b>
                    </h2>
                  </div>
                </div>
              </div>

              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Info</th>
                      <th>ADMIN</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Image
                              src={user.pic}
                              width="50"
                              height="50"
                              className="img-fluid rounded-circle"
                              alt=""
                            />
                            <div className="ms-2">
                              <p className="fw-bold mb-1">{user.name}</p>
                              <p className="text-muted mb-0">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td>{user.isAdmin}</td>
                        <td>
                          <LinkContainer to={`/admin/user/${user._id}/edit`}>
                            <i
                              className="bi bi-pencil-square"
                              data-toggle="tooltip"
                              title="Edit"
                            ></i>
                          </LinkContainer>

                          <Link to="" className="delete">
                            <i
                              onClick={() => deleteHandler(user._id)}
                              className="bi bi-trash3"
                              data-toggle="tooltip"
                              title="Delete"
                            ></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </>
    );
}
 
export default UserList;