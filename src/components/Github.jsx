import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    // const [data, setData] = useState(null); // Initially null to handle loading state
    const data = useLoaderData({});
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Paradva-Niraj")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //             console.log(data);
    //         })
    //         .catch((error) => console.error("Error fetching data:", error));
    // }, []);

    if (!data) {
        return <h2 className="text-center text-gray-700 text-lg mt-10">Loading...</h2>;
    }

    return (
        <div className="flex justify-center items-center h-98 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
                <img 
                    src={data.avatar_url} 
                    alt="GitHub Avatar" 
                    className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
                />
                <h2 className="text-xl font-semibold text-gray-800 mt-4">{data.name}</h2>
                <p className="text-gray-600">@{data.login}</p>
                <p className="text-gray-700 mt-2">Followers: <span className="font-bold">{data.followers}</span></p>
                <a 
                    href={data.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
};

export default Github;


export const useinfo = async () => {
    const data = await(
        fetch('https://api.github.com/users/Paradva-Niraj')
    )

    return data.json();
}