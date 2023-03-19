import trumanImg from "../assets/trumandu_20230319181007.jpg";
const About = () => {
  return (
    <div className="mx-auto mt-28 max-w-2xl lg:max-w-5xl">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={trumanImg}
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100  dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Truman Du.
          </h1>
          <div className="mt-6 prose prose-slate mx-auto lg:prose-lg ">
            <p>
              一名来自Newegg的架构师，熟悉常用的前后端技术，目前专注于
              <strong>大数据，基础软件架构</strong>等领域。 同时还是
              <a
                href="https://mp.weixin.qq.com/s?__biz=MzI4NTMwNTQ5Mg==&mid=2247483684&idx=1&sn=4c1f96c16463601a7e220a06649f4cd3"
                className="underline"
              >
                西安IT技术圈
              </a>
              发起人之一。
            </p>
            <p>
              也许是理想主义者的缘故，很喜欢开源，也受益于开源。在我的认知里，开源就是软件界的社会主义运动，没有开源，就没有现在的互联网。
              自己曾经给一些优秀的项目做过贡献：
            </p>
            <ol>
              <li>
                <a href="https://github.com/elastic/kibana">Kibana</a>
              </li>
              <li>
                <a href="https://github.com/alibaba/ice">ice.js</a>
              </li>
              <li>
                <a href="https://github.com/apache/rocketmq">apache/rocketmq</a>
              </li>
            </ol>
            <p>
              除了参与著名的开源项目以外，自己也主导了一些开源项目，作为开源团队的核心Member.
            </p>

            <ol>
              <li>
                <a href="https://github.com/xaecbd/KCenter">KCenter</a>
              </li>
              <li>
                <a href="https://github.com/ngbdf/redis-manager">
                  redis-manager
                </a>
              </li>
              <li>
                <a href="https://github.com/xaecbd/RCT">RCT</a>
              </li>
              <li>
                <a href="https://github.com/next-theme/hexo-theme-next">
                  hexo-theme-next
                </a>
              </li>
            </ol>
            <p>
              喜欢分享，多次组织组办社区线上和线下活动，在公司内外经常作为演讲嘉宾，分享一些自己的经验。同时也经常会写技术文章，技术期刊。
            </p>
            <p>
              岁月无痕，流光难驻。用笔印证心灵的虹影，
              用心感悟时代的呼声，让过往的岁月留存，让看过的世界被更多的人知晓，爱我所爱，想我所想，写我所写。
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <li className="flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                href="https://trumandu.zhubai.love/"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500"
                >
                  <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                  <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                </svg>
                <span className="ml-4">Follow on Newsletters</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                href="https://github.com/TrumanDu"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                  ></path>
                </svg>
                <span className="ml-4">Follow on GitHub</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                href="https://mp.weixin.qq.com/s?__biz=MzI4NTMwNTQ5Mg==&mid=2247483684&idx=1&sn=4c1f96c16463601a7e220a06649f4cd3"
              >
                <svg
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5510"
                  width="24"
                  height="24"
                >
                  <path
                    d="M690.1 377.4c5.9 0 11.8 0.2 17.6 0.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6 5.5 3.9 9.1 10.3 9.1 17.6 0 2.4-0.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-0.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-0.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4 0.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-0.1 17.8-0.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8z m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1z m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1z"
                    p-id="5511"
                  ></path>
                  <path
                    d="M866.7 792.7c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-0.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7 2.4 0 4.7-0.9 6.4-2.6 1.7-1.7 2.6-4 2.6-6.4 0-2.2-0.9-4.4-1.4-6.6-0.3-1.2-7.6-28.3-12.2-45.3-0.5-1.9-0.9-3.8-0.9-5.7 0.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9z m179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c-0.1 19.8-16.2 35.9-36 35.9z"
                    p-id="5512"
                  ></path>
                </svg>
                <span className="ml-4">Follow on Wechat</span>
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                href="http://blog.trumandu.top/atom.xml"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4443"
                  width="24"
                  height="24"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500"
                >
                  <path
                    d="M832.512 63.488q26.624 0 49.664 10.24t40.448 27.648 27.648 40.448 10.24 49.664l0 704.512q0 26.624-10.24 49.664t-27.648 40.448-40.448 27.648-49.664 10.24l-704.512 0q-26.624 0-49.664-10.24t-40.448-27.648-27.648-40.448-10.24-49.664l0-704.512q0-26.624 10.24-49.664t27.648-40.448 40.448-27.648 49.664-10.24l704.512 0zM188.416 923.648q19.456 0 36.864-7.168t30.208-19.968 19.968-30.208 7.168-36.864-7.168-36.864-19.968-30.208-30.208-19.968-36.864-7.168q-20.48 0-37.376 7.168t-30.208 19.968-20.48 30.208-7.168 36.864 7.168 36.864 20.48 30.208 30.208 19.968 37.376 7.168zM446.464 897.024l36.864 0q15.36 0 30.208 0.512t31.232 0.512 36.864-1.024q0-93.184-35.84-175.616t-97.28-143.872-143.872-96.768-175.616-35.328q-1.024 24.576-1.024 39.936l0 28.672q0 14.336 0.512 29.184t0.512 37.376q65.536 0 123.392 24.576t100.864 67.584 68.096 100.864 25.088 123.392zM707.584 894.976q36.864 0 49.152 0.512t18.432 1.536 15.872 1.024 41.472-2.048q0-145.408-55.296-272.896t-150.528-222.72-223.232-150.528-273.408-55.296q-1.024 25.6-1.024 36.864l0 16.384q0 4.096 0.512 5.632t0.512 7.168 0.512 18.432 0.512 40.448q119.808 0 224.768 45.056t183.296 123.392 123.392 183.296 45.056 223.744z"
                    p-id="4444"
                  ></path>
                </svg>
                <span className="ml-4">Follow on RSS</span>
              </a>
            </li>
            <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
              <a
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
                href="mailto:truman.p.du@qq.com"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                  ></path>
                </svg>
                <span className="ml-4">dHJ1bWFuLnAuZHVAcXEuY29t</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
