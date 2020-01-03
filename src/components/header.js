import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const menu = [{
  label: "workshops",
  slug: "/workshops"
},{
  label: "videos",
  slug: "/videos"
},{
  label: "book",
  slug: "/book"
},{
  label: "about me",
  slug: "/about-me"
}]

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link
          to="/">
          

            <svg alt={siteTitle} width="190px" height="47px" viewBox="0 0 190 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="UI-360---02" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Francesco-Strazzullo---Single-page-360" transform="translate(-24.000000, -36.000000)" fillRule="nonzero">
                      <g id="HEADER" transform="translate(24.000000, 36.000000)">
                          <g id="naming">
                              <g id="Francesco-STRAZZullo">
                                  <path d="M3.08,14 L3.08,7.7 L8.64,7.7 L8.64,6.36 L3.08,6.36 L3.08,1.36 L11.56,1.36 L11.56,2.13162821e-14 L1.54,2.13162821e-14 L1.54,14 L3.08,14 Z M14.88,14 L14.88,7.14 C15.1333333,6.47333333 15.4933333,5.96333333 15.96,5.61 C16.4266667,5.25666667 16.9666667,5.08 17.58,5.08 C17.7533333,5.08 17.9266667,5.09666667 18.1,5.13 C18.2733333,5.16333333 18.4466667,5.20666667 18.62,5.26 L18.62,5.26 L18.62,3.9 C18.4733333,3.84666667 18.3266667,3.81 18.18,3.79 C18.0333333,3.77 17.8666667,3.76 17.68,3.76 C17.0666667,3.76 16.52,3.90333333 16.04,4.19 C15.56,4.47666667 15.1733333,4.88 14.88,5.4 L14.88,5.4 L14.88,3.98 L13.4,3.98 L13.4,14 L14.88,14 Z M23.48,14.18 C24.1066667,14.18 24.69,14.0833333 25.23,13.89 C25.77,13.6966667 26.2666667,13.4066667 26.72,13.02 L26.72,13.02 L26.72,14 L28.16,14 L28.16,7.26 C28.16,6.14 27.8166667,5.28 27.13,4.68 C26.4433333,4.08 25.4666667,3.78 24.2,3.78 C23.5866667,3.78 22.9733333,3.86 22.36,4.02 C21.7466667,4.18 21.08,4.43333333 20.36,4.78 L20.36,4.78 L20.92,5.92 C21.52,5.61333333 22.07,5.39 22.57,5.25 C23.07,5.11 23.5666667,5.04 24.06,5.04 C24.9266667,5.04 25.5866667,5.24333333 26.04,5.65 C26.4933333,6.05666667 26.72,6.66 26.72,7.46 L26.72,7.46 L26.72,8.78 C26.2933333,8.56666667 25.83,8.4 25.33,8.28 C24.83,8.16 24.3133333,8.1 23.78,8.1 C22.5533333,8.1 21.58,8.37666667 20.86,8.93 C20.14,9.48333333 19.78,10.2266667 19.78,11.16 C19.78,12.0533333 20.1233333,12.78 20.81,13.34 C21.4966667,13.9 22.3866667,14.18 23.48,14.18 Z M23.74,13.02 C22.9933333,13.02 22.3833333,12.8433333 21.91,12.49 C21.4366667,12.1366667 21.2,11.68 21.2,11.12 C21.2,10.5333333 21.4366667,10.0633333 21.91,9.71 C22.3833333,9.35666667 23.02,9.18 23.82,9.18 C24.3933333,9.18 24.9166667,9.24333333 25.39,9.37 C25.8633333,9.49666667 26.3066667,9.7 26.72,9.98 L26.72,9.98 L26.72,11.86 C26.32,12.26 25.8733333,12.5533333 25.38,12.74 C24.8866667,12.9266667 24.34,13.02 23.74,13.02 Z M32.12,14 L32.12,6.62 C32.4133333,6.12666667 32.7966667,5.74666667 33.27,5.48 C33.7433333,5.21333333 34.28,5.08 34.88,5.08 C35.7333333,5.08 36.4133333,5.34 36.92,5.86 C37.4266667,6.38 37.68,7.08 37.68,7.96 L37.68,7.96 L37.68,14 L39.14,14 L39.14,7.66 C39.14,6.51333333 38.78,5.58 38.06,4.86 C37.34,4.14 36.4133333,3.78 35.28,3.78 C34.6266667,3.78 34.0333333,3.89666667 33.5,4.13 C32.9666667,4.36333333 32.5066667,4.70666667 32.12,5.16 L32.12,5.16 L32.12,3.98 L30.64,3.98 L30.64,14 L32.12,14 Z M46.26,14.18 C46.98,14.18 47.6733333,14.04 48.34,13.76 C49.0066667,13.48 49.6066667,13.0866667 50.14,12.58 L50.14,12.58 L49.22,11.58 C48.7933333,11.9933333 48.3333333,12.3066667 47.84,12.52 C47.3466667,12.7333333 46.8333333,12.84 46.3,12.84 C45.7933333,12.84 45.3133333,12.74 44.86,12.54 C44.4066667,12.34 44.0166667,12.07 43.69,11.73 C43.3633333,11.39 43.1033333,10.9833333 42.91,10.51 C42.7166667,10.0366667 42.62,9.52666667 42.62,8.98 C42.62,8.44666667 42.7133333,7.94666667 42.9,7.48 C43.0866667,7.01333333 43.3433333,6.60666667 43.67,6.26 C43.9966667,5.91333333 44.3866667,5.64 44.84,5.44 C45.2933333,5.24 45.7733333,5.14 46.28,5.14 C46.8133333,5.14 47.34,5.25333333 47.86,5.48 C48.38,5.70666667 48.84,6.02666667 49.24,6.44 L49.24,6.44 L50.18,5.36 C49.66,4.86666667 49.0566667,4.48 48.37,4.2 C47.6833333,3.92 46.98,3.78 46.26,3.78 C45.5533333,3.78 44.8866667,3.91666667 44.26,4.19 C43.6333333,4.46333333 43.0933333,4.83333333 42.64,5.3 C42.1866667,5.76666667 41.8266667,6.31666667 41.56,6.95 C41.2933333,7.58333333 41.16,8.26 41.16,8.98 C41.16,9.7 41.2933333,10.38 41.56,11.02 C41.8266667,11.66 42.1866667,12.2133333 42.64,12.68 C43.0933333,13.1466667 43.6333333,13.5133333 44.26,13.78 C44.8866667,14.0466667 45.5533333,14.18 46.26,14.18 Z M56.58,14.18 C57.3,14.18 57.9633333,14.0766667 58.57,13.87 C59.1766667,13.6633333 59.76,13.3533333 60.32,12.94 L60.32,12.94 L59.4,11.96 C59.0666667,12.2533333 58.6533333,12.48 58.16,12.64 C57.6666667,12.8 57.16,12.88 56.64,12.88 C55.6533333,12.88 54.8066667,12.5533333 54.1,11.9 C53.3933333,11.2466667 52.9866667,10.4266667 52.88,9.44 L52.88,9.44 L61.1,9.44 L61.1,8.98 C61.1,8.26 60.9766667,7.58666667 60.73,6.96 C60.4833333,6.33333333 60.15,5.78666667 59.73,5.32 C59.31,4.85333333 58.81,4.48666667 58.23,4.22 C57.65,3.95333333 57.0266667,3.82 56.36,3.82 C55.68,3.82 55.0366667,3.95333333 54.43,4.22 C53.8233333,4.48666667 53.3,4.85333333 52.86,5.32 C52.42,5.78666667 52.07,6.33333333 51.81,6.96 C51.55,7.58666667 51.42,8.26 51.42,8.98 C51.42,9.71333333 51.5533333,10.3966667 51.82,11.03 C52.0866667,11.6633333 52.45,12.2133333 52.91,12.68 C53.37,13.1466667 53.9166667,13.5133333 54.55,13.78 C55.1833333,14.0466667 55.86,14.18 56.58,14.18 Z M59.62,8.26 L52.92,8.26 C53.0533333,7.34 53.4366667,6.58666667 54.07,6 C54.7033333,5.41333333 55.4533333,5.12 56.32,5.12 C57.1466667,5.12 57.87,5.42333333 58.49,6.03 C59.11,6.63666667 59.4866667,7.38 59.62,8.26 L59.62,8.26 Z M66.36,14.18 C66.9333333,14.18 67.4666667,14.1033333 67.96,13.95 C68.4533333,13.7966667 68.8833333,13.5833333 69.25,13.31 C69.6166667,13.0366667 69.9033333,12.71 70.11,12.33 C70.3166667,11.95 70.42,11.5466667 70.42,11.12 C70.42,10.36 70.17,9.75 69.67,9.29 C69.17,8.83 68.42,8.53333333 67.42,8.4 L67.42,8.4 L65.68,8.16 C65.0266667,8.06666667 64.5533333,7.90333333 64.26,7.67 C63.9666667,7.43666667 63.82,7.10666667 63.82,6.68 C63.82,6.18666667 64.0366667,5.78666667 64.47,5.48 C64.9033333,5.17333333 65.46,5.02 66.14,5.02 C66.6866667,5.02 67.2233333,5.11333333 67.75,5.3 C68.2766667,5.48666667 68.82,5.76666667 69.38,6.14 L69.38,6.14 L70.16,5.14 C69.5466667,4.68666667 68.9166667,4.35333333 68.27,4.14 C67.6233333,3.92666667 66.94,3.82 66.22,3.82 C65.1266667,3.82 64.2266667,4.09666667 63.52,4.65 C62.8133333,5.20333333 62.46,5.9 62.46,6.74 C62.46,7.5 62.7033333,8.10333333 63.19,8.55 C63.6766667,8.99666667 64.42,9.29333333 65.42,9.44 L65.42,9.44 L67.16,9.68 C67.8,9.77333333 68.27,9.94333333 68.57,10.19 C68.87,10.4366667 69.02,10.7733333 69.02,11.2 C69.02,11.7333333 68.7666667,12.1666667 68.26,12.5 C67.7533333,12.8333333 67.1,13 66.3,13 C65.7133333,13 65.1366667,12.8833333 64.57,12.65 C64.0033333,12.4166667 63.4933333,12.0866667 63.04,11.66 L63.04,11.66 L62.14,12.62 C62.6733333,13.1133333 63.3033333,13.4966667 64.03,13.77 C64.7566667,14.0433333 65.5333333,14.18 66.36,14.18 Z M76.72,14.18 C77.44,14.18 78.1333333,14.04 78.8,13.76 C79.4666667,13.48 80.0666667,13.0866667 80.6,12.58 L80.6,12.58 L79.68,11.58 C79.2533333,11.9933333 78.7933333,12.3066667 78.3,12.52 C77.8066667,12.7333333 77.2933333,12.84 76.76,12.84 C76.2533333,12.84 75.7733333,12.74 75.32,12.54 C74.8666667,12.34 74.4766667,12.07 74.15,11.73 C73.8233333,11.39 73.5633333,10.9833333 73.37,10.51 C73.1766667,10.0366667 73.08,9.52666667 73.08,8.98 C73.08,8.44666667 73.1733333,7.94666667 73.36,7.48 C73.5466667,7.01333333 73.8033333,6.60666667 74.13,6.26 C74.4566667,5.91333333 74.8466667,5.64 75.3,5.44 C75.7533333,5.24 76.2333333,5.14 76.74,5.14 C77.2733333,5.14 77.8,5.25333333 78.32,5.48 C78.84,5.70666667 79.3,6.02666667 79.7,6.44 L79.7,6.44 L80.64,5.36 C80.12,4.86666667 79.5166667,4.48 78.83,4.2 C78.1433333,3.92 77.44,3.78 76.72,3.78 C76.0133333,3.78 75.3466667,3.91666667 74.72,4.19 C74.0933333,4.46333333 73.5533333,4.83333333 73.1,5.3 C72.6466667,5.76666667 72.2866667,6.31666667 72.02,6.95 C71.7533333,7.58333333 71.62,8.26 71.62,8.98 C71.62,9.7 71.7533333,10.38 72.02,11.02 C72.2866667,11.66 72.6466667,12.2133333 73.1,12.68 C73.5533333,13.1466667 74.0933333,13.5133333 74.72,13.78 C75.3466667,14.0466667 76.0133333,14.18 76.72,14.18 Z M87,14.2 C87.7066667,14.2 88.37,14.0666667 88.99,13.8 C89.61,13.5333333 90.15,13.1666667 90.61,12.7 C91.07,12.2333333 91.4333333,11.68 91.7,11.04 C91.9666667,10.4 92.1,9.71333333 92.1,8.98 C92.1,8.26 91.9666667,7.58 91.7,6.94 C91.4333333,6.3 91.07,5.74666667 90.61,5.28 C90.15,4.81333333 89.61,4.44666667 88.99,4.18 C88.37,3.91333333 87.7066667,3.78 87,3.78 C86.2933333,3.78 85.6266667,3.91333333 85,4.18 C84.3733333,4.44666667 83.83,4.81333333 83.37,5.28 C82.91,5.74666667 82.5466667,6.3 82.28,6.94 C82.0133333,7.58 81.88,8.26 81.88,8.98 C81.88,9.71333333 82.0133333,10.4 82.28,11.04 C82.5466667,11.68 82.91,12.2333333 83.37,12.7 C83.83,13.1666667 84.3733333,13.5333333 85,13.8 C85.6266667,14.0666667 86.2933333,14.2 87,14.2 Z M87,12.88 C86.4933333,12.88 86.0133333,12.78 85.56,12.58 C85.1066667,12.38 84.7166667,12.1033333 84.39,11.75 C84.0633333,11.3966667 83.8066667,10.9833333 83.62,10.51 C83.4333333,10.0366667 83.34,9.52666667 83.34,8.98 C83.34,8.43333333 83.4366667,7.92333333 83.63,7.45 C83.8233333,6.97666667 84.0833333,6.56666667 84.41,6.22 C84.7366667,5.87333333 85.1233333,5.6 85.57,5.4 C86.0166667,5.2 86.4933333,5.1 87,5.1 C87.5066667,5.1 87.9833333,5.2 88.43,5.4 C88.8766667,5.6 89.2633333,5.87333333 89.59,6.22 C89.9166667,6.56666667 90.1733333,6.97666667 90.36,7.45 C90.5466667,7.92333333 90.64,8.43333333 90.64,8.98 C90.64,9.52666667 90.5466667,10.0366667 90.36,10.51 C90.1733333,10.9833333 89.9166667,11.3966667 89.59,11.75 C89.2633333,12.1033333 88.8766667,12.38 88.43,12.58 C87.9833333,12.78 87.5066667,12.88 87,12.88 Z" id="Francesco" fill="#6E7073"></path>
                                  <path d="M12.64,46.4 C16.4266667,46.4 19.42,45.5733333 21.62,43.92 C23.82,42.2666667 24.92,40.0266667 24.92,37.2 C24.92,35.04 24.22,33.28 22.82,31.92 C21.42,30.56 19.3733333,29.6666667 16.68,29.24 L16.68,29.24 L10.88,28.28 C9.70666667,28.0933333 8.86,27.8066667 8.34,27.42 C7.82,27.0333333 7.56,26.4933333 7.56,25.8 C7.56,25.0533333 7.96666667,24.46 8.78,24.02 C9.59333333,23.58 10.6933333,23.36 12.08,23.36 C13.5466667,23.36 14.98,23.6266667 16.38,24.16 C17.78,24.6933333 19.2133333,25.5333333 20.68,26.68 L20.68,26.68 L24.32,21.6 C22.8,20.3733333 20.98,19.4 18.86,18.68 C16.74,17.96 14.64,17.6 12.56,17.6 C8.98666667,17.6 6.18,18.38 4.14,19.94 C2.1,21.5 1.08,23.6266667 1.08,26.32 C1.08,28.3733333 1.69333333,30.0666667 2.92,31.4 C4.14666667,32.7333333 5.89333333,33.6 8.16,34 L8.16,34 L14.32,35.08 C15.7066667,35.32 16.7,35.6533333 17.3,36.08 C17.9,36.5066667 18.2,37.1066667 18.2,37.88 C18.2,38.7333333 17.7533333,39.4 16.86,39.88 C15.9666667,40.36 14.7333333,40.6 13.16,40.6 C11.56,40.6 10.0266667,40.2933333 8.56,39.68 C7.09333333,39.0666667 5.52,38.08 3.84,36.72 L3.84,36.72 L0,41.72 C1.73333333,43.1866667 3.71333333,44.3333333 5.94,45.16 C8.16666667,45.9866667 10.4,46.4 12.64,46.4 Z M42.52,46 L42.52,24.08 L51.68,24.08 L51.68,18 L26.48,18 L26.48,24.08 L35.64,24.08 L35.64,46 L42.52,46 Z M61.6,46 L61.6,35.8 L66.84,35.8 L72.12,46 L79.8,46 L73.68,34.8 C75.2533333,34.08 76.52,33.0266667 77.48,31.64 C78.44,30.2533333 78.92,28.68 78.92,26.92 C78.92,25.6133333 78.6733333,24.4133333 78.18,23.32 C77.6866667,22.2266667 77.0066667,21.2866667 76.14,20.5 C75.2733333,19.7133333 74.2333333,19.1 73.02,18.66 C71.8066667,18.22 70.48,18 69.04,18 L69.04,18 L54.72,18 L54.72,46 L61.6,46 Z M68.4,30.2 L61.6,30.2 L61.6,23.88 L68.4,23.88 C69.4666667,23.88 70.3266667,24.1733333 70.98,24.76 C71.6333333,25.3466667 71.96,26.1066667 71.96,27.04 C71.96,27.9733333 71.6333333,28.7333333 70.98,29.32 C70.3266667,29.9066667 69.4666667,30.2 68.4,30.2 L68.4,30.2 Z M87,46 L89.6,39.24 L100.52,39.24 L103.08,46 L110.52,46 L99.2,18 L91.32,18 L79.84,46 L87,46 Z M98.48,33.76 L91.68,33.76 L95.12,24.8 L98.48,33.76 Z M134.6,46 L134.6,40.04 L120.04,40.04 L134.48,22.64 L134.48,18 L111.16,18 L111.16,23.96 L125.52,23.96 L111.04,41.36 L111.04,46 L134.6,46 Z M159.48,46 L159.48,40.04 L144.92,40.04 L159.36,22.64 L159.36,18 L136.04,18 L136.04,23.96 L150.4,23.96 L135.92,41.36 L135.92,46 L159.48,46 Z" id="STRAZZ" fill="#0D1016"></path>
                                  <path d="M165.1,46.2 C165.753333,46.2 166.343333,46.0866667 166.87,45.86 C167.396667,45.6333333 167.853333,45.2933333 168.24,44.84 L168.24,44.84 L168.24,46 L169.72,46 L169.72,35.98 L168.24,35.98 L168.24,43.34 C167.946667,43.8333333 167.563333,44.2166667 167.09,44.49 C166.616667,44.7633333 166.08,44.9 165.48,44.9 C164.626667,44.9 163.946667,44.64 163.44,44.12 C162.933333,43.6 162.68,42.9 162.68,42.02 L162.68,42.02 L162.68,35.98 L161.22,35.98 L161.22,42.32 C161.22,43.4666667 161.58,44.4 162.3,45.12 C163.02,45.84 163.953333,46.2 165.1,46.2 Z M173.72,46 L173.72,31.66 L172.24,32 L172.24,46 L173.72,46 Z M177.72,46 L177.72,31.66 L176.24,32 L176.24,46 L177.72,46 Z M184.9,46.2 C185.606667,46.2 186.27,46.0666667 186.89,45.8 C187.51,45.5333333 188.05,45.1666667 188.51,44.7 C188.97,44.2333333 189.333333,43.68 189.6,43.04 C189.866667,42.4 190,41.7133333 190,40.98 C190,40.26 189.866667,39.58 189.6,38.94 C189.333333,38.3 188.97,37.7466667 188.51,37.28 C188.05,36.8133333 187.51,36.4466667 186.89,36.18 C186.27,35.9133333 185.606667,35.78 184.9,35.78 C184.193333,35.78 183.526667,35.9133333 182.9,36.18 C182.273333,36.4466667 181.73,36.8133333 181.27,37.28 C180.81,37.7466667 180.446667,38.3 180.18,38.94 C179.913333,39.58 179.78,40.26 179.78,40.98 C179.78,41.7133333 179.913333,42.4 180.18,43.04 C180.446667,43.68 180.81,44.2333333 181.27,44.7 C181.73,45.1666667 182.273333,45.5333333 182.9,45.8 C183.526667,46.0666667 184.193333,46.2 184.9,46.2 Z M184.9,44.88 C184.393333,44.88 183.913333,44.78 183.46,44.58 C183.006667,44.38 182.616667,44.1033333 182.29,43.75 C181.963333,43.3966667 181.706667,42.9833333 181.52,42.51 C181.333333,42.0366667 181.24,41.5266667 181.24,40.98 C181.24,40.4333333 181.336667,39.9233333 181.53,39.45 C181.723333,38.9766667 181.983333,38.5666667 182.31,38.22 C182.636667,37.8733333 183.023333,37.6 183.47,37.4 C183.916667,37.2 184.393333,37.1 184.9,37.1 C185.406667,37.1 185.883333,37.2 186.33,37.4 C186.776667,37.6 187.163333,37.8733333 187.49,38.22 C187.816667,38.5666667 188.073333,38.9766667 188.26,39.45 C188.446667,39.9233333 188.54,40.4333333 188.54,40.98 C188.54,41.5266667 188.446667,42.0366667 188.26,42.51 C188.073333,42.9833333 187.816667,43.3966667 187.49,43.75 C187.163333,44.1033333 186.776667,44.38 186.33,44.58 C185.883333,44.78 185.406667,44.88 184.9,44.88 Z" id="ullo" fill="#6E7073"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>

        </Link>
      </h1>
    </div>
    <div>
      {menu.map(menuItem => {
        return <Link key={menuItem.slug} to={menuItem.slug} >{menuItem.label}</Link>
      })}
    </div>
    <div>
      <ul>
        <li>
          <a href="https://github.com/francesco-strazzullo">
            github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/TheStrazz86">
            twitter
          </a>
        </li>
        <li>
          <a href="https://medium.com/@TheStrazz86">
            medium
          </a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
