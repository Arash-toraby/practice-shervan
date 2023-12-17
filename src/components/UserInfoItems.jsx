function UserInfoItems({ user, userId }) {
  const { street, suite, city, zipcode } = user.address;
  const { lat, lng } = user.address.geo;
  const currentUser = Number(user.id) === userId;

  if (currentUser)
    return (
      <div className="text-lg">
        <ul>
          <li>ID: {user.id}</li>
          <li>name: {user.name}</li>
          <li>username: {user.username}</li>
          <li>email: {user.email}</li>
          <li>street: {street}</li>
          <li>suite: {suite}</li>
          <li>city: {city}</li>
          <li>zipcode: {zipcode}</li>
          <li>lat: {lat}</li>
          <li>lng: {lng}</li>
        </ul>
      </div>
    );
}

export default UserInfoItems;
