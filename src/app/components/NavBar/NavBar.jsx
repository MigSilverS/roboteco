import Botao from "../Botao/Botao";


// const IconUser = (
//     <svg xmlns="http://www.w3.org/2000/svg" height={18} width={22} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//     </svg>

// );

const logo = (
    <svg width="60" height="60" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2_347)">
            <rect x="8" y="6" width="40" height="40" rx="20" fill="#002B49" shapeRendering="crispEdges" />
            <path d="M20.6667 29.2083C19.9028 29.2083 19.2535 28.941 18.7188 28.4063C18.184 27.8715 17.9167 27.2222 17.9167 26.4583C17.9167 25.6944 18.184 25.0451 18.7188 24.5104C19.2535 23.9757 19.9028 23.7083 20.6667 23.7083V21.875C20.6667 21.3708 20.8462 20.9392 21.2052 20.5802C21.5642 20.2212 21.9958 20.0417 22.5 20.0417H25.25C25.25 19.2778 25.5174 18.6285 26.0521 18.0938C26.5868 17.559 27.2361 17.2917 28 17.2917C28.7639 17.2917 29.4132 17.559 29.9479 18.0938C30.4826 18.6285 30.75 19.2778 30.75 20.0417H33.5C34.0042 20.0417 34.4358 20.2212 34.7948 20.5802C35.1538 20.9392 35.3333 21.3708 35.3333 21.875V23.7083C36.0972 23.7083 36.7465 23.9757 37.2813 24.5104C37.816 25.0451 38.0833 25.6944 38.0833 26.4583C38.0833 27.2222 37.816 27.8715 37.2813 28.4063C36.7465 28.941 36.0972 29.2083 35.3333 29.2083V32.875C35.3333 33.3792 35.1538 33.8108 34.7948 34.1698C34.4358 34.5288 34.0042 34.7083 33.5 34.7083H22.5C21.9958 34.7083 21.5642 34.5288 21.2052 34.1698C20.8462 33.8108 20.6667 33.3792 20.6667 32.875V29.2083ZM25.25 27.375C25.6319 27.375 25.9566 27.2413 26.224 26.974C26.4913 26.7066 26.625 26.3819 26.625 26C26.625 25.6181 26.4913 25.2934 26.224 25.026C25.9566 24.7587 25.6319 24.625 25.25 24.625C24.8681 24.625 24.5434 24.7587 24.276 25.026C24.0087 25.2934 23.875 25.6181 23.875 26C23.875 26.3819 24.0087 26.7066 24.276 26.974C24.5434 27.2413 24.8681 27.375 25.25 27.375ZM30.75 27.375C31.1319 27.375 31.4566 27.2413 31.724 26.974C31.9913 26.7066 32.125 26.3819 32.125 26C32.125 25.6181 31.9913 25.2934 31.724 25.026C31.4566 24.7587 31.1319 24.625 30.75 24.625C30.3681 24.625 30.0434 24.7587 29.776 25.026C29.5087 25.2934 29.375 25.6181 29.375 26C29.375 26.3819 29.5087 26.7066 29.776 26.974C30.0434 27.2413 30.3681 27.375 30.75 27.375ZM24.3333 31.0417H31.6667V29.2083H24.3333V31.0417ZM22.5 32.875H33.5V21.875H22.5V32.875Z" fill="#FFDAD4" />
        </g>
        <defs>
            <filter id="filter0_d_2_347" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0 0.286275 0 0 0 0.12 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_347" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_347" result="shape" />
            </filter>
        </defs>
    </svg>


);


export default function NavBar() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "var(--color-primary)", boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.16)" }}
            >
                <div className="container-fluid">
                    <a
                        className="navbar-brand d-flex align-items-center gap-2"
                        href="#"
                    >
                        {logo}
                        <h2>
                            Robot<span style={{ color: "var(--red)" }}>eco.</span>
                        </h2>
                    </a>
                    <ul className="navbar-nav mx-auto justify-content-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Início</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Cursos & Aulas</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Nossa Equipe</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Para Escolas</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-3">
                        <Botao texto="Login" classe="btn-light" style={{ border: "1px solid #a8a8a8ff" }} />
                        <Botao texto="Fazer matrícula" classe="btn-danger"/>
                        {/* <Botao
                            icon={IconUser}
                            classe="rounded-circle p-1"
                            style={{ backgroundColor: "var(--blue) ", color: "var(--color-primary)" }}
                            aria-label="Perfil"
                        /> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}