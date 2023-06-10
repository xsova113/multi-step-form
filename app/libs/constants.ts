export const stepsArray = [
  {
    tag: 1,
    step: "STEP 1",
    title: "YOUR INFO",
  },
  {
    tag: 2,
    step: "STEP 2",
    title: "SELECT PLAN",
  },
  {
    tag: 3,
    step: "STEP 3",
    title: "ADD-ONS",
  },
  {
    tag: 4,
    step: "STEP 4",
    title: "SUMMARY",
  },
];

export const inputObj = {
  name: "Name",
  namePlaceholder: "e.g. Stephen King",
  email: "Email Address",
  emailPlaceholder: "e.g. stephenking@lorem.com",
  phone: "Phone Number",
  phonePlaceholder: "e.g. +1 234 567 890",
};

export const titleArray = [
  {
    title: "Personal info",
    subTitle: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    subTitle: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    subTitle: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    subTitle: "Double-check everything looks OK before confirming.",
  },
];

export const planArray = [
  {
    img: "/assets/images/icon-arcade.svg",
    title: "Arcade",
    monthlyDisplay: "$9/mo",
    yearlyDisplay: "$90/yr",
  },
  {
    img: "/assets/images/icon-advanced.svg",
    title: "Advanced",
    monthlyDisplay: "$12/mo",
    yearlyDisplay: "$120/yr",
  },
  {
    img: "/assets/images/icon-pro.svg",
    title: "Pro",
    monthlyDisplay: "$15/mo",
    yearlyDisplay: "$150/yr",
  },
];

export const addOnsArrays = [
  {
    id: "onlineService",
    title: "Online service",
    subTitle: "Access to multiplayer games",
    cost: {
      monthlyCost: "+$1/mo",
      yearlyCost: "+$10/yr",
    },
  },
  {
    id: "largerStorage",
    title: "Larger storage",
    subTitle: "Extra 1TB of cloud save",
    cost: {
      monthlyCost: "+$2/mo",
      yearlyCost: "+$20/yr",
    },
  },
  {
    id: "customizableProfile",
    title: "Customizable Profile",
    subTitle: "Custom theme on your profile",
    cost: {
      monthlyCost: "+$2/mo",
      yearlyCost: "+$20/yr",
    },
  },
];
