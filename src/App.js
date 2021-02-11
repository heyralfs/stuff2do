import React from 'react';
import { ThemeProvider } from 'styled-components';
import Form from './components/Form';
import GitHubCorner from './components/GitHubCorner';
import Widget from './components/Widget';
import GlobalStyle from './globalStyle';
import logo from './logo.svg';




export default function App() {

  const defaultPreferences = {
    submitColor: '#5dd39e',
    bgColor: '#fe7f2d',
    widgetBg: '#fff',
    titleColor: '#fe7f2d', 
  }

  // to change some theme preference, eg, color, do: 
  // setPreferences( { ...defaultPreferences, color: 'yellow' } )

  // only for dev
  React.useEffect( () => {
    setPreferences(defaultPreferences)
  }, [defaultPreferences])

  const [ preferences, setPreferences ] = React.useState(defaultPreferences);

  return (
    <div className="App">
      <ThemeProvider theme={preferences} >
        
        <GlobalStyle />

        <Widget>
          <Widget.Header>
            <h1>
              STUFF 2 DO
            </h1>
            <p style={{ textAlign: 'center' }}>
              A todo list build with React by <a href='https://github.com/heyralfs' target='_blank'>me</a> :)
            </p>
          </Widget.Header>

          <Widget.Content>
            <Form>
              <input type='text' placeholder='New task' />
              <select>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Upcoming</option>
                <option>Someday</option>
              </select>
              <button type='submit'>Ok</button>
            </Form>
          </Widget.Content>
        </Widget>

        <GitHubCorner projectUrl='https://github.com/heyralfs/stuff2do' />
      
      </ThemeProvider>
      
    </div>
  );
}