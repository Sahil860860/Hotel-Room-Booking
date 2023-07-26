import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Immerse yourself in a symphony of flavors as you explore our diverse selection of handcrafted cocktails. From the refreshing zest of citrus to the bold allure of smoky notes, each drink is a work of art designed to captivate your senses.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Leave the hustle and bustle of everyday life behind as you embark on thrilling hiking adventures.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          " Unveil the treasures of the surrounding area without the stress of navigating unfamiliar roads. Our shuttle service provides easy access to nearby attractions, scenic spots, and popular landmarks, ensuring you make the most of your vacation.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "Indulge in the pleasure of perfectly chilled beer with our brewery-grade storage service. Here we take your beer enjoyment seriously, offering a state-of-the-art storage facility that ensures your favorite brews are always at their finest.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
