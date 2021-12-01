import React from "react";
import Heading from "../components/Heading";
import image from "../assets/hero-img.jpg";
import etherium from "../assets/etherium.svg";
import Card from "../components/Card";

const AccessTicketScreen = () => {
  const cardData = [
    {
      membership: "Membership Bronze",
      image: image,
      icon: etherium,
      price: 0.1,
      priceInDollar: "$412",
      desc: [
        " Pre-Access to Spooky & the Trendland Gallery",
        "Surprise artwork airdropped",
        "Lifetime updates",
      ],
      limited: 3333,
      remaining: 0,
    },
    {
      membership: "Membership Silver",
      image: image,
      icon: etherium,
      price: 0.2,
      priceInDollar: "$812",
      desc: [
        " Access to all collection drops",
        " Choice to redeem physical artwork",

        "Governance tokens airdropped",
        " Surprise artwork airdropped",
        "Lifetime updates",
      ],
      limited: 1111,
      remaining: "1,245",
    },
    {
      membership: "Membership Gold",
      image: image,
      icon: etherium,
      price: 0.5,
      priceInDollar: "$2,012",
      desc: [
        "All the ‘Silver’ benefits",
        "Additional governance tokens",
        "Invites to exclusive events",
        "Exclusive 1/1 artwork airdropped",
        "And all the ‘Silver’ benefits",
      ],
      limited: 888,
      remaining: 137,
    },
  ];

  return (
    <section className="md:container-section py-20 -mt-10 bg-white rounded-t-3xl shadow-2xl p-10">
      <Heading text="NFT ACCESS Ticket" />
      <p className="text-gray-600 md:w-2/4 mx-auto text-md">
        A limitted pre-access membership tickeets to 5,100. And as a lifetime
        member you will not only be part of a special group of collectors and
        artists but have an exclsuive access of the future POLYONE.IO and
        special 1/1 edition airdropped.
      </p>
      <section className="grid md:grid-cols-3 place-items-stretch gap-16 py-20">
        {cardData.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </section>
    </section>
  );
};

export default AccessTicketScreen;
