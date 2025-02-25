import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "MUSTAFA DHINOJWALA",
    image: "path-to-image-1.jpg", // Replace with actual image path
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "FAKRUDDIN HARYANAWALA",
    image: "path-to-image-2.jpg", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "RASHID BHAI",
    image: "path-to-image-1.jpg", // Replace with actual image path
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "UMESH BHAI",
    image: "path-to-image-2.jpg", // Replace with actual image path
    linkedin: "#",
  },
  {
    name: "MOHAMMED DARIWALA",
    image: "path-to-image-1.jpg", // Replace with actual image path
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "YUMI NAKAMURA",
    image: "path-to-image-2.jpg", // Replace with actual image path
    linkedin: "#",
  },
];

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const imageReveal = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const curtainVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "100%",
    transition: {
      duration: 1.4,
      ease: [0.785, 0.135, 0.15, 0.86],
    },
  },
};

const cardVariants = (index) => ({
  hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 }, // Alternate direction based on index
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
      delay: index * 0.2, // Stagger delay based on index
    },
  },
});

const AboutUs = () => {
  return (
    <>
      {/* First Section */}
      <motion.div

        className="main relative   flex flex-col justify-end items-center lg:flex-row lg:justify-baseline lg:items-center lg:h-screen h-screen"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/cf/34/52/cf345255aba4b44de44f83e131817d86.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Scroll Text */}
        <motion.div
          className="absolute bottom-5 left-0 scrollText text-amber-50 text-3xl px-2 py-1"
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          scroll
        </motion.div>

        {/* SVG Section */}
        <motion.div
          className="mainSVG w-[90vw] mb-60 mr-2.5 lg:w-[80vw] lg:mt-80  "
          variants={itemVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
            <svg className="lg:pl-96" width="1100" height="353" viewBox="0 0 889 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7658 77.9326C23.7658 73.3969 23.4508 52.6395 22.8209 15.6606C22.6319 14.2117 21.8759 12.9833 20.553 11.9753C19.2931 10.9044 17.4347 10.0855 14.9778 9.51848C12.521 8.95151 10.5051 8.54204 8.93016 8.29005C7.41824 8.03807 5.27636 7.78608 2.50452 7.53409C2.25253 6.40016 2.12654 5.6127 2.12654 5.17173C2.12654 4.79375 2.25253 4.10079 2.50452 3.09285C4.14243 3.15584 8.04821 3.31333 14.2219 3.56532C20.3955 3.75431 25.1517 3.8488 28.4906 3.8488C31.3254 3.8488 36.6801 3.72281 44.5546 3.47082C52.4292 3.21884 58.0989 3.09285 61.5637 3.09285C77.6908 3.09285 90.0066 6.84113 98.5111 14.3377C107.016 21.8343 111.268 31.8192 111.268 44.2925C111.268 56.1358 107.457 65.8058 99.834 73.3024C92.2115 80.799 81.3761 84.5472 67.3279 84.5472C58.8863 84.5472 51.2953 82.7833 44.5546 79.2555C44.5546 94.6267 44.7436 111.226 45.1216 129.054C45.1846 130.692 45.9091 132.11 47.295 133.306C48.6809 134.44 50.6653 135.322 53.2482 135.952C55.894 136.582 58.0989 137.055 59.8628 137.37C61.6897 137.622 64.052 137.874 66.9499 138.126C67.2019 139.386 67.3279 140.236 67.3279 140.677C67.3279 141.181 67.2019 141.811 66.9499 142.567C56.2405 142.189 45.2791 142 34.0657 142C22.7264 142 11.765 142.189 1.18159 142.567C0.929609 141.811 0.803616 141.181 0.803616 140.677C0.803616 139.606 0.929609 138.756 1.18159 138.126C4.07943 137.874 6.4103 137.622 8.1742 137.37C10.0011 137.055 12.206 136.582 14.7888 135.952C17.4347 135.322 19.4506 134.44 20.8365 133.306C22.2224 132.11 22.9469 130.692 23.0099 129.054C23.5138 112.864 23.7658 95.8236 23.7658 77.9326ZM45.1216 9.61298C44.7436 32.2917 44.5546 53.3955 44.5546 72.9244C49.7204 75.2553 54.8546 76.4207 59.9573 76.4207C68.8398 76.4207 75.5174 73.5544 79.9901 67.8217C84.4629 62.089 86.6993 54.183 86.6993 44.1035C86.6993 20.8578 75.2024 9.235 52.2087 9.235C50.7598 9.235 48.3974 9.36099 45.1216 9.61298ZM125.537 3.09285C139.648 3.59682 150.609 3.8488 158.421 3.8488C166.232 3.8488 177.194 3.59682 191.305 3.09285C191.557 4.10079 191.683 4.79375 191.683 5.17173C191.683 5.6127 191.557 6.40016 191.305 7.53409C188.407 7.78608 186.045 8.06956 184.218 8.38455C182.454 8.63653 180.249 9.07751 177.603 9.70747C175.02 10.3374 173.036 11.2509 171.65 12.4478C170.264 13.5818 169.54 14.9677 169.477 16.6056C168.658 38.0244 168.248 57.9627 168.248 76.4207C168.248 85.9332 168.595 105.872 169.288 136.236H198.486C207.747 135.606 216.031 134.251 223.339 132.173C230.646 130.094 236.725 127.448 241.576 124.235C246.49 120.959 250.522 117.589 253.671 114.124C256.884 110.596 259.656 106.659 261.987 102.312C263.625 102.942 264.696 103.793 265.2 104.864C262.617 109.651 260.601 113.526 259.152 116.486C257.766 119.447 256.223 123.353 254.522 128.204C252.884 132.992 251.813 137.59 251.309 142H169.288C152.216 142 137.569 142.189 125.348 142.567C125.096 141.811 124.97 141.181 124.97 140.677C124.97 140.236 125.096 139.386 125.348 138.126C128.245 137.874 130.576 137.622 132.34 137.37C134.167 137.055 136.372 136.582 138.955 135.952C141.601 135.322 143.617 134.44 145.002 133.306C146.388 132.11 147.113 130.692 147.176 129.054C147.932 109.336 148.31 89.461 148.31 69.4281C148.31 49.0173 147.995 31.4097 147.365 16.6056C147.302 14.9677 146.577 13.5818 145.191 12.4478C143.806 11.2509 141.79 10.3374 139.144 9.70747C136.561 9.07751 134.356 8.63653 132.529 8.38455C130.765 8.06956 128.434 7.78608 125.537 7.53409C125.285 6.40016 125.159 5.6127 125.159 5.17173C125.159 4.54176 125.285 3.8488 125.537 3.09285ZM343.914 1.67543C344.859 0.982464 345.867 0.541489 346.938 0.3525L398.626 129.432C399.256 131.007 400.296 132.362 401.744 133.495C403.193 134.566 404.989 135.417 407.131 136.047C409.336 136.614 411.225 137.055 412.8 137.37C414.438 137.622 416.423 137.874 418.754 138.126C419.005 139.134 419.131 139.984 419.131 140.677C419.131 141.433 419.005 142.126 418.754 142.756C405.146 142.252 394.972 142 388.232 142C380.924 142 370.341 142.252 356.482 142.756C356.23 142 356.104 141.244 356.104 140.488C356.104 139.669 356.23 138.882 356.482 138.126C369.207 136.74 375.569 134.346 375.569 130.944C375.569 129.873 375.443 128.771 375.191 127.637L361.49 92.4848C357.332 92.3588 351.725 92.2958 344.67 92.2958C341.331 92.2958 332.669 92.4218 318.684 92.6738L304.226 129.432V130.566C304.226 131.196 304.32 131.795 304.509 132.362C304.761 132.929 305.139 133.432 305.643 133.873C306.21 134.314 306.746 134.692 307.25 135.007C307.754 135.322 308.447 135.637 309.329 135.952C310.274 136.204 311.061 136.425 311.691 136.614C312.384 136.74 313.297 136.897 314.431 137.086C315.628 137.275 316.542 137.433 317.172 137.559C317.802 137.622 318.715 137.716 319.912 137.842C321.172 137.968 322.054 138.063 322.558 138.126C322.81 139.134 322.936 139.984 322.936 140.677C322.936 141.055 322.81 141.748 322.558 142.756C308.447 142.252 300.509 142 298.745 142C295.343 142 286.587 142.252 272.476 142.756C272.224 142 272.098 141.244 272.098 140.488C272.098 139.669 272.224 138.882 272.476 138.126C285.579 136.614 293.044 133.401 294.871 128.487L335.504 26.055L333.425 20.4799C337.016 18.086 339.504 15.5031 340.89 12.7313C342.339 9.95946 343.347 6.27417 343.914 1.67543ZM344.67 84.9252C350.465 84.9252 355.033 84.8622 358.371 84.7362L340.417 38.2449H340.039L321.991 84.5472C327.913 84.7992 335.472 84.9252 344.67 84.9252ZM430.376 3.09285C440.708 3.59682 453.748 3.8488 469.497 3.8488C514.036 59.6637 537.974 89.398 541.313 93.0518C544.652 96.6426 546.321 98.438 546.321 98.438H547.077C547.329 86.3426 547.455 76.6097 547.455 69.2391C547.455 54.6869 547.14 37.5834 546.51 17.9285C546.384 12.2588 539.392 8.79402 525.532 7.53409C525.28 6.14817 525.154 5.29772 525.154 4.98274C525.154 4.47877 525.28 3.8488 525.532 3.09285C535.675 3.47082 544.652 3.65981 552.463 3.65981C557.503 3.65981 565.945 3.47082 577.788 3.09285C578.04 3.8488 578.166 4.47877 578.166 4.98274C578.166 5.99068 578.04 6.84113 577.788 7.53409C563.992 8.79402 557.031 12.2588 556.905 17.9285C556.149 37.6464 555.771 57.0808 555.771 76.2317C555.771 105.525 556.086 127.574 556.716 142.378L555.015 142.567L461.087 27H460.142C459.764 43.3161 459.575 59.7896 459.575 76.4207C459.575 91.0359 459.89 108.108 460.52 127.637C460.646 133.369 467.607 136.866 481.403 138.126C481.718 139.197 481.876 140.047 481.876 140.677C481.876 141.307 481.718 141.937 481.403 142.567C471.387 142.189 462.442 142 454.567 142C449.527 142 441.086 142.189 429.242 142.567C428.927 141.937 428.77 141.307 428.77 140.677C428.77 139.606 428.927 138.756 429.242 138.126C443.165 136.803 450.126 133.306 450.126 127.637C450.882 107.982 451.26 88.579 451.26 69.4281C451.26 48.6393 451.008 30.5908 450.504 15.2827C445.212 10.6839 438.503 8.10106 430.376 7.53409C429.998 6.71514 429.809 5.99068 429.809 5.36072C429.809 4.41577 429.998 3.65981 430.376 3.09285ZM591.395 3.09285C605.506 3.59682 616.531 3.8488 624.468 3.8488C678.519 3.53382 708.443 3.28183 714.238 3.09285C715.057 9.39249 716.664 15.3772 719.058 21.0468C721.451 26.6535 724.507 32.6382 728.224 39.0008C727.72 40.0718 726.617 40.9222 724.916 41.5522C722.648 37.2684 719.908 33.4571 716.695 30.1183C713.482 26.7795 709.419 23.6297 704.505 20.6689C699.655 17.708 693.575 15.2827 686.268 13.3928C679.023 11.5029 670.739 10.2429 661.416 9.61298H635.335C634.516 36.2605 634.107 56.3248 634.107 69.8061H661.038C662.865 69.8061 664.566 69.6801 666.141 69.4281C667.778 69.1131 669.29 68.6091 670.676 67.9162C672.062 67.1602 673.291 66.4673 674.362 65.8373C675.495 65.1443 676.629 64.1364 677.763 62.8135C678.897 61.4276 679.842 60.2936 680.598 59.4117C681.354 58.4667 682.268 57.0493 683.339 55.1594C684.409 53.2695 685.228 51.7891 685.795 50.7182C686.362 49.6472 687.213 47.9778 688.347 45.7099C689.544 43.4421 690.457 41.7412 691.087 40.6072C693.04 41.3632 694.237 42.1821 694.678 43.0641C692.032 47.7258 689.796 52.8915 687.969 58.5612C686.142 64.2309 685.228 68.9556 685.228 72.7354C685.228 81.6809 688.378 91.5398 694.678 102.312C694.174 103.32 692.977 104.171 691.087 104.864C690.394 103.604 689.418 101.808 688.158 99.4774C686.961 97.0835 686.016 95.2566 685.323 93.9967C684.63 92.7368 683.685 91.1304 682.488 89.1775C681.291 87.2246 680.22 85.7127 679.275 84.6417C678.393 83.5708 677.228 82.3739 675.779 81.0509C674.393 79.728 673.007 78.7516 671.621 78.1216C670.235 77.4286 668.629 76.8617 666.802 76.4207C665.038 75.9167 663.117 75.6647 661.038 75.6647H634.107C634.107 85.6812 634.453 105.872 635.146 136.236H665.29C674.614 135.606 682.898 134.346 690.142 132.456C697.45 130.566 703.529 128.141 708.38 125.18C713.293 122.219 717.357 119.069 720.569 115.73C723.782 112.392 726.523 108.58 728.79 104.297C730.491 104.927 731.594 105.746 732.098 106.753C731.783 107.383 730.964 108.895 729.641 111.289C728.318 113.683 727.436 115.321 726.995 116.203C726.554 117.022 725.798 118.502 724.727 120.644C723.719 122.723 722.963 124.424 722.459 125.747C721.955 127.007 721.357 128.613 720.664 130.566C720.034 132.519 719.499 134.44 719.058 136.33C718.68 138.157 718.365 140.047 718.113 142H635.146C618.074 142 603.428 142.189 591.206 142.567C590.954 141.811 590.828 141.181 590.828 140.677C590.828 140.236 590.954 139.386 591.206 138.126C594.104 137.874 596.435 137.622 598.199 137.37C600.026 137.055 602.231 136.582 604.813 135.952C607.459 135.322 609.475 134.44 610.861 133.306C612.247 132.11 612.972 130.692 613.035 129.054C613.79 109.336 614.168 89.461 614.168 69.4281C614.168 49.0173 613.853 31.4097 613.224 16.6056C613.161 14.9677 612.436 13.5818 611.05 12.4478C609.664 11.2509 607.648 10.3374 605.002 9.70747C602.42 9.07751 600.215 8.63653 598.388 8.38455C596.624 8.06956 594.293 7.78608 591.395 7.53409C591.143 6.40016 591.017 5.6127 591.017 5.17173C591.017 4.79375 591.143 4.10079 591.395 3.09285ZM750.902 3.09285C757.769 3.34483 766.336 3.53382 776.605 3.65981C786.873 3.78581 798.937 3.8488 812.796 3.8488C826.655 3.8488 838.719 3.78581 848.988 3.65981C859.319 3.53382 867.95 3.34483 874.879 3.09285C875.257 5.80169 875.73 8.41604 876.297 10.9359C876.864 13.3928 877.809 16.1331 879.132 19.1569L881.966 25.5826L888.864 39.0008C888.423 40.0088 887.321 40.8592 885.557 41.5522C883.415 37.5834 880.801 33.8036 877.714 30.2128C874.627 26.622 870.69 23.3777 865.902 20.4799C861.178 17.582 855.382 15.1567 848.515 13.2038C841.712 11.2509 833.491 9.92796 823.852 9.235C823.537 17.1096 823.285 26.0236 823.096 35.977C822.97 45.8674 822.907 56.8918 822.907 69.0501C822.907 81.2714 822.97 92.3588 823.096 102.312C823.285 112.266 823.537 121.18 823.852 129.054C823.915 130.566 824.514 131.858 825.648 132.929C826.781 133.936 828.325 134.787 830.278 135.48C832.294 136.173 834.593 136.74 837.176 137.181C839.822 137.559 842.657 137.874 845.68 138.126C845.932 139.197 846.058 140.047 846.058 140.677C846.058 141.244 845.932 141.874 845.68 142.567C835.097 142.189 824.136 142 812.796 142C801.52 142 790.559 142.189 779.912 142.567C779.66 141.874 779.534 141.244 779.534 140.677C779.534 140.047 779.66 139.197 779.912 138.126L784.448 137.653C786.086 137.464 787.913 137.212 789.929 136.897C791.944 136.519 793.803 136.015 795.504 135.385C797.268 134.755 798.748 133.968 799.945 133.023C801.142 132.078 801.74 130.913 801.74 129.527V129.054C802.055 117.526 802.307 106.785 802.496 96.8316C802.685 86.8781 802.78 77.6176 802.78 69.0501C802.78 60.5456 802.685 51.3481 802.496 41.4577C802.307 31.5042 802.055 20.7633 801.74 9.235C792.669 9.73897 784.763 10.9674 778.022 12.9203C771.345 14.8102 765.549 17.204 760.635 20.1019C755.721 22.9367 751.627 26.2125 748.351 29.9293C745.075 33.5831 742.366 37.4574 740.224 41.5522C738.46 40.8592 737.358 40.0088 736.917 39.0008L741.169 30.9688L743.154 26.9055C743.973 25.2046 744.792 23.4722 745.611 21.7083C746.43 19.9444 747.185 18.1175 747.878 16.2276C748.634 14.2747 749.264 12.2273 749.768 10.0855C750.272 7.88057 750.65 5.54971 750.902 3.09285Z" fill="white"/>
</svg>

          {/* Place for the SVG file */}
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="paraSec px-3 py-1 mb-30 lg:w-[35vw] lg:h-[80vh] lg:mt-80 lg:flex lg:flex-col lg:gap-70"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-white my-1 py-1 text-xl font-semibold lg:pl-15"
            variants={itemVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            ABOUT US
          </motion.h1>
          <motion.p
            className="text-white my-1 py-1 text-[18px] lg:pl-15"
            variants={itemVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quis
            ex neque doloribus vel voluptatum quam debitis aperiam? Veritatis
            nihil at magni asperiores ex aliquid veniam voluptatibus
            necessitatibus soluta fugit.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className="main-two grid grid-cols-1 lg:grid-cols-3 min-h-screen w-full bg-[#D0EBE4]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left Section (Text) */}
        <motion.div
          className="part-one flex flex-col items-center lg:items-start justify-between p-6 lg:p-16 *:text-[#041C1D]"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-5xl lg:text-8xl font-mono leading-[80px] text-center lg:text-left"
            variants={itemVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            Building <br />
            with <br />
            Purpose
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl mt-4"
            variants={itemVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            EST – 2020
          </motion.p>
        </motion.div>

        {/* Middle Section (Image) */}
        <motion.div
          className="part-two flex justify-center items-center "
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="relative overflow-hidden w-full h-[700px] "
            variants={imageReveal}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img
              className="w-full h-full object-cover rounded-0 shadow-lg"
              src="src/assets/images/image2.png"
              alt="Building Image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white z-20"
              variants={curtainVariants}
              viewport={{ once: true, margin: "-100px" }}
            />
          </motion.div>
        </motion.div>

        {/* Right Section (Our Origins & Philosophy) */}
        <motion.div
          className="part-three bg-transparent p-8 lg:p-16 flex flex-col justify-center text-[#041C1D] "
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Our Origins Section */}
          <div className="max-w-lg mx-auto">
            <motion.h2
              className="text-lg font-bold  mb-3"
              variants={itemVariants}
              viewport={{ once: true, margin: "-100px" }}
            >
              OUR ORIGINS
            </motion.h2>
            <motion.p
              className=" leading-relaxed"
              variants={itemVariants}
              viewport={{ once: true, margin: "-100px" }}
            >
              we specialize in providing high-quality, precision-crafted glass solutions for homes, businesses, and architectural projects. With a passion for innovation and excellence, we design and manufacture durable, stylish, and customized glass products that enhance both aesthetics and functionality. From sleek modern designs to safety-enhanced solutions, our expert craftsmanship transforms spaces with clarity and elegance. Whether it’s residential, commercial, or bespoke architectural glass, we are committed to delivering superior quality, outstanding customer service, and innovative designs that redefine the way glass is used in everyday life.
            </motion.p>
            <motion.p
              className=" leading-relaxed mt-4"
              variants={itemVariants}
              viewport={{ once: true, margin: "-100px" }}
            >
              With years of experience and a dedication to perfection, Planet Glass takes pride in turning creative visions into reality. Our team of skilled professionals ensures every piece meets the highest standards of quality and craftsmanship. Whether you're looking for decorative glass, safety solutions, or custom designs, we bring innovation, reliability, and elegance to every project.
            </motion.p>
          </div>

          {/* Our Philosophy Section */}
          <div className="mt-10 lg:mt-10">
            <motion.h2
              className="text-lg font-bold  mb-3"
              variants={itemVariants}
              viewport={{ once: true, margin: "-100px" }}
            >
              OUR PHILOSOPHY
            </motion.h2>
            <div className="space-y-2">
              {["Regeneration", "Innovation", "Sustainability"].map((item, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-900 pb-2"
                  variants={itemVariants}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <p className=" font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <div className="staff-details">
        <div className="bg-[#D0EBE4] *:text-[#041C1D] px-10 py-16">
          <motion.h2
            className="text-6xl font-serif text-black mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            OUR TEAM
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-lg shadow-lg"
                variants={cardVariants(index)} // Alternate animation based on index
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto rounded-lg"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-white z-20"
                    initial={{ x: index % 2 === 0 ? "-100%" : "100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mt-4">
                  {member.name}
                </h3>
                <div className="flex justify-center gap-3 mt-2">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <img
                        src="path-to-linkedin-icon.png" // Replace with actual icon
                        alt="LinkedIn"
                        className="w-6 h-6"
                      />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                      <img
                        src="path-to-facebook-icon.png" // Replace with actual icon
                        alt="Facebook"
                        className="w-6 h-6"
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs; 