// Import required modules from Next.js and React
"use client"
import { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';

// Define the User interface
interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

// Component for rendering user details
const UserCard = ({ user, isLoadingDetails }: { user: User; isLoadingDetails: boolean }) => (
  <li className="bg-[#333] p-4 rounded-lg shadow text-white animate__animated animate__fadeIn relative group">
    <div className="initial-details">
      <p>
        <strong className="text-blue-400  animated-text">ID:</strong> <span className="animated-text">{user.ID}</span>
      </p>
      <p>
        <strong className="text-blue-400  animated-text">Job Title:</strong> <span className="animated-text">{user.JobTitle}</span>
      </p>
      <p>
        <strong className="text-blue-400  animated-text">Name:</strong> <span className="animated-text">{user.FirstNameLastName}</span>
      </p>
    </div>
    <div className="hover-details absolute top-0 left-0 w-full h-full bg-[#333] p-4 rounded-lg shadow text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-center">
      {isLoadingDetails ? (
        <div role="status" className="flex justify-center ">
          {/* Centered loading spinner */}
          <svg
            aria-hidden="true"
            className="w-8 h-8 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M100 50.59c0 27.6-22.4 50-50 50S0 78.2 0 50.59 22.4.59 50 .59s50 22.4 50 50zM9.08 50.59c0 22.6 18.3 41 41 41s41-18.3 41-41-18.3-41-41-41-41 18.3-41 41z" fill="currentColor"/>
            <path d="M93.97 39.04c2.4-.63 4.9 1 5.5 3.4.63 2.4-1 4.9-3.4 5.5A50.89 50.89 0 0150 88.79V72.8a32.08 32.08 0 0042.18-22.08c.62-2.4 3-3.92 5.52-3.42 2.41.63 4.02 3 3.4 5.42a40.58 40.58 0 01-53.42 29.15V88.79c0 .56.04 1.11.1 1.65a9.34 9.34 0 005.3 5.3c.52.16 1.05.26 1.57.34a51.18 51.18 0 0046.22-47.8V50.6a40.55 40.55 0 01-39.06 39.06V33.68c4.6-1.2 8.56-4.2 10.78-8.4h9.6a41.03 41.03 0 00-32.58 56.32V88.8A50.58 50.58 0 01100 50.6c0-.67-.02-1.33-.05-2a50.75 50.75 0 01-5.97 10.43z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <p>
            <strong className="text-blue-400 animated-text ">Email:</strong><span className="animated-text ml-1"> {user.EmailAddress}</span>
          </p>
          <p>
            <strong className="text-blue-400  animated-text">Phone:</strong> <span className="animated-text">{user.Phone}</span>
          </p>
          <p>
            <strong className="text-blue-400  animated-text">Company:</strong> <span className="animated-text">{user.Company}</span>
          </p>
        </>
      )}
    </div>
  </li>
);

// Export the Home component as default
export default function Home() {
  // State hooks for users list, page number, loading state
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDetails, setLoadingDetails] = useState<{ [key: string]: boolean }>({});
  const totalPages = 10; // Fixed number of pages

  // Function to fetch users from API
  const fetchUsers = useCallback(async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://give-me-users-forever.vercel.app/api/users/${pageNum}/next`
      );
      // Simulate delay for animation effect
      setTimeout(() => {
        const usersData = response.data.users;
        setUsers(usersData);
        setLoading(false);
        const newLoadingDetails = usersData.reduce((acc: { [key: string]: boolean }, user: User) => {
          acc[user.ID] = false;
          return acc;
        }, {});
        setLoadingDetails(newLoadingDetails);
      }, 1000); // Adjust delay time as needed
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  }, []);

  // Effect hook to fetch users when page changes
  useEffect(() => {
    fetchUsers(page);
  }, [page, fetchUsers]);

  // Function to handle next page navigation
  const handleNext = useCallback(() => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  }, [totalPages]);

  // Function to handle previous page navigation
  const handlePrev = useCallback(() => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  }, []);

  // Function to handle clicking on specific page number
  const handlePageClick = useCallback((pageNum: number) => {
    setPage(pageNum);
  }, []);

  const pageButtons = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, index) => (
        <li key={index}>
          <button
            onClick={() => handlePageClick(index + 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight ${
              page === index + 1
                ? 'text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                : 'text-white bg-gray-600 border border-gray-300 hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
          >
            {index + 1}
          </button>
        </li>
      )),
    [page, handlePageClick, totalPages]
  );

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto mt-7 text-center">
        <h1 className="text-4xl font-semibold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 animate-pulse">
            Users Info
          </span>
        </h1>
        {loading ? ( // Conditionally render loading spinner
          <div className="flex items-center justify-center h-screen">
            <div className="flex justify-center items-center">
              <svg
                aria-hidden="true"
                className="w-8 h-8 animate-spin fill-blue-600 mr-3"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100 50.59c0 27.6-22.4 50-50 50S0 78.2 0 50.59 22.4.59 50 .59s50 22.4 50 50zM9.08 50.59c0 22.6 18.3 41 41 41s41-18.3 41-41-18.3-41-41-41-41 18.3-41 41z" fill="currentColor"/>
                <path d="M93.97 39.04c2.4-.63 4.9 1 5.5 3.4.63 2.4-1 4.9-3.4 5.5A50.89 50.89 0 0150 88.79V72.8a32.08 32.08 0 0042.18-22.08c.62-2.4 3-3.92 5.52-3.42 2.41.63 4.02 3 3.4 5.42a40.58 40.58 0 01-53.42 29.15V88.79c0 .56.04 1.11.1 1.65a9.34 9.34 0 005.3 5.3c.52.16 1.05.26 1.57.34a51.18 51.18 0 0046.22-47.8V50.6a40.55 40.55 0 01-39.06 39.06V33.68c4.6-1.2 8.56-4.2 10.78-8.4h9.6a41.03 41.03 0 00-32.58 56.32V88.8A50.58 50.58 0 01100 50.6c0-.67-.02-1.33-.05-2a50.75 50.75 0 01-5.97 10.43z" fill="currentFill"/>
              </svg>
              <span className="text-lg">Loading...</span>
            </div>
          </div>
        ) : (
          <div className='m-10'>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
              {users.map((user) => (
                <UserCard key={user.ID} user={user} isLoadingDetails={loadingDetails[user.ID]} />
              ))}
            </ul>
            <nav aria-label="Page navigation example" className="flex justify-center mt-40">
              <ul className="inline-flex -space-x-px text-sm mt-6 lg:mt-0">
                <li>
                  <button
                    onClick={handlePrev}
                    className={`flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-600 border border-gray-300 rounded-l-lg hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                </li>
                {pageButtons}
                <li>
                  <button
                    onClick={handleNext}
                    className={`flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-600 border border-gray-300 rounded-r-lg hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={page === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
