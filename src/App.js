import "./App.css";
import Header from "./components/HeaderComponent/header";
import Layout from "./components/LayoutComponent/layout";
import Footer from "./components/FooterComponent/footer";
import PokemonCard from "./components/PokemonCardComponent/pokemoncard";

import logo from "./assets/bg1.jpg";
import data from "./assets/game.json";
const App = () => {
  return (
    <>
      <Header title="Pokemon Game" descr="" />

      <Layout id="1" title="Layout 1" descr="lorem*18" urlBg={logo} colorBg="">
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.{" "}
        </p>
      </Layout>

      <Layout id="2" title="Layout 2" descr="lorem*19" urlBg="" colorBg="green">
        <div className="flex">
          {data.map((item, index) => (
            <PokemonCard
              key={index}
              type={item.type}
              values={item.values}
              img={item.img}
              name={item.name}
              id={item.id}
            />
          ))}
        </div>
      </Layout>
      <Layout
        id="3"
        title="Layout 3"
        descr="lorem*20"
        urlBg="bg1.jpg"
        colorBg=""
      />
      <Footer />
    </>
  );
};

export default App;
