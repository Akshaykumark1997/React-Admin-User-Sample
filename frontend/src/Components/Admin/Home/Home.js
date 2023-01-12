import React from 'react'

function Home() { 
  return (
    <div>
        <div className="container">
        <table className="table mt-5 table-hover table-light text-start align-middle table-bordered">
            <thead>
              <tr>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  UserId
                </th>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  Username
                </th>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  Email
                </th>
                <th className="col-3 col-md-3 col-lg-3 col-xl-1 text-center">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                  hii
                </td>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                  name
                </td>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                 email
                </td>
                <td className="col-3 col-md-3 col-lg-3 col-xl-2 text-center">
                  <a href="/">
                    <button type="button" className="btn btn-outline-danger" style={{width: "5rem"}} >
                      Block
                    </button></a>
                  <a href="/">
                    <button
                      type="button"
                      className="btn btn-outline-success mx-2"
                      style={{width: "5rem"}} 
                    >
                      Unblock
                    </button></a>
                 
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home;