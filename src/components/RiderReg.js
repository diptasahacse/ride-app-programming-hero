import React, { useReducer } from "react";

const initialState = {
  fullName: "",
  email: "",
  age: "0",
  address: "",
  phone: "",
  drivingLicensePicture: "",
  area: "",
  nidPicture: "",
  profilePicture: "",
  vehicleType: "car",
  vehicleInfo: {
    vehicleName: "",
    vehicleModel: "",
    vehicleNamePlate: "",
  },
  role: "rider",
  blockedStatus: false,
  password: "",
  cpassword: "",
};
const RiderReg = () => {
  const rideReducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "VEHICLE_INFO":
        return {
          ...state,
          vehicleInfo: {
            ...state.vehicleInfo,
            [action.payload.name]: action.payload.value,
          },
        };
      case "IMAGE":
        return { ...state, [action.payload.name]: action.payload.value };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(rideReducer, initialState);
  const rideFormHandler = (event) => {
    event.preventDefault();

    const drivingLicenseImg = state.drivingLicensePicture;
    const profilePic = state.profilePicture;
    const nidPic = state.nidPicture;

    // Form Data
    const drivingLicenseImgformData = new FormData();
    drivingLicenseImgformData.append("image", drivingLicenseImg);

    const profilePicformData = new FormData();
    profilePicformData.append("image", profilePic);

    const nidPicformData = new FormData();
    nidPicformData.append("image", nidPic);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: drivingLicenseImgformData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.data.url);
        }
      });

    fetch(url, {
      method: "POST",
      body: profilePicformData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.data.url);
        }
      });

    fetch(url, {
      method: "POST",
      body: nidPicformData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data.data.url);
        }
      });
  };

  return (
    <div>
      <form onSubmit={rideFormHandler}>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input input-bordered"
                required
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="email"
                required
                placeholder="Rider email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="cpassword"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="number"
                placeholder="Age"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="age"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="address"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="phone"
                placeholder="Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Driving License Picture</span>
              </label>
              <input
                type="file"
                placeholder="Driving License"
                className="input input-bordered"
                onChange={(e) =>
                  dispatch({
                    type: "IMAGE",
                    payload: { name: e.target.name, value: e.target.files[0] },
                  })
                }
                name="drivingLicensePicture"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Area</span>
              </label>
              <input
                type="text"
                placeholder="Area"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="area"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Vehicle type</span>
              </label>
              <div className="flex justify-start gap-5">
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    checked={state.vehicleType == "car"}
                    name="vehicleType"
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    value="car"
                    className="radio radio-info"
                  />
                  <label for="">Car</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    checked={state.vehicleType == "bike"}
                    onChange={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                    name="vehicleType"
                    value="bike"
                    className="radio radio-info"
                  />
                  <label for="">Bike</label>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Vehicle Name</span>
              </label>
              <input
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "VEHICLE_INFO",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="vehicleName"
                placeholder="Vehicle Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Vehicle Model</span>
              </label>
              <input
                type="text"
                onChange={(e) =>
                  dispatch({
                    type: "VEHICLE_INFO",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="vehicleModel"
                placeholder="Vehicle Model"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Vehicle Name Plate</span>
              </label>
              <input
                type="text"
                placeholder="Vehicle Name Plate"
                onChange={(e) =>
                  dispatch({
                    type: "VEHICLE_INFO",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                name="vehicleNamePlate"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Pictute</span>
              </label>
              <input
                type="file"
                onChange={(e) =>
                  dispatch({
                    type: "IMAGE",
                    payload: { name: e.target.name, value: e.target.files[0] },
                  })
                }
                name="profilePicture"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">NID Picture</span>
              </label>
              <input
                type="file"
                name="nidPicture"
                onChange={(e) =>
                  dispatch({
                    type: "IMAGE",
                    payload: { name: e.target.name, value: e.target.files[0] },
                  })
                }
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RiderReg;
