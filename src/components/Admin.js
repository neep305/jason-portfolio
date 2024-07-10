import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Logout error', error);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">관리자 대시보드</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                <p>환영합니다, {user.email}</p>
                                <p>이곳에서 포트폴리오 웹사이트를 관리할 수 있습니다.</p>
                            </div>
                            <div className="pt-6 text-base leading-6 text-gray-400 font-bold sm:text-lg sm:leading-7">
                                <p>관리 기능:</p>
                                <ul className="list-disc space-y-2 ml-4 mt-2 mb-2">
                                    <li>프로젝트 추가/수정/삭제</li>
                                    <li>기술 스택 업데이트</li>
                                    <li>개인정보수정</li>
                                </ul>
                            </div>
                            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin