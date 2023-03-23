import React from "react";

const Users = () => {
  return (
    <div>
      <div>
        <div className="card bg-neutral">
          <div className="card-body">
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search here by name, email or phone"
                    className="input input-bordered input-md w-full"
                  />
                </div>
                <div className="form-control">
                  <div className="flex gap-3 items-center">
                    <span>Age:</span>
                    <div className="flex gap-2">
                      <label className="flex gap-1">
                        <input type="checkbox" className="checkbox" />
                        <span>18-25</span>
                      </label>
                      <label className="flex gap-1">
                        <input type="checkbox" className="checkbox" />
                        26-30
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head*/}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Block Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Dipta Saha</div>
                        </div>
                      </div>
                    </td>
                    <td>01613146412</td>
                    <td>dipta@gmail.com</td>
                    <td>25</td>
                    <td>
                      <div className="flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                      </div>
                     
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
