"use client";

import React from "react";
import { Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

const steps = [
  {
    icon: (
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.987 34.5215H29.3329M24.6599 6.52148V8.52148M37.3878 11.7936L35.9736 13.2078M42.66 24.5214H40.66M8.66003 24.5214H6.66003M13.3462 13.2078L11.932 11.7936M17.5889 31.5926C13.6836 27.6874 13.6836 21.3557 17.5889 17.4505C21.4941 13.5452 27.8258 13.5452 31.731 17.4505C35.6362 21.3557 35.6362 27.6874 31.731 31.5926L30.6368 32.6868C29.371 33.9526 28.6599 35.6693 28.6599 37.4594V38.5215C28.6599 40.7306 26.8691 42.5215 24.6599 42.5215C22.4508 42.5215 20.6599 40.7306 20.6599 38.5215V37.4594C20.6599 35.6693 19.9488 33.9526 18.6831 32.6868L17.5889 31.5926Z"
          stroke="#FF2975"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Build your mini dApp",
    description: [
      <div>
        Leverage The Grid's infrastructure,{" "}
        <a
          className="underline"
          href="https://universaleverything.io/"
          target="_blank"
        >
          Universal Profiles
        </a>{" "}
        (UPs), and LUKSO's user-centered{" "}
        <a
          className="underline"
          href="https://lukso.network/developer"
          target="_blank"
        >
          smart contract standards
        </a>{" "}
        (LSPs) to create next-gen dApps that seamlessly blend web2 and web3.
        <span className="font-bold">
          {" "}
          Find inspiration and all resources to start building{" "}
          <a
            className="underline"
            href="https://www.notion.so/18c8d1c8a2118073b928dc8de54e5e1a?pvs=25#18c8d1c8a21180309fabde76a45d495d"
            target="_blank"
          >
            here
          </a>{" "}
          .
        </span>
      </div>,
    ],
  },
  {
    icon: Zap,
    title: "Levels 1-3",
    description: [
      <div>
        Join at any level or participate in all! Each level offers{" "}
        <span className="font-bold">
          {" "}
          resources, office hours, and support channels
          {" "}
        </span>
        to help teams deploy fully functional mini dApps on LUKSO Mainnet. In
        every level, <span className="font-bold">$42,000 in LYX</span> is
        available across three grant tiers:
        <br /> <br />
        🥇🥇 <span className="font-bold">Prime Grants</span> – 2 x{" "}
        <span className="font-bold">$9,000</span> in LYX
        <br />
        🥈🥈🥈 <span className="font-bold">Core Grants</span> – 3 x{" "}
        <span className="font-bold">$5,000</span> in LYX
        <br />
        🥉🥉🥉🥉 <span className="font-bold">Origin Grants</span> – 4 x{" "}
        <span className="font-bold">$2,250</span> in LYX
      </div>,
    ],
  },
  {
    icon: (
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.6806 14.655C28.267 14.3966 31.3048 19.4636 29.2152 23.5724C27.2159 27.5032 21.7968 28.0383 19.1528 24.4831C16.2247 20.5459 18.8501 14.9273 23.6806 14.6552V14.655Z"
          fill="#FF2975"
        />
        <path
          d="M17.8268 29.2691C21.0924 29.0898 22.7131 32.5929 22.4282 35.4747C22.1029 38.7646 19.1382 42.6715 15.5119 41.173C10.4851 39.0959 12.3621 29.5689 17.8266 29.2689L17.8268 29.2691Z"
          fill="#FF2975"
        />
        <path
          d="M29.7198 29.2692C32.9385 29.0609 35.2147 32.6153 35.3605 35.5487C35.5122 38.6007 33.5954 41.9419 30.2011 41.4184C27.1713 40.9511 25.3728 37.4112 25.4669 34.5364C25.5484 32.0477 27.0574 29.4414 29.7196 29.2691L29.7198 29.2692Z"
          fill="#FF2975"
        />
        <path
          d="M11.7508 19.8397C15.6548 19.4887 16.7474 23.7457 14.8046 26.6173C13.1796 29.0194 9.19769 30.3112 7.51543 27.3047C5.83707 24.3053 8.52282 20.1298 11.751 19.8397H11.7508Z"
          fill="#FF2975"
        />
        <path
          d="M35.4253 19.8396C39.1477 19.4753 42.4954 24.3469 40.3018 27.5637C38.3862 30.3729 34.4648 28.8175 32.9948 26.339C31.5191 23.8508 32.1795 20.1572 35.4253 19.8396Z"
          fill="#FF2975"
        />
        <path
          d="M31.7945 10.8235C33.5816 10.6482 35.4522 11.6191 36.1688 13.316C37.7525 17.0666 32.9067 19.0716 30.1713 16.4666C28.1215 14.5144 28.8859 11.1088 31.7943 10.8235H31.7945Z"
          fill="#FF2975"
        />
        <path
          d="M15.3071 10.8235C19.055 10.4563 20.3761 14.5859 17.4604 16.801C15.811 18.0543 12.9742 18.0558 11.9238 16.035C10.6936 13.668 12.9713 11.0523 15.3071 10.8237V10.8235Z"
          fill="#FF2975"
        />
        <path
          d="M23.6439 7.51838C25.8849 7.3164 28.2081 9.11776 27.3202 11.5463C26.3243 14.2699 21.8448 14.3189 20.7703 11.6117C19.9489 9.54184 21.6499 7.69801 23.6439 7.51838Z"
          fill="#FF2975"
        />
      </svg>
    ),
    title: "Level 4",
    description: [
      <div>
        Winning projects from Levels 1–3 will qualify for Level 4,{" "}
        <span className="font-bold">the Community Grants Round</span>. Here, an
        additional <span className="font-bold">$24,000 in LYX</span> will be
        distributed via{" "}
        <span className="font-bold">quadratic funding on Gitcoin</span>,
        allowing the community to decide how funds are allocated among
        finalists.
      </div>,
    ],
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-24 px-20 relative items-center justify-center w-full bg-[url(/brand/background.svg)]"
      //bg-[url(/brand/background.svg)]
    >
      <div className="max-w-7xl mx-auto min-w-fit md:p-0 p-3">
        <h2 className="text-4xl font-medium text-center md:text-left mb-12 text-[#ffffff]">
          How it works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-20 gap-4">
          {steps.map((step, index) => (
            <FeatureCard
              key={index}
              title={`Step ${index + 1}`}
              Icon={step.icon}
              heading={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
