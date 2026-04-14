import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                
                {/* Big 404 */}
                <h1 className="text-9xl font-extrabold text-gray-800 drop-shadow-lg">
                    404
                </h1>

                {/* Subtitle */}
                <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                    Oops! Page not found
                </p>

                {/* Description */}
                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link className="px-6 py-3 bg-[#244D3F] text-white rounded-xl shadow-md hover:scale-105 hover:bg-[#1e3f33] transition-all duration-300">
                        Go Home
                    </Link>
                </div>

                {/* Extra decoration */}
                <div className="mt-10">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-2xl opacity-30"></div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;