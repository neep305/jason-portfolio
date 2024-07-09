import React from "react";

function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Jason Nam</h1>
                <p className="text-xl text-gray-600">Software Engineer</p>
                </header>

                <section className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">소개</h2>
                <p className="text-gray-700">
                    안녕하세요, 저는 N년차 프론트엔드 개발자 OOO입니다. 
                    사용자 중심의 웹 애플리케이션 개발에 열정을 가지고 있으며, 
                    최신 웹 기술을 활용하여 효율적이고 아름다운 UI를 만드는 것을 좋아합니다.
                </p>
                </section>

                <section className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>React, Redux, Next.js</li>
                    <li>JavaScript (ES6+), TypeScript</li>
                    <li>HTML5, CSS3, Sass, Tailwind CSS</li>
                    <li>Git, GitHub</li>
                    <li>RESTful APIs, GraphQL</li>
                </ul>
                </section>

                <section className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">프로젝트</h2>
                <div className="space-y-4">
                    <div>
                    <h3 className="text-xl font-medium">온라인 쇼핑몰</h3>
                    <p className="text-gray-700">React와 Redux를 사용한 반응형 웹 애플리케이션</p>
                    </div>
                    <div>
                    <h3 className="text-xl font-medium">날씨 앱</h3>
                    <p className="text-gray-700">Next.js와 외부 API를 활용한 실시간 날씨 정보 제공 앱</p>
                    </div>
                </div>
                </section>

                <footer className="text-center">
                
                <p className="text-gray-500">&copy; 2024 Jason Nam. All rights reserved.</p>
                </footer>
            </div>
            </div>
    )
}

export default Home