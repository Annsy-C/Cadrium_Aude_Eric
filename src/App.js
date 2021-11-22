import Layout from './components/layout';
import Route from './components/route';
import Accueil from './pages/accueil';
import CadresStandards from './pages/cadres_standards';
import CadresPersonnalises from './pages/cadres_personnalises';
import ObjetsDArt from './pages/objets_d_art';
import Evenements from './pages/evenements';
import Contact from './pages/contact';
import CadresAlpha from './pages/cadres_alpha';
import CadresC2 from './pages/cadresC2';
import CadresScandic from './pages/cadres_scandic';
import ArtChats from './pages/art_chats';
import ArtDivers from './pages/art_divers';

function App() {
  return (
    <Layout>
      <Route pathname="/">
        <Accueil />
      </Route>
      <Route pathname="/cadres_personnalises">
        <CadresPersonnalises />
      </Route>
      <Route pathname="/cadres_standards">
        <CadresStandards />
      </Route>
      <Route pathname="/cadres_standards/cadres_alpha">
        <CadresAlpha />
      </Route>
      <Route pathname="/cadres_standards/cadresC2">
        <CadresC2 />
      </Route>
      <Route pathname="/cadres_standards/cadres_scandic">
        <CadresScandic />
      </Route>
      <Route pathname="/objets_d_art">
        <ObjetsDArt />
      </Route>
      <Route pathname="/objets_d_art/art_chats">
        <ArtChats />
      </Route>
      <Route pathname="/objets_d_art/art_divers">
        <ArtDivers />
      </Route>
      <Route pathname="/evenements">
        <Evenements />
      </Route>
      <Route pathname="/contact">
        <Contact />
      </Route>
    </Layout>
  );
}

export default App;

