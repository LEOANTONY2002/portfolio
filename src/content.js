import LinkedIn from './assets/images/LinkedIn.png'
import GitHub from './assets/images/GitHub.png'
import Behance from './assets/images/Behance.png'
import Email from './assets/images/Email.png'
import Phone from './assets/images/Phone.png'
import Account from './assets/images/Account.png'
import Flipboard from './assets/images/Flipboard.png'
import Flutter from './assets/images/Flutter.png'
import Graphql from './assets/images/Graphql.png'
import NodeJs from './assets/images/NodeJs.png'
import PostgreSQL from './assets/images/PostgreSQL.png'
import PrismaOrm from './assets/images/PrismaOrm.png'
import ReactNative from './assets/images/ReactNative.png'
import UVBS from './assets/images/UVBS.png'
import BeYouElegance from './assets/images/BeYouElegance.png'
import SkillTracker from './assets/images/SkillTracker.png'

export const content = {
    name: "LEO ANTONY",
    bio: "Software Developer",
    contact: [{
        link: "https://linkedin.com/in/leo-antony",
        icon: LinkedIn
    },
    {
        link: "https://github.com/leoantony2002",
        icon: GitHub
    },
    {
        link: "https://www.behance.net/leoantony4",
        icon: Behance
    },
    {
        link: "mailto:leoantony20025@gmail.com",
        icon: Email
    },
    {
        link: "tel:9791971856",
        icon: Phone
    }],
    nav: [
        {
            link: "#profile",
            icon: Account
        },
        {
            link: "#projects",
            icon: Flipboard
        }
    ],
    projects: [
        {
            title: "UVBS",
            image: UVBS,
            app: true,
            figma: "https://www.figma.com/file/YjjOlSsGndMYnG4nU0YVHE/UVBS?type=design&node-id=0%3A1&mode=design&t=7pGiq1oE7I8vDJhv-1",
            web: "https://play.google.com/store/apps/details?id=com.unitedvbs.uvbs",
            github: "https://github.com/LEOANTONY2002/uvbsApp",
            skills: [Flutter, ReactNative, NodeJs, Graphql, PostgreSQL, PrismaOrm]
        },
        {
            title: "BE YOU ELEGANCE",
            image: BeYouElegance,
            app: true,
            figma: "https://www.figma.com/design/N1LYNVGaSYWQlJWlDdKE0n/Be-You-Elegance?node-id=0%3A1&t=KYh26pSlLUhLqriW-1",
            web: "https://beyouelagance.web.app/",
            github: "https://github.com/LEOANTONY2002/beyouelagance",
            skills: [Flutter, ReactNative, NodeJs, Graphql, PostgreSQL, PrismaOrm]
        },
        {
            title: "SKILL TRACKER",
            image: SkillTracker,
            app: true,
            figma: "https://www.figma.com/design/3QGzF5bu5Bvzhpu9LEQjiU/Skill-Tracker?node-id=0%3A1&t=pL3bsmx4NwIu6W4D-1",
            web: "https://ccxskill.web.app/",
            github: "https://github.com/LEOANTONY2002/SkillTraker",
            skills: [Flutter, ReactNative, NodeJs, Graphql, PostgreSQL, PrismaOrm]
        }
    ]
}

