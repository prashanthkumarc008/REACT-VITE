import Axios from 'axios';
import { useEffect, useState } from 'react';
const BasicAsync = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
         // Define and call async function
        const fetchUsers = async () => {
            try {
              setLoading(true);
              const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
              setUsers(response.data);
              setLoading(false);
            } catch (error) {
              setError('Failed to fetch users');
              setLoading(false);
            }
          };
      useEffect(() => {
        fetchUsers(); // Call the async function
      }, []); // Empty dependency array for mount-only execution

      // Render loading, error, or data
      if (loading) return <div className="text-center mt-10">Loading...</div>;
      if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">User List</h1>
          <ul className="space-y-2">
            {users.map(user => (
              <li key={user.id} className="p-4 bg-gray-100 rounded shadow">
                {user.id} {user.name} ({user.email})({JSON.stringify(user.address)})
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default BasicAsync;