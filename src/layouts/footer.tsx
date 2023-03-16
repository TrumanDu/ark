export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#001529" }}
      className="fixed bottom-0 mt-4 p-4 z-20 w-full flex  justify-center  text-white space-x-20 md:items-center"
    >
      <span>
        <a
          href="https://beian.miit.gov.cn"
          className="text-blue-600 hover:underline"
        >
          陕ICP备 15011078 号-2
        </a>
      </span>
      <span>
        ©2023 &nbsp;
        <a href="/" className="text-yellow-600 hover:underline">
          TrumanDu
        </a>
        &nbsp;&nbsp; All Rights Reserved
      </span>
    </footer>
  );
}
