import styles from './App.module.css';

import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <>
      <div className={styles.content}>
        <Header>
          <Content />
        </Header>
      </div>
      <Footer />
    </>
  )
}

export default App;
