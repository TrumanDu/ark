import wechat from "../assets/wechat_20230312215618.jpg";
import b1 from "../assets/20230315230945.png";
import book2 from "../assets/java20230315231340.png";
import book3 from "../assets/mongo20230315231615.png";
import book4 from "../assets/es20230315231815.png";
import kibana from "../assets/kibana20230315232024.png";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto z-0 flex flex-wrap pb-8 mb-4 sm:w-1/1">
        <div className="mt-28 p-8 sm:w-1/1 md:w-3/5">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, speaker, and author.
          </h1>
          <p className="mt-20 text-base text-zinc-600 dark:text-zinc-400">
            I’m Truman, a software designer and architect based in Xi 'an.
          </p>
          <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
            I’m the founder of Xi 'an IT Technology Organization, where we can
            share technology and experience.
          </p>
          <div className="mt-20 flex  gap-6">
            <a
              className="group -m-1 p-1"
              aria-label="Follow on GitHub"
              href="https://github.com/TrumanDu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 256 259.3"
              >
                <path
                  fill="#9EDCF2"
                  d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0"
                />
                <defs>
                  <path
                    id="logosGithubOctocat0"
                    d="M98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5c0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2c0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6c-7-1.6-3.8 4.2-3.8 4.2c4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5 1.6-.3 4.5-.3 4.5c7 2.6 7.7 10.2 7.7 10.2v21.7l.4 16.6z"
                  />
                </defs>
                <clipPath id="logosGithubOctocat1">
                  <use href="#logosGithubOctocat0" />
                </clipPath>
                <path
                  fill="#7DBCE7"
                  d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1zm0 0"
                />
                <path
                  fill="#9EDCF2"
                  d="m46.9 125.9l-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2l-2-7.1zm0 0"
                />
                <path
                  fill="#010101"
                  d="m255.8 95.6l.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7 2.8-16.7 2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9 3.5-15.8-2-29.7c0 0-9.8-3.1-32.1 11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2 0-20.5 1.3-30.2 3.9C74.4-2.9 64.3.3 64.3.3c-6.6 16.5-2.5 28.8-1.3 31.8c-7.8 8.4-12.5 19.1-12.5 32.2c0 9.9 1.1 18.8 3.9 26.5c-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7c.6 1.6 1.3 3.2 2 4.7c-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8c7.8 14.4 23 23.8 50.2 26.7c-3.9 2.6-7.8 7-9.4 14.5c-5.3 2.5-21.9 8.7-31.9-8.5c0 0-5.6-10.2-16.3-11c0 0-10.4-.2-.7 6.5c0 0 6.9 3.3 11.7 15.6c0 0 6.3 21 36.4 14.2V177s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5c0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2c0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6c7 1.6 3.8-4.2 3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4c4.5-1.6.3-4.5.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9 42.9-12.2 49.3-26.8c12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1c.6-1.5 1.1-3 1.6-4.6c13.4-.5 35.1-.5 56.3 3.7zm0 0"
                />
                <path
                  fill="#F5CCB3"
                  d="M174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8c0 34.4-25.6 35.3-57.2 35.3S70.1 114 70.1 83.5c0-7.3 3.6-14.1 9.8-19.7c10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3zm0 0"
                />
                <path
                  fill="#FFF"
                  d="M108.3 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.6-.1 11.9 7.6 11.9 17.1zm0 0"
                />
                <path
                  fill="#AF5C51"
                  d="M104.5 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.3 0 7.9 5.1 7.9 11.4zm0 0"
                />
                <path
                  fill="#FFF"
                  d="M172.2 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.5-.1 11.9 7.6 11.9 17.1zm0 0"
                />
                <path
                  fill="#AF5C51"
                  d="M168.3 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4zm-37.8 15c0 1.6-1.3 3-3 3c-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3zm-9.9 7.5c-.2-.5.1-1 .6-1.2c.5-.2 1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6c.5.2.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9c-3.1 0-5.9-2-6.9-4.9zm0 0"
                />
                <path
                  fill="#C4E5D9"
                  d="M54.5 121.6c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm5.8 3.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm3.5 4.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.2 4.8c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm3.5 4.4c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm4.8 3.9c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4zm6.7 2.5c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.7 0c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4zm6.8-1.1c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4zm0 0"
                />
              </svg>
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Subscribe"
              href="https://trumandu.zhubai.love/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#CCD6DD"
                  d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
                />
                <path
                  fill="#99AAB5"
                  d="M11.949 17.636L.637 28.948c-.027.029-.037.064-.06.092c.34.57.814 1.043 1.384 1.384c.029-.023.063-.033.09-.06L13.365 19.05a1 1 0 0 0-1.416-1.414M35.423 29.04c-.021-.028-.033-.063-.06-.09L24.051 17.636a1 1 0 1 0-1.415 1.414l11.313 11.314c.026.026.062.037.09.06a3.978 3.978 0 0 0 1.384-1.384"
                />
                <path
                  fill="#99AAB5"
                  d="M32 5H4a4 4 0 0 0-4 4v1.03l14.527 14.496a4.883 4.883 0 0 0 6.885 0L36 10.009V9a4 4 0 0 0-4-4"
                />
                <path
                  fill="#E1E8ED"
                  d="M32 5H4A3.992 3.992 0 0 0 .405 7.275l14.766 14.767a4 4 0 0 0 5.657 0L35.595 7.275A3.991 3.991 0 0 0 32 5"
                />
                <path
                  fill="#DD2E44"
                  d="M27 16.78a4.986 4.986 0 0 0-4.986-4.987a4.98 4.98 0 0 0-4.053 2.087a4.98 4.98 0 0 0-4.051-2.087a4.987 4.987 0 0 0-4.987 4.987c0 .391.05.769.134 1.133c.693 4.302 5.476 8.841 8.904 10.087c3.428-1.246 8.212-5.785 8.904-10.086c.085-.365.135-.744.135-1.134z"
                />
              </svg>
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="wechat"
              href="https://mp.weixin.qq.com/s?__biz=MzI4NTMwNTQ5Mg==&mid=2247483684&idx=1&sn=4c1f96c16463601a7e220a06649f4cd3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                color="green"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43zM12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92zM6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92z"
                />
                <path
                  fill="currentColor"
                  d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03zm-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96zm3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-28 sm:w-1/1 md:max-w-sm">
          <img src={wechat} className="md:max-w-sm" />
        </div>
      </div>
      <div className="mx-auto z-0 flex flex-wrap pb-16 w-4/5 mb-4 sm:w-1/1">
        <div className="w-full">
          <h1 className="text-4xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Books
          </h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row flex-wrap gap-8">
          <div className="max-w-xl mb-4 rounded overflow-hidden shadow-md  flex hover:shadow-xl transform transition duration-500 hover:scale-105">
            <a
              className=" flex"
              target="_blank"
              href="http://book.trumandu.top/mq/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%85%A5%E9%97%A8%E4%B8%8E%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5"
            >
              <div className="w-1/3">
                <img src={b1} alt="Book Cover" className="w-full" />
              </div>
              <div className="w-2/3 px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  消息队列入门与最佳实践
                </div>
                <p className="text-gray-700 text-base">
                  Kafka、RocketMQ、Pulsar入门与最佳实践
                </p>
              </div>
            </a>
          </div>

          <div className="max-w-xl mb-4 rounded overflow-hidden shadow-md flex hover:shadow-xl transform transition duration-500 hover:scale-105">
            <a
              className=" flex"
              target="_blank"
              href="http://book.trumandu.top/java-architect-tutorial/java-architect-tutorial"
            >
              <div className="w-1/3">
                <img src={book2} alt="Book Cover" className="w-full" />
              </div>
              <div className="w-2/3 px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Java 初级架构师入阶系列
                </div>
                <p className="text-gray-700 text-base">
                  该系列只是对自己在java基础知识，架构方面的现阶段理解的整理系列，力争做个好的架构师系列专栏
                </p>
              </div>
            </a>
          </div>
          <div className="max-w-xl mb-4 rounded overflow-hidden shadow-md flex hover:shadow-xl transform transition duration-500 hover:scale-105">
            <a
              className=" flex"
              target="_blank"
              href="http://book.trumandu.top/mongodb"
            >
              <div className="w-1/3">
                <img src={book3} alt="Book Cover" className="w-full" />
              </div>
              <div className="w-2/3 px-6 py-4">
                <div className="font-bold text-xl mb-2">MongoDB指南</div>
                <p className="text-gray-700 text-base">从速了解MongoDB那些事</p>
              </div>
            </a>
          </div>
          <div className="max-w-xl mb-4 rounded overflow-hidden shadow-md flex hover:shadow-xl transform transition duration-500 hover:scale-105">
            <a
              className=" flex"
              target="_blank"
              href="http://book.trumandu.top/elasticsearch"
            >
              <div className="w-1/3">
                <img src={book4} alt="Book Cover" className="w-full" />
              </div>
              <div className="w-2/3 px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Elasticsearch 速览学习笔记
                </div>
                <p className="text-gray-700 text-base">
                  一本简单上手的Elasticsearch速览学习笔记,其中很多知识点是必知必会的
                </p>
              </div>
            </a>
          </div>
          <div className="max-w-xl mb-4 rounded overflow-hidden shadow-md flex hover:shadow-xl transform transition duration-500 hover:scale-105">
            <a
              className=" flex"
              target="_blank"
              href="https://app.gitbook.com/@trumandu/s/java-architect-tutorial/"
            >
              <div className="w-1/3">
                <img src={kibana} alt="Book Cover" className="w-full" />
              </div>
              <div className="w-2/3 px-6 py-4">
                <div className="font-bold text-xl mb-2">Kibana插件开发指南</div>
                <p className="text-gray-700 text-base">
                  这是一本讲述kibana插件开发教程类的书籍，只针对5.x-6.x
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
