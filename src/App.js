import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { Switch, Route } from 'react-router';
import RouteProvider from './utils/Context/RouteContext';
import ContentProvider from './utils/Context/ContentContext';

import content from './utils/content';
import theme from './styles/theme';
import routes from './utils/routes';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <RouteProvider pages={routes}>
          <ContentProvider content={content}>
            {routes.pages.map(({ exact, path, component}, i) => <Route key={i} exact={exact} path={path} component={component}/>)}
          </ContentProvider>
        </RouteProvider>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
