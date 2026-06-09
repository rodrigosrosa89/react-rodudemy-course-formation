import React from "react";
import Feed from "./components/Feed";
class AppLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          username: "Rodrigo",
          curtidas: 10,
          comentarios: 2,
        },
        {
          id: 2,
          username: "Tassi",
          curtidas: 15,
          comentarios: 5,
        },
        {
          id: 3,
          username: "Amanda",
          curtidas: 5,
          comentarios: 1,
        },
        {
          id: 4,
          username: "Aspin",
          curtidas: 200,
          comentarios: 3,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <Feed
              key={item.id}
              username={item.username}
              curtidas={item.curtidas}
              comentarios={item.comentarios}
            />
          );
        })}
      </div>
    );
  }
}

export default AppLista;
