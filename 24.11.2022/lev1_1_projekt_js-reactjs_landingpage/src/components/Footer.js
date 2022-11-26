import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <article>
        <img src={require("../imgs/salat.jpeg")} alt="" />
        <h4>Fusce dictum finibus</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$45 / $55</p>
      </article>
      <article>
        <img src={require("../imgs/pizza.jpeg")} alt="" />
        <h4>Aliquam sagitittis</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$65 / $70</p>
      </article>
      <article>
        <img src={require("../imgs/frikadellen.jpeg")} alt="1" />
        <h4>Sed varius turpis</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$30.50</p>
      </article>
      <article>
        <img src={require("../imgs/glass.jpeg")} alt="2" />
        <h4>Aliquam sagittis</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$25.50</p>
      </article>
      <article>
        <img src={require("../imgs/pizza2.jpeg")} alt="3" />
        <h4>Maecenas eget justo</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$25.50</p>
      </article>
      <article>
        <img src={require("../imgs/scampi.jpeg")} alt="4" />
        <h4>Quisque et felis eros</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$25.50</p>
      </article>
      <article>
        <img src={require("../imgs/spagetthi.jpeg")} alt="5" />
        <h4>sed ultiricies dui</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$25.50</p>
      </article>
      <article>
        <img src={require("../imgs/teller.jpeg")} alt="6" />
        <h4>Fusce dictum finibus</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?
        </p>
        <p>$25.50</p>
      </article>
    </footer>
  );
};

export default Footer;
