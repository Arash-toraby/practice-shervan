function UserInfoItems({ user, userId }) {
  const { id, name, username, email, address } = user;
  const {
    street,
    suite,
    city,
    zipcode,
    geo: { lat, lng },
  } = address;
  const isCurrentUser = Number(id) === userId;

  if (!isCurrentUser) {
    return null;
  }

  return (
    <div className="text-lg mx-10 flex justify-center">
      <ul className="min-w-[300px]">
        <li>ID: {id}</li>
        <li>name: {name}</li>
        <li>username: {username}</li>
        <li>email: {email}</li>
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
