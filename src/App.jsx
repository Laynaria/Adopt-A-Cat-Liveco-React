import Header from "./components/Header";
import Card from "./components/Card";
import CardTwo from "./components/CardTwo";

import "./App.css";

function App() {
  const animalsToAdopt = [
    {
      name: "Lucky",
      picture: "https://placekitten.com/200/287",
    },
    {
      name: "Symba",
      picture: "https://placekitten.com/200/139",
    },
    {
      name: "Léo",
      picture: "https://placekitten.com/200/90",
    },
    {
      name: "Milo",
      picture: "https://placekitten.com/200/194",
    },
    {
      name: "Charly",
      picture: "https://placekitten.com/200/179",
    },
  ];

  // const charly = {
  //   name: "Charly",
  //   picture: "https://placekitten.com/200/179",
  // };

  return (
    <>
      <Header title="Adopt a cat!" />
      <div className="cards">
        <Card name="Billy" picture="http://placekitten.com/200/300" />
        <Card
          name={animalsToAdopt[0].name}
          picture={animalsToAdopt[0].picture}
        />
        <Card
          name={animalsToAdopt[1].name}
          picture={animalsToAdopt[1].picture}
        />
        <Card
          name={animalsToAdopt[2].name}
          picture={animalsToAdopt[2].picture}
        />
        <Card
          name={animalsToAdopt[3].name}
          picture={animalsToAdopt[3].picture}
        />
        <Card
          name={animalsToAdopt[4].name}
          picture={animalsToAdopt[4].picture}
        />

        {/* <Card name={charly.name} picture={charly.picture} /> */}
        {/* <CardTwo object={charly} /> */}
      </div>
    </>
  );
}

export default App;
