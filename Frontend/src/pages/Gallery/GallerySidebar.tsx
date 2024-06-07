import { NavLink, Outlet } from "react-router-dom";
import "./Gallery.css";
import { Galleryslider } from "../../components";

const GalleryNavs = [
  {
    path: "general-information",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1517_8405)">
          <path d="M16.6249 22.4918H8.37487C7.29037 22.4918 6.01687 21.7568 5.47537 20.8178L1.35037 13.6748C0.799875 12.7208 0.799875 11.2808 1.35037 10.326L5.47612 3.18303C6.01762 2.24403 7.29112 1.50903 8.37562 1.50903H16.6249C17.7094 1.50903 18.9829 2.24403 19.5244 3.18303L23.6494 10.326C24.1999 11.28 24.1999 12.72 23.6494 13.6748L19.5236 20.8178C18.9829 21.7568 17.7086 22.4918 16.6249 22.4918ZM8.37487 3.00828C7.81612 3.00828 7.05337 3.44853 6.77437 3.93228L2.64862 11.0753C2.36962 11.559 2.36962 12.4403 2.64862 12.924L6.77362 20.067C7.05337 20.5515 7.81612 20.991 8.37412 20.991H16.6249C17.1836 20.991 17.9464 20.5508 18.2254 20.067L22.3511 12.924C22.6301 12.4403 22.6301 11.559 22.3511 11.0753L18.2261 3.93228C17.9464 3.44778 17.1836 3.00828 16.6256 3.00828H8.37487ZM12.4999 16.437C10.0526 16.437 8.06212 14.4465 8.06212 12C8.06212 9.55353 10.0526 7.56303 12.4999 7.56303C14.9471 7.56303 16.9376 9.55353 16.9376 12C16.9376 14.4465 14.9471 16.437 12.4999 16.437ZM12.4999 9.06303C10.8799 9.06303 9.56212 10.3808 9.56212 12C9.56212 13.6193 10.8799 14.937 12.4999 14.937C14.1199 14.937 15.4376 13.6193 15.4376 12C15.4376 10.3808 14.1199 9.06303 12.4999 9.06303Z" />
        </g>
        <defs>
          <clipPath id="clip0_1517_8405">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "общая информация",
  },
  {
    path: "layout",
    icon: (
      <svg
        width="29"
        height="24"
        viewBox="0 0 29 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M28.5237 9.25816L25.9595 6.69401C25.7279 6.46235 25.3521 6.46235 25.1204 6.69401L22.84 8.97435C22.8399 8.97451 22.8396 8.97467 22.8395 8.9749C22.8393 8.97514 22.8392 8.9753 22.8389 8.97546L16.9891 14.8252C16.9013 14.9131 16.8432 15.0263 16.8231 15.1489L16.3203 18.216C16.2894 18.4045 16.3513 18.5965 16.4863 18.7316C16.5985 18.8437 16.7499 18.9053 16.906 18.9053C16.9379 18.9053 16.97 18.9028 17.002 18.8975L20.069 18.3948C20.1916 18.3747 20.3048 18.3166 20.3927 18.2288L28.5238 10.0974C28.6351 9.98607 28.6976 9.83518 28.6976 9.67773C28.6976 9.52028 28.6351 9.36948 28.5237 9.25816ZM19.6884 17.2543L17.6251 17.5926L17.9633 15.5293L23.2591 10.2336L24.984 11.9586L19.6884 17.2543ZM25.8234 11.1195L24.0984 9.39448L25.54 7.95282L27.2651 9.67781L25.8234 11.1195Z" />
        <path d="M25.2159 15.2588C24.7828 15.2588 24.4319 15.5244 24.4319 15.8522V22.8132H2.56815V1.18681H24.4319V5.05486C24.4319 5.38266 24.7828 5.64827 25.2159 5.64827C25.649 5.64827 26 5.38266 26 5.05486V0.593405C26 0.265608 25.649 0 25.2159 0H1.78407C1.35095 0 1 0.265608 1 0.593405V23.4066C1 23.7344 1.35095 24 1.78407 24H25.2159C25.649 24 26 23.7344 26 23.4066V15.8522C26 15.5245 25.649 15.2588 25.2159 15.2588Z" />
        <path d="M11.0712 3.33146C10.8394 3.0998 10.4637 3.0998 10.232 3.33146L7.97055 5.59297L7.07554 4.69796C6.84372 4.46629 6.46805 4.46629 6.23631 4.69796C6.00456 4.92978 6.00456 5.30545 6.23631 5.53719L7.5509 6.85178C7.66681 6.96761 7.81872 7.02553 7.97055 7.02553C8.12239 7.02553 8.2743 6.96761 8.39021 6.85178L11.0713 4.1707C11.303 3.93895 11.303 3.56329 11.0712 3.33146Z" />
        <path d="M11.0712 10.3217C10.8394 10.09 10.4637 10.09 10.232 10.3217L7.97055 12.5832L7.07554 11.6881C6.84372 11.4564 6.46805 11.4564 6.23631 11.6881C6.00456 11.9199 6.00456 12.2956 6.23631 12.5273L7.5509 13.8419C7.66681 13.9578 7.81872 14.0157 7.97055 14.0157C8.12239 14.0157 8.2743 13.9578 8.39021 13.8419L11.0713 11.1609C11.303 10.9292 11.303 10.5535 11.0712 10.3217Z" />
        <path d="M10.232 17.312L7.97056 19.5735L7.07554 18.6785C6.84372 18.4468 6.46805 18.4468 6.23631 18.6785C6.00456 18.9103 6.00456 19.2859 6.23631 19.5177L7.5509 20.8323C7.66222 20.9435 7.8131 21.006 7.97056 21.006C8.12801 21.006 8.27881 20.9435 8.39021 20.8322L11.0713 18.1511C11.303 17.9193 11.303 17.5436 11.0713 17.3119C10.8395 17.0803 10.4638 17.0802 10.232 17.312Z" />
      </svg>
    ),
    name: "Компоновка",
  },
  {
    path: "editing",
    icon: (
      <svg
        width="30"
        height="24"
        viewBox="0 0 30 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.15799 0H25.8948C27.6317 0 29.0527 1.42105 29.0527 3.1579V20.8421C29.0527 22.579 27.6317 24 25.8948 24H3.15799C1.42115 24 9.53674e-05 22.579 9.53674e-05 20.8421V3.1579C9.53674e-05 1.42105 1.42115 0 3.15799 0ZM1.26325 12.1263L4.26325 9.12632C4.76852 8.62106 5.52641 8.62106 6.03168 9.12632L13.2633 16.3263L13.2948 16.2947L16.958 12.6316C17.4317 12.1579 18.2527 12.1579 18.7264 12.6316L21.8212 15.7263C22.0738 15.979 22.0738 16.3579 21.8212 16.6105C21.5685 16.8632 21.1896 16.8632 20.9369 16.6105L17.8422 13.5158L14.179 17.179L14.1475 17.2105L16.7054 19.7684C16.958 20.0211 16.958 20.4 16.7054 20.6526C16.579 20.779 16.4212 20.8421 16.2633 20.8421C16.1054 20.8421 15.9475 20.779 15.8212 20.6526L5.14747 10.0105L1.38957 13.7684C1.35799 13.8 1.29483 13.8316 1.26325 13.8632V20.8421C1.26325 21.8842 2.11588 22.7368 3.15799 22.7368H25.8948C26.9369 22.7368 27.7896 21.8842 27.7896 20.8421V3.1579C27.7896 2.11579 26.9369 1.26316 25.8948 1.26316H3.15799C2.11588 1.26316 1.26325 2.11579 1.26325 3.1579V12.1263Z" />
        <path d="M23.3372 17.2422L23.9687 17.8738C24.2214 18.1264 24.2214 18.5054 23.9687 18.758C23.8424 18.8843 23.6845 18.9475 23.5266 18.9475C23.3687 18.9475 23.2108 18.8843 23.0845 18.758L22.4529 18.1264C22.2003 17.8738 22.2003 17.4948 22.4529 17.2422C22.7056 16.9896 23.0845 16.9896 23.3372 17.2422Z" />
        <path d="M22.1058 3.78955C23.8426 3.78955 25.2637 5.2106 25.2637 6.94745C25.2637 8.68429 23.8426 10.1053 22.1058 10.1053C20.3689 10.1053 18.9479 8.68429 18.9479 6.94745C18.9479 5.2106 20.3689 3.78955 22.1058 3.78955ZM22.1058 8.84218C23.1479 8.84218 24.0005 7.98955 24.0005 6.94745C24.0005 5.90534 23.1479 5.05271 22.1058 5.05271C21.0637 5.05271 20.211 5.90534 20.211 6.94745C20.211 7.98955 21.0637 8.84218 22.1058 8.84218Z" />
      </svg>
    ),
    name: "редактирование",
  },
  {
    path: "tamplate",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.822642 0.105721C0.505479 0.211442 0.14867 0.594681 0.0693794 0.898629C-0.0231265 1.24222 -0.0231265 29.9587 0.0693794 30.3023C0.161885 30.6195 0.571554 31.0291 0.888717 31.1216C1.23231 31.2141 29.9488 31.2141 30.3056 31.1216C30.6228 31.0291 31.0324 30.6195 31.1249 30.3023C31.2174 29.9587 31.2174 1.24222 31.1249 0.885414C31.0324 0.568251 30.6228 0.158582 30.3056 0.0660757C30.1338 0.0132151 26.0107 0 15.5707 0C3.21458 0.0264303 1.02087 0.0396454 0.822642 0.105721ZM29.8827 1.32151C29.9356 1.37437 29.9488 1.92941 29.9356 3.18485L29.9224 4.96889H15.5839H1.24553L1.2191 3.18485C1.20588 1.91619 1.2191 1.37437 1.27196 1.32151C1.37768 1.18936 29.777 1.18936 29.8827 1.32151ZM29.9356 18.0387C29.9356 26.6946 29.9356 29.8398 29.8827 29.8926C29.7902 30.0116 1.39089 30.0248 1.28517 29.9058C1.23231 29.853 1.20588 27.1307 1.20588 18.0783C1.20588 11.6029 1.2191 6.2904 1.24553 6.27719C1.25874 6.25076 7.72094 6.23754 15.5972 6.25076L29.9091 6.26397L29.9356 18.0387Z" />
        <path d="M3.53272 8.16708C3.45342 8.18029 3.32127 8.28602 3.2552 8.37852C3.13626 8.55032 3.12305 8.61639 3.12305 10.6515V12.7395L3.29484 12.8981L3.45343 13.0699H15.5849H27.7032L27.8618 12.8981L28.0336 12.7395L28.0468 10.7308C28.06 9.05249 28.0468 8.69569 27.9675 8.51067C27.7825 8.07457 28.7472 8.11422 15.5585 8.11422C9.03021 8.12743 3.61201 8.14065 3.53272 8.16708ZM26.7913 10.6383V11.8805H15.5849H4.37848V10.6383V9.39609H15.5849H26.7913V10.6383Z" />
        <path d="M3.88861 15.0918C3.76967 15.1447 3.58466 15.2636 3.47894 15.3826C3.0957 15.7658 3.0957 15.5808 3.0957 21.8315C3.0957 25.9414 3.10892 27.5669 3.17499 27.7784C3.25428 28.1219 3.65074 28.5448 3.99433 28.6373C4.32471 28.7298 13.7603 28.7298 14.0907 28.6373C14.4211 28.5448 14.8175 28.1219 14.91 27.7784C14.9629 27.5669 14.9893 25.9414 14.9893 21.8315C14.9893 15.5808 15.0025 15.7658 14.6061 15.3826C14.1964 14.9861 14.4475 14.9993 9.0293 14.9993C4.77403 14.9993 4.07362 15.0125 3.88861 15.0918ZM13.681 21.8315L13.6678 27.448L9.0293 27.4612L4.37757 27.4744V21.8448V16.2151H9.04251H13.7075L13.681 21.8315Z" />
        <path d="M16.9843 15.0918C16.8654 15.1447 16.6804 15.2636 16.5746 15.3826C16.1914 15.7658 16.1914 15.5808 16.1914 21.8315C16.1914 25.9414 16.2046 27.5669 16.2707 27.7784C16.35 28.1219 16.7464 28.5448 17.09 28.6373C17.4204 28.7298 26.856 28.7298 27.1864 28.6373C27.5168 28.5448 27.9132 28.1219 28.0057 27.7784C28.0586 27.5669 28.085 25.9414 28.085 21.8315C28.085 15.5808 28.0982 15.7658 27.7018 15.3826C27.2921 14.9861 27.5432 14.9993 22.125 14.9993C17.8565 14.9993 17.1693 15.0125 16.9843 15.0918ZM26.7899 21.8448V27.4744L22.1514 27.4612L17.4997 27.448L17.4865 21.8315L17.4733 16.2151H22.1382H26.8032V21.8448H26.7899Z" />
      </svg>
    ),
    name: "НОВЫЙ СЛАЙД шаблоны",
  },
];

const GallerySidebar = () => {
  return (
    <div className="flex gallery">
      <div className="w-[100px] gap-10 pb-12 flex flex-col  py-5 px-2 border-0 border-r border-lightSecondary">
        {GalleryNavs.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className="w-full cursor-pointer text-[#666666] fill-[#666666]  gap-[6px] flex flex-col items-center justify-center"
          >
            {item.icon}
            <p className="text-[9px] leading-tight text-center uppercase font-bold ">
              {item.name}
            </p>
          </NavLink>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="h-full w-full col-span-4">
          <Outlet />
        </div>
        <div className="col-span-8 pe-4">
          <Galleryslider />
        </div>
      </div>
    </div>
  );
};

export default GallerySidebar;
