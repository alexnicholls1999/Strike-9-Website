import trainingPlans from "./../../assets/trainingPlans.png"
import training from "./../../assets/Training.png";
import corporate from "./../../assets/Corporate.png";
import events from "./../../assets/Events.png";

const home = {
    hero: {
        title: "STRIKE 9 TRAINING ACADEMY",
        paragraph: "Do you want to bring another level to your Game? Are you tracking your progress? Are you seeking additional training outside of your club team? Football is changing." 
    },
    panel: {
        img: {
            src: "https://www.sportengland.org/themes/custom/se/images/se-logo-white.png",
            alt: "SportEngland"
        }
    },
    trainingplans: {
        title: "TRAINING PLANS",
        img: {
            src: trainingPlans,
            alt: "football_player"
        },
        list: {
            points: [
                {
                    alternate: false,
                    title: "COLLABORATION",
                    paragraph: "We work year round with teams and individual players, to raise the level of every player we work with."
                },
                {   
                    alternate: true,
                    title: "GROWTH",
                    paragraph: "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football."
                }
            ], 
        }
    },
    goals: [
        {
            title: "COACHING",
            paragraph: "work with coaches to develop their knowledge"
          },
          {
            title: "PLAYERS",
            paragraph: "work with players to develop their skills"
          },
          {
            title: "PARENTS",
            paragraph: "work with parents to develop their understanding"
          },
          {
            title: "VOLUNTEERS",
            paragraph: "work with volunteers to develop their engagement"
          }
    ],
    feedback: {
        title: "WHAT OUR CUSTOMERS THINK OF S9T",
        quotes: [
            {
                name: "Jade White",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                rating: 5
            },
            {
                name: "Andy Stanford",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                rating: 1
            },
            {
                name: "Jessica Jadie",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                rating: 3
            },
            {
                name: "Ollie Burns",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                rating: 4
            },
            {
                name: "Mason Tanner",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                rating: 2
            }
        ]
    }, 
    about: {
        title: "ABOUT US",
        paragraph: "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in, and out, of the world of Football.",
        img: {
            src: "https://images.unsplash.com/photo-1609422644211-a85c36ee36a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
            alt: "strike-9-football-image"
        }
    },
    index: [
        {
            alternate: false,
            img: {
                src: training,
                alt: "FootballIndex-01"
            },
            button: {
                text: "TRAINING"
            },
            title: "TRAINING",
            paragraph: "Post videos with your skills. Like and follow others to be more popular."           
        },
        {
            alternate: true,
            img: {
                src: events,
                alt: "FootballIndex-02"
            },
            button: {
                text: "EVENTS"
            },
            title: "EVENTS",
            paragraph: "Post videos with your skills. Like and follow others to be more popular."                
        },
        {
            alternate: false,
            img: {
                src: corporate,
                alt: "FootballIndex-03"
            },
            button: {
                text: "CORPORATE"
            },
            title: "CORPORATE",
            paragraph: "Post videos with your skills. Like and follow others to be more popular."                
        }
    ]
}

export default home;