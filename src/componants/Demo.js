import React from "react";
import { useState } from "react";
import "../css/demo.css";
export default function Demo() {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  const [person, setperson] = useState([]);
  const [search, setsearch] = useState("");
  const [searchData, setsearchData] = useState("")
  const [indexOfEdit, setindexOfEdit] = useState(-1);
  const [temp, settemp] = useState([]);

  const searchbtn = () => {
   if(search != "")
   {  
      console.log("Yes");
      let tempArr = person;
      const existingUser = tempArr.find((user) => user.first === search);
      console.log(existingUser);
      
      setsearchData(existingUser);
      settemp(person);
      setperson([]);
      setperson([existingUser]);
   }  
   else{
      setperson(temp);
      console.log(person);
   }
  };
  const submit = () => {
    const data = {
      first: first,
      second: second,
    };

    if (indexOfEdit > -1) {
      let tempArr = person;
      tempArr[indexOfEdit] = data;
      setperson(tempArr);
      setindexOfEdit(-1);
    } else {
      setperson([...person, data]);
    }
    setfirst("");
    setsecond("");
  };
  const edit = (e) => {
    let copyArray = person[e];
    console.log(copyArray);
    setfirst(copyArray.first);
    setsecond(copyArray.second);
    setindexOfEdit(e);
  };
  const remove = (index) => {
    let copyArray = [...person];
    copyArray.splice(index, 1);
    setperson(copyArray);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setsearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={searchbtn}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="simple-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content ">
                <div className="container-1 shadow-lg rounded">
                  <div className="nav">
                    <button
                      className="btn-1 btn2"
                      id="btns2"
                      
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="main">
                    <div id="login" className="loginClass">
                      <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        required=""
                        value={first}
                        onChange={(e) => setfirst(e.target.value)}
                      />
                      <br />
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={second}
                        onChange={(e) => setsecond(e.target.value)}
                      />
                      <br />

                      <br />
                      <button className="subBtn" type="button" onClick={submit}>
                        LOGIN
                      </button>
                      <br />
                    </div>
                    <div id="signUp" className="signupClass">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required=""
                      />
                      <br />
                      <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        required=""
                      />
                      <br />
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        required=""
                      />
                      <br />
                      <button type="submit" className="signBtn">
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <table class="table table-danger">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {person.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{index}</th>
                          <td>{item.first}</td>
                          <td>{item.second}</td>
                          <td>
                            <input
                              type="button"
                              value="edit"
                              className="btn btn-light"
                              onClick={() => edit(index)}
                            />
                          </td>
                          <td>
                            <input
                              type="button"
                              value="remove"
                              className="btn btn-light"
                              onClick={() => remove(index)}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
