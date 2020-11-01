import React from 'react'
import WinnerCard from './winnerCard'

import '../styles/fluxathonWinners.scss'
import '../styles/winnerCard.scss'

import FirstPhoto from '../assets/fluxathonFirst.jpg'
import SecondPhoto from '../assets/fluxathonSecond.jpg'
import ThirdPhoto from '../assets/fluxathonThird.jpg'

const fluxathonWinners = (props) => {
    return(
        <section className="graySection">
            <div className="container">
                <div className="sectionTitle">
                    <h1 className="title medium">FLUXathon x Duolingo Winners</h1>
                    <div className="communityDescription">
                        <p className="body medium">FLUXathon Fall 2020 was our BIGGEST Fluxathon yet with over 20 team registered to complete. On top of that, it was the first time we had a company sponsor, Duolingo. We had a great time collaborating with them and the projects that came out of this 24-hour design sprint were amazing.</p>
                        <a target="_blank" href="https://docs.google.com/presentation/d/1SaiEO5hwfPRk635E35VNDGKuxSu_AYT86HYStXe9WBA/edit?usp=sharing"><button className="whiteButton">View Kickoff Deck</button></a>
                    </div>
                </div>
                <WinnerCard 
                    ranking="1st Place" 
                    rankColor="gold" 
                    teamName="Reefine (Team Sea Simps)" 
                    description="Reefine, a credit card where users can spend money, directly donate to ocean conservation efforts—and even collect rewards. Whenever users spend money, they have the option to round up and donate to a cause of their choice—from ocean cleanups, to coral restorations, and more. Users can also earn cashback and redeemable rewards from the contributions they make." 
                    team1="Mikayla Kim" team1Detail="UX Senior" 
                    team2="Sunny Lee" team2Detail="Graphic Design Senior" 
                    team3="Katsy Garcia" team3Detail="Illustration Senior" 
                    url="https://docs.google.com/presentation/d/16dm6fC71Am0XVUjLIwroguYpy0wEQgj3CAo-sUjyMGI/edit?usp=sharing" 
                    photo={FirstPhoto}/>
                <WinnerCard 
                    ranking="2nd Place" 
                    rankColor="silver" 
                    teamName="Anew (Team Momento Mori)" 
                    description="Anew is a conversational application that aids in fostering dialogue between parents and their children to help them better understand the concept of death. The game uses storytelling and interactive elements to subtlely bring up the conversation of death to the child in a friendly understandable way. Activities include celebrating a dead grandmother's birth anniversary by baking a cake." 
                    team1="Aparna Somvanshi" team1Detail="UX Junior" 
                    team2="Nandika Gupta" team2Detail="UX Senior" 
                    team3="Varun Khatri" team3Detail="UX Junior" 
                    team4="James Fookes" team4Detail="Illustration Senior" 
                    url="https://docs.google.com/presentation/d/1VtjR5TEcNE-ueGi7wOiG2Ud7CYYr3FaWu3zGcz921pc/edit?usp=sharing" 
                    photo={SecondPhoto}/>
                <WinnerCard 
                    ranking="3rd Place" 
                    rankColor="bronze" 
                    teamName="Terratory" 
                    description="TerraTory is an online, multiplayer game that encourages its users to recycle. By using popular open-world RPG gaming styles, TerraTory challenges both the user’s mental model of what a game is and also of recycling. The previously arduous task now takes on a new, fresh, and fun meaning. Plus, playing with your friends not only encourages friendly competition, but a better planet overall."
                    team1="Arjun Gupta" team1Detail="UX Junior"
                    team2="Ovadia Cohen" team2Detail="Industrial Design Junior"
                    team3="Quint Bailey" team3Detail="UX Junior"
                    url="https://docs.google.com/presentation/d/1kKIAsWSon1k7wDU7iVgRyGzqzxDSosbV9o3Zkh7Cn9I/edit?usp=sharing" 
                    photo={ThirdPhoto}/>
            </div>
        </section>
    )
}

export default fluxathonWinners