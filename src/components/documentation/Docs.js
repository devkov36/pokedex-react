import { Box } from "@mui/material";
import "./docs.css";

function Docs() {
  return (
    <Box sx={{ margin: 2 }}>
      <article>
        <h2>Introduction</h2>
        <p>
          This documentation will help you get familiar with the resources of
          the <strong>Pokemon-API</strong> and show you how to make different
          queries, so that you can get the most out of it.
        </p>
        <p>
          The API is a RESTful API, which means that you can use it to make
          different requests to get different data. The API is also open source,
          so you can use it to make your own projects.
        </p>
        <h3>REST</h3>
        <p>
          <strong>Base url:</strong>{" "}
          <a
            href="https://pokemon-bedu.herokuapp.com/v1"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            https://pokemon-bedu.herokuapp.com/v1
          </a>
        </p>
        <p>
          All requests are <code>GET</code> requests and go over{" "}
          <code>https</code>. All responses will return data in{" "}
          <code>json</code>.
        </p>
        <div>
          <code>
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com/v1
            </span>
          </code>
        </div>
        <div className="terminal">
          <code>
            <span>{"{"} </span>
            <span>"welcome to Pokémon API"</span>
            <span>{"["} </span>
            <br />
            <span>"pokemons"</span>
            <span>:</span>
            <span>"https://pokemon-bedu.herokuapp.com/v1/pokemons"</span>
            <span>,</span>
            <br />
            <span>"classification"</span>
            <span>:</span>{" "}
            <span>"https://pokemon-bedu.herokuapp.com/v1/classification"</span>
            <span>,</span>
            <br />
            <span>"types"</span>
            <span>:</span>{" "}
            <span>"https://pokemon-bedu.herokuapp.com/v1/types"</span>
            <span>,</span>
            <br />
            <span>"gens"</span>
            <span>:</span>{" "}
            <span>"https://pokemon-bedu.herokuapp.com/v1/gens"</span>
            <span>{"]"}</span>
            <span>{"}"}</span>
          </code>
        </div>
        <p>There are currently four available resources:</p>
        <ul>
          <li>
            <a
              href="https://pokemon-bedu.herokuapp.com/v1/pokemons"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Pokemons
            </a>
            : used to get all the pokemons.
          </li>
          <li>
            <a
              href="https://pokemon-bedu.herokuapp.com/v1/classification"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Classifications
            </a>
            : used to get all the classifications.
          </li>
          <li>
            <a
              href="https://pokemon-bedu.herokuapp.com/v1/types"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Types
            </a>
            : used to get all the types.
          </li>
          <li>
            <a
              href="https://pokemon-bedu.herokuapp.com/v1/gens"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Gens
            </a>
            : used to get all the gens.
          </li>
        </ul>
      </article>
    </Box>
  );
}

export default Docs;
