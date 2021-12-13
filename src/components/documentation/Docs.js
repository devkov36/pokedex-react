import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../pokemon/ScrollTop";
import "./docs.css";

function Docs(props) {
  return (
    <Box sx={{ margin: 2 }}>
      <article className="docs">
        <h1 className="text">Introduction</h1>
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
        <h3 className="text">REST</h3>
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
          <code className="terminal">
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
            <span>"/v1/pokemons"</span>
            <span>,</span>
            <br />
            <span>"classification"</span>
            <span>:</span> <span>"/v1/classification"</span>
            <span>,</span>
            <br />
            <span>"types"</span>
            <span>:</span> <span>"/v1/types"</span>
            <span>,</span>
            <br />
            <span>"gens"</span>
            <span>:</span> <span>"/v1/gens"</span>
            <br />
            <span>{"]"}</span>
            <span>{"}"}</span>
          </code>
        </div>
        <p className="text">There are currently four available resources:</p>
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
        <h2>*️⃣Pokemon</h2>
        <p>
          There is a total of <code>801</code> pokemon sorted by id.
        </p>
        <h3>Get all Pokemon</h3>
        <p>
          You can access the list of Pokemon by using the{" "}
          <code>/v1/pokemons</code> endpoint.
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/pokemons
          </code>
        </div>
        <h3>Get a single Pokemon</h3>
        <p>
          You can get a single pokemon by adding the <code>id</code> as a
          parameter: <code>/v1/pokemons/1</code>
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/pokemons/1
          </code>
        </div>
        <h2>*️⃣Classification</h2>
        <p>
          There is a total of <code>95</code> classifications sorted by id.
        </p>
        <h3>Get all Classifications</h3>
        <p>
          You can access the list of classifications by using the{" "}
          <code>/v1/classification</code> endpoint.
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/classification
          </code>
        </div>
        <h3>Get a single classification</h3>
        <p>
          You can get a single classification by adding the <code>id</code> as a
          parameter: <code>/v1/classification/1</code>
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/classification/1
          </code>
        </div>
        <h2>*️⃣Types</h2>
        <p>
          There is a total of <code>18</code> pokemon types sorted by name.
        </p>
        <h3>Get all types</h3>
        <p>
          You can access the list of Pokemon types by using the{" "}
          <code>/v1/types</code> endpoint.
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/types
          </code>
        </div>
        <h3>Get a single type</h3>
        <p>
          You can get a single pokemon type by adding the <code>name</code> as a
          parameter: <code>/v1/types/Dark</code>
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/types/Dark
          </code>
          <p>
            The name of the type is case-sensitive and must be written with the
            first letter in uppercase.
          </p>
        </div>
        <h2>*️⃣Generation</h2>
        <p>
          There is a total of <code>7</code> generations sorted by id.
        </p>
        <h3>Get all generations</h3>
        <p>
          You can access the list of generations by using the{" "}
          <code>/v1/gens</code> endpoint.
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/gens
          </code>
        </div>
        <h3>Get a single generation</h3>
        <p>
          You can get a single pokemon type by adding the <code>id</code> as a
          parameter: <code>/v1/gens/1</code>
        </p>
        <div>
          <code className="terminal">
            <span>
              <span>GET </span>
              https://pokemon-bedu.herokuapp.com
            </span>
            /v1/gens/1
          </code>
        </div>
        <h2>Happy Coding 🎉</h2>
      </article>
      <ScrollTop {...props}>
        <Fab
          style={{ backgroundColor: "#d62929", color: "white" }}
          size="medium"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

export default Docs;
