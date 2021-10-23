import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react';
import "./css/myproject.css";
import line from "./image/line.png";
export default function MyProject() {
  return (
    <div className='row myproject'>
      <h1>My Project</h1>
      <div className='col-sm-12 col-md-6 col-lg-4 card-item'>
        <Card color='red' href='#card-example-link-card'>
          <Card.Content header='JAVASCRIPT E-COMMERCE SITE' />
          <Card.Content description='A dynamic website was created in order to use the JSON file from the server, transfer it to the screen and create original designs.' />
          <Card.Content extra>
            Technologies Used: RestAPI, Javascript, jOuery, HTML5, CSS3 <br/>
            <Button animated>
              <Button.Content visible>Go to project</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </div>

      <div className='col-sm-12 col-md-6 col-lg-4 card-item'>
        <Card color='red' href='#card-example-link-card'>
          <Card.Content header='REACT DYNAMIC FORM GENERATOR' />
          <Card.Content description=' A dynamic form was created that is shaped according to the JSON file coming from the server, provides compatibility with every sent form and can be displayed on the screen.' />
          <Card.Content extra>
            Technologies Used: RestAPI, ReactJS, TypeScript, Boostrap <br/>
            <Button animated>
              <Button.Content visible>Go to project</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </div>

      <div className='col-sm-12 col-md-6 col-lg-4 card-item'>
        <Card color='red' href='#card-example-link-card'>
          <Card.Content header='REACT YOUTUBE SEARCH APİ' />
          <Card.Content description='With the Search API offered by Youtube to us, it was possible to search, retrieve the sought data information, add to the folders, and view the data added to the favorites.' />
          <Card.Content extra>
            Technologies Used: RestAPI, ReactJS, TypeScript, Semantic UI <br/>
            <Button animated>
              <Button.Content visible>Go to project</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </div>

      <div className='col-sm-12 col-md-6 col-lg-4 card-item'>
        <Card color='red' href='#card-example-link-card'>
          <Card.Content header='REACT PHARMACY API' />
          <Card.Content description='With NosApi, a website was created that lists pharmacies in Turkey by province, district or location information of the user.' />
          <Card.Content extra>
            Technologies Used: RestAPI, ReactJS, TypeScript, Semantic UI <br/>
            <Button animated>
              <Button.Content visible>Go to project</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </div>

      <div className='col-sm-12 col-md-6 col-lg-4 card-item'>
        <Card color='red' href='#card-example-link-card'>
          <Card.Content header='REACT WEATHER APİ' />
          <Card.Content description='Searching for weather conditions by provinces and transferring them to the screen with WeatherApi.' />
          <Card.Content extra>
            Technologies Used: RestAPI, ReactJS, TypeScript, CSS
            <Button animated>
              <Button.Content visible>Go to project</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      </div>

    </div>
  )
}
