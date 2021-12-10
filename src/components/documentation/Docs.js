function Docs() {
  return (
    <div class="content">
      <article class="article__Article-dsqu2p-0 docs__Article-y8vzk-1 kuaylo gJdYTa">
        <h2 id="introduction">Introduction</h2>
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
          All requests are <code class="language-text">GET</code> requests and
          go over <code class="language-text">https</code>. All responses will
          return data in <code class="language-text">json</code>.
        </p>
        <div
          class="restQuery__Wrapper-tkzubw-0 iQKEuF gatsby-highlight"
          data-language="shell"
        >
          <pre class="language-shell">
            <code class="language-shell">
              <span class="endpoint">
                <span class="request">GET </span>
                https://pokemon-bedu.herokuapp.com/v1
              </span>
            </code>
          </pre>
        </div>

        <div class="gatsby-highlight" data-language="json">
          <pre class="language-json">
            <code class="language-json">
              <span class="token punctuation">{"{"} </span>
              <span class="token property">"welcome to Pokémon API"</span>
              <span class="token punctuation">{"["} </span>
              <br />
              <span class="token property">"pokemons"</span>
              <span class="token operator">:</span>
              <span class="token string">
                "https://pokemon-bedu.herokuapp.com/v1/pokemons"
              </span>
              <span class="token punctuation">,</span>
              <br />
              <span class="token property">"classification"</span>
              <span class="token operator">:</span>{" "}
              <span class="token string">
                "https://pokemon-bedu.herokuapp.com/v1/classification"
              </span>
              <span class="token punctuation">,</span>
              <br />
              <span class="token property">"types"</span>
              <span class="token operator">:</span>{" "}
              <span class="token string">
                "https://pokemon-bedu.herokuapp.com/v1/types"
              </span>
              <span class="token punctuation">,</span>
              <br />
              <span class="token property">"gens"</span>
              <span class="token operator">:</span>{" "}
              <span class="token string">
                "https://pokemon-bedu.herokuapp.com/v1/gens"
              </span>
              <span class="token punctuation">{"]"}</span>
              <span class="token punctuation">{"}"}</span>
            </code>
          </pre>
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
    </div>
  );
}

export default Docs;
