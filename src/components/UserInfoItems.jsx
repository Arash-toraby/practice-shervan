import { useReducer } from "react";
import EditableComponent from "./EditableComponent";

function UserInfoItems({ user, userId }) {
  const initialState = {
    editingField: null,
    isEditing: false,
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    street: user.address.street,
    suite: user.address.suite,
    city: user.address.city,
    zipcode: user.address.zipcode,
    lat: user.address.geo.lat,
    lng: user.address.geo.lat,
  };

  const isCurrentUser = Number(user.id) === userId;

  const [
    {
      editingField,
      isEditing,
      id,
      name,
      username,
      email,
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "startEditing":
        return { ...state, isEditing: true, editingField: action.payload };
      case "stopEditing":
        return { ...state, isEditing: false, editingField: null };
      case "changeName":
        return {
          ...state,
          name: action.payload,
        };
      case "changeUsername":
        return { ...state, username: action.payload };
      case "changeEmail":
        return { ...state, email: action.payload };
      case "changeStreet":
        return { ...state, street: action.payload };
      case "changeSuite":
        return { ...state, suite: action.payload };
      case "changeCity":
        return { ...state, city: action.payload };
      case "changeZipcode":
        return { ...state, zipcode: action.payload };
      case "changeLat":
        return { ...state, lat: action.payload };
      case "changeLng":
        return { ...state, lng: action.payload };
      default:
        throw new Error("action unknown");
    }
  }

  function handleEdit(field) {
    dispatch({
      type:
        isEditing && editingField === field ? "stopEditing" : "startEditing",
      payload: field,
    });
  }

  function handleNameEdit(editedName) {
    dispatch({ type: "changeName", payload: editedName });
  }

  function handleUsernameEdit(editedUsername) {
    dispatch({ type: "changeUsername", payload: editedUsername });
  }

  function handleEmailEdit(editedEmail) {
    dispatch({ type: "changeEmail", payload: editedEmail });
  }

  function handleStreetEdit(editedStreet) {
    dispatch({ type: "changeStreet", payload: editedStreet });
  }

  function handleSuiteEdit(editedSuite) {
    dispatch({ type: "changeSuite", payload: editedSuite });
  }

  function handleCityEdit(editedCity) {
    dispatch({ type: "changeCity", payload: editedCity });
  }

  function handleZipcodeEdit(editedZipcode) {
    dispatch({ type: "changeZipcode", payload: editedZipcode });
  }

  function handleLatEdit(editedLat) {
    dispatch({ type: "changeLat", payload: editedLat });
  }

  function handleLngEdit(editedLng) {
    dispatch({ type: "changeLng", payload: editedLng });
  }

  if (!isCurrentUser) {
    return null;
  }

  return (
    <div className="text-lg mx-10 flex justify-center">
      <ul className="min-w-[300px] divide-y divide-slate-200 space-y-1">
        <li>ID: {id}</li>
        <EditableComponent
          editingField={editingField}
          item="name"
          objName={name}
          handler={handleNameEdit}
          isEditing={isEditing && editingField === "name"}
          handleEdit={() => handleEdit("name")}
        />
        <EditableComponent
          editingField={editingField}
          item="username"
          objName={username}
          handler={handleUsernameEdit}
          isEditing={isEditing && editingField === "username"}
          handleEdit={() => handleEdit("username")}
        />
        <EditableComponent
          editingField={editingField}
          item="email"
          objName={email}
          handler={handleEmailEdit}
          isEditing={isEditing && editingField === "email"}
          handleEdit={() => handleEdit("email")}
        />
        <EditableComponent
          editingField={editingField}
          item="street"
          objName={street}
          handler={handleStreetEdit}
          isEditing={isEditing && editingField === "street"}
          handleEdit={() => handleEdit("street")}
        />
        <EditableComponent
          editingField={editingField}
          item="suite"
          objName={suite}
          handler={handleSuiteEdit}
          isEditing={isEditing && editingField === "suite"}
          handleEdit={() => handleEdit("suite")}
        />
        <EditableComponent
          editingField={editingField}
          item="city"
          objName={city}
          handler={handleCityEdit}
          isEditing={isEditing && editingField === "city"}
          handleEdit={() => handleEdit("city")}
        />
        <EditableComponent
          editingField={editingField}
          item="zipcode"
          objName={zipcode}
          handler={handleZipcodeEdit}
          isEditing={isEditing && editingField === "zipcode"}
          handleEdit={() => handleEdit("zipcode")}
        />
        <EditableComponent
          editingField={editingField}
          item="lat"
          objName={lat}
          handler={handleLatEdit}
          isEditing={isEditing && editingField === "lat"}
          handleEdit={() => handleEdit("lat")}
        />
        <EditableComponent
          editingField={editingField}
          item="lng"
          objName={lng}
          handler={handleLngEdit}
          isEditing={isEditing && editingField === "lng"}
          handleEdit={() => handleEdit("lng")}
        />
      </ul>
    </div>
  );
}

export default UserInfoItems;
