export const INIT_URL = process.env.NEXT_PUBLIC_INIT_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const IMG_URI = process.env.NEXT_PUBLIC_IMG_URI;

export const MENUS = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Projects", link: "/projects" }, // 100% Done...
  { name: "Verticles", link: "/verticles" },
  // { name: "Gallery", link: "/gallery" },
  // { name: "Gallery", link: "/gallery" },
];

export const TEAMMEMBERS = [
  {
    img: "/images/team/1.svg",
    name: "Shaikh. Hamyar Al Ismaily",
    desigination: "Director & Chairman Overseas Group",
    description:
      "A professional engineer, industrialist and possess more than four decades of experience in Project development, management, Consultancy, startup business and also served the nation through various ministries. He is our patron, mentor, Director as well the Chairman of Overseas group which operates in various niche segments.",
  },
  {
    img: "/images/team/2.svg",
    name: "Mr. Khalfan Al Riyami",
    desigination: "Director & Chairman Overseas Oil & Gas",
    description:
      "An engineer and a professional with more than two decades of experience in the Oil and Gas Industry is Our Director and chairman. Whose leadership and set values guide OOG's business and people.",
  },
  {
    img: "/images/team/3.svg",
    name: "Mr. Simon Apana Agey",
    desigination: "Director of Strategy",
    description:
      "An accomplished strategic leader with extensive experience in driving organizational growth and development. As a Director of Strategy, he leverages his insights to shape and implement effective strategies that align with the broader goals of the organization. With a background in multifamily private investment, Simon has spent over a decade cultivating expertise in investment strategy, business development, and operational efficiency. His strategic vision and analytical skills enable him to identify opportunities for innovation and improvement within diverse markets.",
  },
  {
    img: "/images/team/4.svg",
    name: "Mr. Nitin Narang",
    desigination: "Global Vice Chairman and Board Member",
    description:
      "Nitin Narang, an accomplished entrepreneur and investor, serves on the board of our company. With a rich history of building successful teams and organizations, Nitin brings invaluable expertise and visionary leadership. His entrepreneurial career is distinguished by notable successes in crafting robust business strategies and driving innovation. Additionally, Nitin's extensive experience in international affairs equips him with unique insights that are critical in navigating the global energy landscape. His strategic acumen and commitment to excellence are pivotal in guiding our company towards sustained growth and market leadership.",
  },
  {
    img: "/images/team/5.svg",
    name: "Dr. Jayakrishnan Nampoothiri",
    desigination: "Executive Director & Strategic advisor",
    description:
      "An engineer, Corporate leader turned Entrepreneur with more than twenty-five years of experience in the Power and Oil and Gas industry with corporate leadership roles is our Executive Director and strategic advisor",
  },
  {
    img: "/images/team/6.svg",
    name: "Mr. Pradeep Khimji",
    desigination: "Director & Corporate advisor",
    description:
      "A Successful Business man and has been actively involved in the sector for over two decades. He is our Director and Corporate advisor.",
  },
  {
    img: "/images/team/7.svg",
    name: "Mr. Ronny Rianto",
    desigination: "Director & President of Far East",
    description:
      "A professional with more than four decades of industrial experience in multiple industries and a strategic visionary is our Director and President overseeing the Far East region.",
  },
  {
    img: "/images/team/8.svg",
    name: "Dr. Hwal WonSur",
    desigination: "Technical Advisor",
    description:
      "A chemical engineer with PhD from Oxford university, masters from London Imperial college and possess more than Forty-five years of experience in the Refinery and Petrochemical industry is our technical advisor. Dr. Sur earned various accolades for his technical excellence in the industry and has served at leadership position in some of the world’s leading organizations in the petrochemical industry",
  },
];

export const IMG_PATH =
  "M 72.3521 49.9756 C 70.37 49.7382 67.0596 49.0176 65.0068 48.5845 C 54.026 46.2395 51.4367 46.2395 40.456 48.5845 C 29.1383 51.0085 26.2857 51.0085 14.9681 48.5845 C 10.9499 47.5723 6.83996 46.9809 2.69646 46.8227 C 2.06769 46.8227 1.55969 46.3145 1.55969 45.6897 C 1.55969 45.0608 2.06769 44.5527 2.69646 44.5527 C 3.30857 44.5527 3.92064 44.5693 4.52868 44.6068 L 0.102372 28.3707 C -0.0308772 28.0208 0.0149267 27.6293 0.227294 27.321 C 0.443818 27.0128 0.793602 26.8337 1.16836 26.8337 H 6.10688 V 17.4913 V 17.4955 C 6.10688 16.8666 6.61489 16.3584 7.24365 16.3584 H 9.66707 L 9.66291 9.72749 C 9.66707 9.10272 10.1751 8.59457 10.7997 8.59457 H 15.7799 V 3.58394 C 15.7799 2.05949 17.0124 0.82666 18.5323 0.82666 H 20.6892 C 22.2132 0.82666 23.4416 2.05949 23.4457 3.58394 V 8.59457 H 28.4259 C 29.0505 8.59457 29.5585 9.10272 29.5585 9.72749 V 16.3584 H 31.982 V 16.3543 C 32.6066 16.3543 33.1146 16.8624 33.1146 17.4913 V 26.8337 H 41.4051 V 19.174 C 41.4051 18.87 41.5259 18.5826 41.7382 18.3702 C 41.9506 18.1536 42.2421 18.0369 42.5419 18.0369 H 47.3097 V 7.36141 C 47.3097 6.73664 47.8177 6.22849 48.4424 6.22849 H 72.0604 C 72.3644 6.22849 72.6517 6.34512 72.8641 6.5617 C 73.0764 6.77413 73.1972 7.06152 73.1972 7.36141 V 18.0369 H 77.9651 H 77.9609 C 78.2649 18.0369 78.5522 18.1536 78.7646 18.366 C 78.9811 18.5826 79.0977 18.87 79.0977 19.174 V 23.8014 H 84.1736 C 84.5609 23.8014 84.9273 24.0014 85.1313 24.3346 C 85.3395 24.6678 85.3604 25.0801 85.1938 25.43 L 74.2045 47.9219 C 75.3829 48.0552 76.5655 48.1219 77.7522 48.126 C 78.3768 48.126 78.8848 48.6342 78.8848 49.259 C 78.8848 49.8879 78.3768 50.396 77.7522 50.396 C 75.945 50.3835 74.1385 50.2463 72.3521 49.9756 Z M 71.8357 47.6056 L 82.3541 26.0722 H 60.8424 C 57.4029 26.0722 55.4916 29.1045 51.3026 29.1045 L 2.64233 29.1086 L 6.92707 44.8191 C 13.806 45.6272 20.9395 48.1263 27.7139 48.1263 C 35.9087 48.1263 44.2538 44.5526 52.7316 44.5526 C 59.1983 44.5526 65.4899 46.606 71.8357 47.6056 Z M 65.0234 11.1732 C 65.0109 10.8691 65.1275 10.5692 65.3399 10.3485 C 65.5564 10.1277 65.8479 10.0028 66.156 10.0028 C 66.4642 10.0028 66.7556 10.1277 66.9722 10.3485 C 67.1845 10.5692 67.3011 10.8691 67.2928 11.1732 V 15.3591 C 67.3011 15.6632 67.1845 15.9631 66.9722 16.1838 C 66.7556 16.4046 66.4642 16.5295 66.156 16.5295 C 65.8479 16.5295 65.5564 16.4046 65.3399 16.1838 C 65.1275 15.9631 65.0109 15.6632 65.0234 15.3591 V 11.1732 Z M 53.2186 11.1732 H 53.2145 C 53.2145 10.5484 53.7225 10.0402 54.3512 10.0402 C 54.9759 10.0402 55.4839 10.5484 55.4839 11.1732 V 15.3591 C 55.4839 15.9839 54.9759 16.4921 54.3512 16.4921 C 53.7225 16.4921 53.2145 15.9839 53.2145 15.3591 L 53.2186 11.1732 Z M 72.0696 20.3073 H 67.2976 V 23.8018 H 76.8332 V 20.3073 H 72.0696 Z M 66.1608 18.0373 H 70.9328 L 70.9287 8.49917 H 61.3931 V 18.0373 H 66.1608 Z M 65.0241 20.3073 H 55.4843 V 25.4846 C 57.0916 24.4558 58.9404 23.8769 60.8433 23.8019 H 65.0199 L 65.0241 20.3073 Z M 54.3514 18.0373 H 59.1234 L 59.1192 8.49917 H 49.5795 V 18.0373 H 54.3514 Z M 43.6787 26.8341 H 51.3071 C 51.9567 26.8299 52.6021 26.7216 53.2184 26.5175 V 20.3073 H 43.6787 V 26.8341 Z M 65.0113 28.7417 C 66.8643 28.7417 68.5299 29.858 69.2377 31.5657 C 69.9456 33.2776 69.5542 35.2435 68.2467 36.5555 C 66.9391 37.8634 64.9738 38.2549 63.2623 37.5468 C 61.555 36.8387 60.4391 35.1685 60.4391 33.3192 C 60.4433 30.7952 62.4878 28.7501 65.0113 28.7417 Z M 66.6435 31.6906 C 65.9856 31.0325 64.9945 30.8326 64.1326 31.1908 C 63.2706 31.549 62.7085 32.3904 62.7085 33.3192 C 62.7085 34.2522 63.2707 35.0936 64.1326 35.4517 C 64.9945 35.8099 65.9856 35.61 66.6435 34.9519 C 67.5429 34.0523 67.5429 32.5903 66.6435 31.6906 Z M 18.045 8.59513 H 21.1722 V 3.58449 C 21.1722 3.31793 20.9557 3.09718 20.6892 3.09718 H 18.5323 C 18.2616 3.09718 18.0492 3.31793 18.0492 3.58449 L 18.045 8.59513 Z M 11.9281 16.3589 H 27.289 V 10.8651 H 11.9323 L 11.9281 16.3589 Z M 8.37202 26.8342 H 30.8452 V 18.6289 H 8.37202 V 26.8342 Z";

export const FILL_PATH =
  "M 71.8357 47.6056 L 82.3541 26.0722 H 60.8424 C 57.4029 26.0722 55.4916 29.1045 51.3026 29.1045 L 2.64233 29.1086 L 6.92707 44.8191 C 13.806 45.6272 20.9395 48.1263 27.7139 48.1263 C 35.9087 48.1263 44.2538 44.5526 52.7316 44.5526 C 59.1983 44.5526 65.4899 46.606 71.8357 47.6056 Z M 65.0234 11.1732 C 65.0109 10.8691 65.1275 10.5692 65.3399 10.3485 C 65.5564 10.1277 65.8479 10.0028 66.156 10.0028 C 66.4641 10.0028 66.7556 10.1277 66.9722 10.3485 C 67.1845 10.5692 67.3011 10.8691 67.2928 11.1732 V 15.3591 C 67.3011 15.6632 67.1845 15.9631 66.9722 16.1838 C 66.7556 16.4046 66.4641 16.5295 66.156 16.5295 C 65.8479 16.5295 65.5564 16.4046 65.3399 16.1838 C 65.1275 15.9631 65.0109 15.6632 65.0234 15.3591 V 11.1732 Z M 53.2186 11.1732 H 53.2145 C 53.2145 10.5484 53.7225 10.0402 54.3512 10.0402 C 54.9758 10.0402 55.4839 10.5484 55.4839 11.1732 V 15.3591 C 55.4839 15.9839 54.9758 16.4921 54.3512 16.4921 C 53.7225 16.4921 53.2145 15.9839 53.2145 15.3591 L 53.2186 11.1732 Z M 72.0696 20.3073 H 67.2976 V 23.8018 H 76.8332 V 20.3073 H 72.0696 Z M 66.1608 18.0373 H 70.9328 L 70.9287 8.49917 H 61.3931 V 18.0373 H 66.1608 Z M 65.024 20.3073 H 55.4843 V 25.4846 C 57.0916 24.4558 58.9404 23.8769 60.8433 23.8019 H 65.0199 L 65.024 20.3073 Z M 54.3514 18.0373 H 59.1234 L 59.1192 8.49917 H 49.5794 V 18.0373 H 54.3514 Z M 43.6787 26.8341 H 51.3071 C 51.9567 26.8299 52.6021 26.7216 53.2184 26.5175 V 20.3073 H 43.6787 V 26.8341 Z M 65.0113 28.7417 C 66.8643 28.7417 68.5299 29.858 69.2377 31.5657 C 69.9456 33.2776 69.5542 35.2435 68.2467 36.5555 C 66.9391 37.8634 64.9737 38.2549 63.2623 37.5468 C 61.555 36.8387 60.4391 35.1685 60.4391 33.3192 C 60.4433 30.7952 62.4878 28.7501 65.0113 28.7417 Z M 66.6435 31.6906 C 65.9856 31.0325 64.9945 30.8326 64.1326 31.1908 C 63.2706 31.549 62.7085 32.3904 62.7085 33.3192 C 62.7085 34.2522 63.2706 35.0936 64.1326 35.4517 C 64.9945 35.8099 65.9856 35.61 66.6435 34.9519 C 67.5429 34.0523 67.5429 32.5903 66.6435 31.6906 Z M 18.045 8.59513 H 21.1722 V 3.58449 C 21.1722 3.31793 20.9557 3.09718 20.6892 3.09718 H 18.5323 C 18.2616 3.09718 18.0492 3.31793 18.0492 3.58449 L 18.045 8.59513 Z M 11.9281 16.3589 H 27.289 V 10.8651 H 11.9323 L 11.9281 16.3589 Z M 8.37202 26.8342 H 30.8452 V 18.6289 H 8.37202 V 26.8342 Z";

export const LINE_PATH =
  "M 0.49999 2.1626 C 29.8504 2.1626 58.9135 7.94361 86.0298 19.1755 C 113.146 30.4075 137.784 46.8703 158.538 67.6242 C 179.292 88.3781 195.755 113.017 206.987 140.133 C 218.219 167.249 224 196.312 224 225.663";

export const IMAGES_TOP_CONT = [
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
  "/images/hs/img1.png",
  "/images/hs/img2.png",
  "/images/hs/img3.png",
  "/images/hs/img4.png",
];
